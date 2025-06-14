import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddToCartButton from '../components/addToCart';
import WishlistButton from '../components/wishlist';

const DetailsScreen = ({ route }) => {
  const { title, price, description } = route.params.product;
  const [quantity, setQuantity] = useState(1);

  const { addToWishlist } = useContext(WishlistContext); 

  const handleAddToWishlist = () => {
    addToWishlist(route.params.product); 
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Total: € {price * quantity}</Text>

      <AddToCartButton onPress={() => alert(`${quantity} x ${title} has been added in your cart`)} />

      <WishlistButton onPress={handleAddToWishlist} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "charm-regular",
  },
  price: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    fontFamily: "charm-regular",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#e8b89e",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "charm-regular",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
    fontFamily: "charm-regular",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
    fontFamily: "charm-regular",
  },
});

export default DetailsScreen;
