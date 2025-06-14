import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const AboutUsPage = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
      At Beryl & Co., we believe jewelry should be more than an accessory; it should be a story.Founded with a passion for timeless elegance and natural beauty, our collections are inspired by the rich tones of the beryl gemstone family, from emerald greens to aquamarine blues. Each piece is crafted with care, blending modern design with classic sophistication, made to celebrate every moment (big or small).Thank you for being part of our story.
      </Text>
      <Image
        source={require('../images/colleagues.jpeg')} 
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
     width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
     fontFamily: "charm-regular",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
     fontFamily: "charm-regular",
  },
});

export default AboutUsPage;