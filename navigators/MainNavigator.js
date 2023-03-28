import { StatusBar, Pressable } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import { homeScreenOptions } from "../screens/HomeScreen";
import MenuScreen from '../screens/MenuScreen';
import ReservationScreen from '../screens/ReservationScreen';
import PressScreen from "../screens/PressScreen";
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import DrawerContent from '../components/DrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from "../screens/SearchScreen";
import CartScreen from '../screens/CartScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = (props) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerTintColor: '#DA9816',
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={homeScreenOptions} initialParams={{ modal: false }} />
            <HomeStack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
            <HomeStack.Screen name="Search" component={SearchScreen} options={{ title: "Search", }} />
        </HomeStack.Navigator>
    )
}

const MenuStack = createNativeStackNavigator();

const MenuStackNavigator = (props) => {
    return (
        <MenuStack.Navigator>
            <MenuStack.Screen name="Menu" component={MenuScreen} options={{
                title: "MENU",
                headerTintColor: '#DA9816',
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#DA9816" />
                </Pressable>
            }} />
        </MenuStack.Navigator>
    )
}

const ReservationStack = createNativeStackNavigator();

const ReservationStackNavigator = (props) => {
    return (
        <ReservationStack.Navigator>
            <ReservationStack.Screen name="Reservation" component={ReservationScreen} options={{
                title: "RESERVATION",
                headerTintColor: '#DA9816',
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // fontFamily: "Montserrat"
                },
                headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#DA9816" />
                </Pressable>
            }} />
        </ReservationStack.Navigator>
    )
}

const PressStack = createNativeStackNavigator();

const PressStackNavigator = (props) => {
    return (
        <PressStack.Navigator>
            <PressStack.Screen name="Press" component={PressScreen} options={{
                title: "Press",
                headerTintColor: '#DA9816',
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // fontFamily: "Montserrat"
                },
                headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#DA9816" />
                </Pressable>
            }} />
        </PressStack.Navigator>
    )
}

const AboutStack = createNativeStackNavigator();

const AboutStackNavigator = (props) => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen name="About" component={AboutScreen} options={{
                title: "Press",
                headerTintColor: '#DA9816',
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // fontFamily: "Montserrat"
                },
                headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#DA9816" />
                </Pressable>
            }} />
        </AboutStack.Navigator>
    )
}

const ContactStack = createNativeStackNavigator();

const ContactStackNavigator = (props) => {
    return (
        <ContactStack.Navigator>
            <ContactStack.Screen name="Contact" component={ContactScreen} options={{
                title: "Press",
                headerTintColor: '#DA9816',
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    // fontFamily: "Montserrat"
                },
                headerLeft: () => <Pressable onPress={() => props.navigation.openDrawer()}>
                    <Ionicons name="menu" size={26} color="#DA9816" />
                </Pressable>
            }} />
        </ContactStack.Navigator>
    )
}

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerTintColor: '#DA9816',
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            tabBarActiveTintColor: "#DA9816",
            tabBarActiveBackgroundColor: "lightgrey"
        }}>
            <Tabs.Screen name="HomeMain" options={{ headerShown: false, tabBarLabel: "Home", tabBarIcon: () => (<Ionicons name="home" color="#DA9816" size={20} />), }} component={HomeStackNavigator} />
            <Tabs.Screen name="Cart" component={CartScreen} options={{ tabBarLabel: "Cart", tabBarIcon: () => (<Ionicons name="cart" color="#DA9816" size={20} />), }} />
        </Tabs.Navigator>
    )
}

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                marginTop: StatusBar.currentHeight,
            },
            drawerActiveTintColor: "#DA9816",
        }}
            drawerContent={DrawerContent}
        >
            <Drawer.Screen name="HOME" component={TabNavigator} />
            <Drawer.Screen name="MENU" component={MenuStackNavigator} />
            <Drawer.Screen name="RESERVATION" component={ReservationStackNavigator} />
            <Drawer.Screen name="PRESS" component={PressStackNavigator} />
            <Drawer.Screen name="ABOUT" component={AboutStackNavigator} />
            <Drawer.Screen name="CONTACT" component={ContactStackNavigator} />
        </Drawer.Navigator>
    )
}
