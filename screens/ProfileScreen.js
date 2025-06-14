import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AvatarPicker from "../components/Avatar";

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My profile</Text>

      <AvatarPicker onImageSelected={setAvatar} />

      {avatar && <Text style={styles.confirm}>Picture is saved ✓</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 30 
   },
  confirm: {
    marginTop: 20, 
    color: "#4caf50" 
   },
});

export default ProfileScreen;
