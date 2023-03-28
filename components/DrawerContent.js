import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { SafeAreaView, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const DrawerContent = (props) => (
    <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
    >
        <TouchableOpacity style={styles.imgWrapper} onPress={() => props.navigation.navigate("Home")}>
            <Image source={require('../assets/images/Logo.png')} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    imgWrapper: {
        height: 56,
        backgroundColor: "#DA9816",
        overflow: "hidden",
    },
    img: {
        height: "100%",
        width: "100%",
    },
    btn: {
        height: 40,
        backgroundColor: "#DA9816",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 18
    }
});

export default DrawerContent;