import React from "react";
import { View, Text, StyleSheet } from "react-native";

function CartScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>Cart Screen</Text>
        </View>
    );
}

export const cartScreenOptions = ({ navigation }) => {
    return {
        headerTitle: "Your Cart",
    };
};

export default CartScreen;

const styles = StyleSheet.create({
    screen: { flex: 1, alignItems: "center", justifyContent: "center" },
});
