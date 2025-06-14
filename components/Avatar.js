import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const AvatarPicker = ({ onImageSelected }) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("We need to have access to your pictures.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);
      onImageSelected(uri);           
    }
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={pickImage}>
      <Image
        source={
          imageUri
            ? { uri: imageUri }
            : require("../images/doggy.png") 
        }
        style={styles.avatar}
      />
      <Text style={styles.text}>Kies foto</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: { alignItems: "center", gap: 8 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#e8b89e",
  },
  text: { color: "#555" },
});

export default AvatarPicker;
