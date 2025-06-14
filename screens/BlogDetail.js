import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const BlogDetailScreen = ({ route }) => {
  const { title, content, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
     fontFamily: "charm-regular",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
     fontFamily: "charm-regular",
  },
});

export default BlogDetailScreen;
