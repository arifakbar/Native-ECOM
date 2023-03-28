import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, TouchableOpacity, Image } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';
import MoreIn from "../components/MoreIn";
import Banner from "../components/Banner";
import LoginModal from "../components/LoginModal";
import { getAllSubCategories } from "../functions/SubCategory";

function HomeScreen(props) {
    const [subs, setSubs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSubs = async () => {
        try {
            setLoading(true);
            const res = await getAllSubCategories();
            setSubs(res.data.data);
            console.log("R:", res.data.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    // useEffect(() => {
    //     fetchSubs();
    // }, []);

    return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <LoginModal visible={props.route.params.modal} navigation={props.navigation} />
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Search here...." style={styles.search} />
                    <TouchableOpacity style={styles.searchBar} onPress={() => props.navigation.navigate("Search")} >
                        <Ionicons name="search" size={20} color="grey" />
                    </TouchableOpacity>
                </View>
                <Banner title="Snacks" img={[require('../assets/images/menu-ff-pizza.jpg'), require('../assets/images/menu-ff-frankie.jpg'), require('../assets/images/menu-ff-pasta.jpg')]} />
                <MoreIn />
                <View style={styles.banner2}>
                    <TouchableOpacity>
                        <Text style={styles.bannerText2}>Full Course</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bannerScroll} >
                        <Image source={require('../assets/images/menu-meal.jpg')} style={styles.bannerImg2}
                            resizeMode="cover" />
                    </TouchableOpacity>
                </View>
                <MoreIn />
                <Banner title="Drinks" img={[require('../assets/images/menu-drinks-mocktail.jpg'), require('../assets/images/menu-drinks-shakes.jpg'), require('../assets/images/menu-drinks-soup.jpg')]} />
                <MoreIn />
                <Banner title="Desserts" img={[require('../assets/images/menu-desserts-ball.jpg'), require('../assets/images/menu-desserts-cake.jpg'), require('../assets/images/menu-desserts-icecream.jpg'), require('../assets/images/menu-desserts-sandwich.jpg')]} />
                <MoreIn />
            </View>
        </ScrollView>
    )
}

export const homeScreenOptions = (props) => {
    return {
        title: "FoodHUT",
        headerRight: () => <TouchableOpacity style={styles.loginBtn} onPress={() => { props.navigation.setParams({ modal: true }) }}>
            <Text style={styles.loginText} >Login</Text>
        </TouchableOpacity>,
        headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()} >
            <Ionicons name="menu" size={26} color="#DA9816" />
        </Pressable>,
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 20,
        paddingHorizontal: 10
    },
    search: {
        width: "92%",
    },
    inputContainer: {
        padding: 10,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 10,
        width: "100%",
        position: "relative"
    },
    searchBar: {
        position: "absolute",
        top: 13,
        right: 8
    },
    banner2: {
        overflow: "hidden",
        paddingHorizontal: 5,
        display: "flex",
        justifyContent: "space-between",
        height: 300,
        width: "100%",
        marginVertical: 20,
    },
    bannerText2: {
        fontSize: 18,
        textTransform: "capitalize",
        marginBottom: 5,
        fontWeight: "bold",
        color: "grey"
    },
    bannerScroll: {
        borderTopWidth: 1,
        borderTopColor: "grey",
        paddingVertical: 5,
        height: "100%"
    },
    bannerImg2: {
        height: "100%",
        width: "100%"
    },
    loginBtn: {
        borderWidth: 2,
        borderColor: "#DA9816",
        paddingVertical: 4,
        paddingHorizontal: 10
    },
    loginText: {
        color: "#DA9816",
        fontWeight: "600"
    }
});

export default HomeScreen;