import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProductCard from "../components/productcard"; 

export default function App() {
return (
<View style={styles.container}>
<Text style={styles.heading}>Our Bestsellers</Text>
<ScrollView contentContainerStyle={styles.scrollContainer}>
<ProductCard />
<ProductCard />
<ProductCard />
</ScrollView>
<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
paddingTop: 50,
},
heading: {
fontSize: 22,
fontWeight: "bold",
marginBottom: 20,
},
scrollContainer: {
alignItems: "center",
},
});
