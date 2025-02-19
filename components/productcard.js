import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductCard = () => {
    return (
    <View style={styles.card}>
    <Image
    source={require("../images/FABFBW00Z6-master.webp")}
    style={styles.image}
    />
    <Text style={styles.title}>Lala Ring</Text>
    <Text style={styles.description}>Elegant silver ring with a unique design.</Text>
    <Text style={styles.price}>32.99€</Text>
    <Button title="Add to Cart" onPress={() => alert("Added to cart!")} />
    </View>
    );
    };

const styles = StyleSheet.create ({
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
        marginTop:10,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#555",
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        fontWeight:"bold",
        color:"#333",
    }
});

export default ProductCard;