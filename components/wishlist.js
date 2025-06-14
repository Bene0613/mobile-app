import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const WishlistButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>♡ Add to wishlist</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d0a58e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
  }
});

export default WishlistButton;
