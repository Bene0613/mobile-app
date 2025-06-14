import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ title, description, price, image, onPress, showButton = true }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <Image source={typeof image === "string" ? { uri: image } : image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>

            {showButton && (
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        alignItems: "center",
        width: "90%",  
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        resizeMode: "cover",  
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#e8b89e",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProductCard;