import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import BlogScreen from "./screens/Blogscreen";
import BlogDetailScreen from "./screens/BlogDetail";
import AboutUsPage from "./screens/about";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "charm-regular": require("./assets/Charm-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <WishlistProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              fontFamily: "charm-regular",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={ProductDetail} />
          <Stack.Screen name="Blog" component={BlogScreen} />
          <Stack.Screen name="BlogDetails" component={BlogDetailScreen} />
          <Stack.Screen name="AboutUs" component={AboutUsPage} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Wishlist" component={WishlistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WishlistProvider>
  );
}