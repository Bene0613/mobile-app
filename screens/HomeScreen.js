import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bestsellers</Text>

            <ScrollView style={styles.cardContainer}>
                <View style={styles.row}>
                    <ProductCard
                        title="Clark Necklace"
                        description="Necklace with a music note"
                        price="€83.99"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Clark Necklace",
                                description: "Necklace with a music note",
                                price: "€83.99",
                            })
                        }
                    />

                    <ProductCard
                        title="Azalea Jonc"
                        description="Beautiful silver chunky chain"
                        price="€26.99"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Azalea Jonc",
                                description: "Beautiful silver chunky chain",
                                price: "€26.99",
                            })
                        }
                    />

                    <ProductCard
                        title="Veda Dangles"
                        description="Earring with a mix of yellow gold,pink gold and silver"
                        price="€63.60"
                        image={require("../images/B3OFJYI196-master.webp")}
                        onPress={() =>
                            navigation.navigate("Details", {
                                title: "Veda Dangles",
                                description: "Earring with a mix of yellow gold,pink gold and silver",
                                price: "€€63.60",
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
