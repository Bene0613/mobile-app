import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image 
        source={require("../images/B3OFJYI196-master.webp")} 
        style={styles.image} 
      />
      <Text style={styles.title}>Euriell Earring</Text>
      <Text style={styles.description}>
        Elegant silver earrings with a unique design.
      </Text>
      <Text style={styles.price}>27.50€</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>See product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProductCard;
