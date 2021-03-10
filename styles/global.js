import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    titleText: {
        fontFamily: "baloo-bold",
        fontSize: 18,
        color: "gray",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#C4E0F9",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        backgroundColor: "#fff",
        color: "gray",
        marginVertical: "2%",
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center",
    },
});
