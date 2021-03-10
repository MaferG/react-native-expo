import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import UserDetails from "../screens/userDetails";
import Header from "../shared/header";
import React from "react";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="Users" />
                ),
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: "#67AAF9" },
            };
        },
    },
    UserDetails: {
        screen: UserDetails,
        navigationOptions: {
            headerTintColor: "#fff",
            title: "Details",
            headerStyle: { backgroundColor: "#67AAF9" },
        },
    },
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#67AAF9" },
    },
});

export default HomeStack;
