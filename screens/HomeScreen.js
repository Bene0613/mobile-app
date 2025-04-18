import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import ProductCard from "../components/ProductCard.js";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "All categories",
  "67e2d8777ceeeb883e00ab08": "Bracelets",
  "67e2d867aeb1b6dc8c8f2ee2": "Necklaces",
  "67e2d819fd1301f8e7ef6cfa": "Rings",
  "67e2d80d8e71acb806ae63a0": "Earrings",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setOption] = useState("price-asc");

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67b35e97083c8e78cc4ddc10/products",
      {
        headers: {
          Authorization:
            "Bearer 9debb61cb18209d3f319f766bcdd05e4ef09ee0f2308e84797c3a2476eeabea4",
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
            category:
              categoryNames[item.product.fieldData.category[0]] || "Unknown",
          }))
        )
      )
      .catch((err) => console.error("Error:", err));
  }, []);

  // Filter and sort products in one step
  const filteredAndSortedProducts = [...products]
    .filter(
      (p) =>
        (selectedCategory === "" || p.category === selectedCategory) &&
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our products</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for jewelry..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
          dropdownIconColor="#555"
        >
          <Picker.Item label="All categories" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setOption}
          style={styles.picker}
        >
          <Picker.Item label="Price (low - high)" value="price-asc" />
          <Picker.Item label="Price (high - low)" value="price-desc" />
          <Picker.Item label="Name (A - Z)" value="name-asc" />
          <Picker.Item label="Name (Z - A)" value="name-desc" />
        </Picker>
      </View>

      <ScrollView style={styles.cardContainer}>
        <View style={styles.row}>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.subtitle}
              price={product.price}
              image={product.image}
              onPress={() => navigation.navigate("Details", product)}
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
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchInput: {
    width: "90%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#333",
  },
  pickerContainer: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  
  picker: {
    height: 50,
    width: "100%",
    color: "#333",
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
