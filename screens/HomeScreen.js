import React, { useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.webflow.com/v2/sites/67b35e97083c8e78cc4ddc10/products67e2e16589324a679c942716",
            {
                headers: {
                    Authorization:
                    "Bearer 9debb61cb18209d3f319f766bcdd05e4ef09ee0f2308e84797c3a2476eeabea4",
                },
            }
        )
        .then((res) =>res.json())
        .then((data) =>
            setProducts(
                data.item.map((item) => ({
                    id: item.product.id,
                    title: item.product.fieldData.name,
                    subtitle: item.product.fieldData.description,
                    price: (item.skus[0]?.fieldData.price.value || 0) / 100,
                    image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
                }))
            )
        )
        .catch((err) => console.error("Error:", err));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bestsellers</Text>

            <ScrollView style={styles.cardContainer}>
                <View style={styles.row}>
                    {products.map((product) =>(
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.subtitle}
                        price={product.price}
                        image={product.image}
                        onPress={() =>
                            navigation.navigate("Details", product)}
                    />  
                    ))}
                    
                </View>
            </ScrollView>
            
            <StatusBar style="auto" />

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
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    cardContainer: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingHorizontal: 10,
    },
});

export default HomeScreen;
