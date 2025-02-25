import React from 'react';
import { StyleSheet, Text, View, Image} from "react-native";

const DetailsScreen = () => {
return (
<View style={styles.card}>
    <Image source={require("../images/B3OFJYI196-master.webp")} style={styles.image} />
    <Text style={styles.title}>Euriell Earring</Text>
    <Text style={styles.description}>Elegant silver earrings with a unique design.</Text>
    <Text style={styles.price}>27.50€</Text>
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

export default DetailsScreen;