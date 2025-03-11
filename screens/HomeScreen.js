import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>The Collection</Text>

            <ScrollView style={styles.cardContainer}>
                <View style={styles.row}>
                    <ProductCard
                        title="Meredith earrings"
                        description="Earrings made with heated ruby"
                        price="€90,-"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Meredith earrings",
                                description: "Earrings made with heated ruby",
                                price: "€90,-",
                            })
                        }
                    />

                    <ProductCard
                        title="Sapphire Necklace"
                        description="Beautiful sapphire with silver chain"
                        price="€120,-"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Sapphire Necklace",
                                description: "Beautiful sapphire with silver chain",
                                price: "€120,-",
                            })
                        }
                    />

                    <ProductCard
                        title="Emerald Ring"
                        description="Emerald stone set in a golden band"
                        price="€150,-"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Emerald Ring",
                                description: "Emerald stone set in a golden band",
                                price: "€150,-",
                            })
                        }
                    />
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
