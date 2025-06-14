import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BlogCard from "../components/BlogCards.js";

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  fetch("https://api.webflow.com/v2/collections/67bf0eda301f0c59ca4cec75/items", {
    headers: {
      Authorization: "Bearer 9debb61cb182a09d3f319f766bcdd05e4ef09ee0f2308e84797c3a2476eeabea4",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const items = Array.isArray(data.items) ? data.items : [];
      setBlogs(
        items.map((item) => ({
          id: item._id,
          title: item.fieldData.title,
          summary: item.fieldData.summary,
          content: item.fieldData.content,
          image: item.fieldData["main-image"]?.url,
        }))
      );
    })
    .catch((err) => console.error("Error:", err));
}, []);


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Blogs</Text>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          summary={blog.summary}
          image={blog.image}
          onPress={() => navigation.navigate("BlogDetail", blog)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
     fontFamily: "charm-regular",
  },
});

export default BlogScreen;
