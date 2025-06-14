import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddToCartButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e8b89e",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default AddToCartButton;
