import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const DetailsScreen = ({ route }) => {
    const { title, price, description } = route.params; 
    const [quantity, setQuantity] = useState(1);

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

            <Text style = {styles.totalPrice}>Total: € {price * quantity}</Text>
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
    },
    price: {
        fontSize: 18,
        color: "#333",
        marginBottom: 20,
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
    },
    description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 10,
        paddingHorizontal: 20,
    },
});

export default DetailsScreen;
