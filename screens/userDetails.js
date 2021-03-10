import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam("rating");

    return (
        <View style={globalStyles.container}>
            <Card>
                <View style={styles.rating}>
                    <Text style={styles.text}>
                        {navigation.getParam("name")}
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.text}>
                        {navigation.getParam("email")}
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.text}>
                        {navigation.getParam("age")}
                    </Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderColor: "#C4E0F9",
    },
    text: {
        color: "gray",
    },
});
