import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, View } from "react-native";

import ProductCard from "../components/ProductCard";

const HomeSc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.row}>
          <ProductCard />
          <ProductCard />
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
    paddingTop: 50,
  },
  heading: {
    fontSize: 22,
    color: "#333", // Changed to a darker color for visibility
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10, // Adds spacing between product cards (optional)
  },
});

export default HomeSc;
