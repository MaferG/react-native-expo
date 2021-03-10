import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { data } from "../shared/data";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import UserForm from "./userForm";

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [users, setUsers] = useState(data);
    const [filtered, setFiltered] = useState([]);

    const addUser = (user) => {
        console.log("add");

        user.key = Math.random().toString();
        setUsers((currentusers) => {
            return [user, ...currentusers];
        });
        setModalOpen(false);
    };

    const deleteUser = (user) => {
        const confirm = Alert.alert(
            "Delete",
            "Delete this user?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () =>
                        setUsers(
                            users.filter((item) => item.email != user.email)
                        ),
                },
            ],
            { cancelable: false }
        );
    };

    const editUser = (user) => {
        console.log("edit");
        var data = [...users];
        var index = data.findIndex((obj) => obj.email === user.email);
        data[index] = user;
        setUsers(data);
        setEdit(false);
        setModalOpen(false);
        setCurrentUser({});
    };

    const search = (email) => {
        setFiltered(email.toLocaleLowerCase());
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose,
                            }}
                            onPress={() => setModalOpen(false)}
                        />
                        <UserForm
                            addUser={addUser}
                            currentUser={currentUser}
                            editUser={editUser}
                            edit={edit}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <TextInput
                style={globalStyles.input}
                placeholder="Search..."
                onChangeText={(e) => search(e)}
            />
            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => {
                    setModalOpen(true);
                    setCurrentUser({});
                }}
            />
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View>
                        {item.email.includes(filtered) ? (
                            <Card>
                                <View style={styles.align}>
                                    <View style={styles.alignStart}>
                                        <Text style={globalStyles.titleText}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            ...styles.alignEnd,
                                            ...styles.space,
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate(
                                                    "UserDetails",
                                                    item
                                                )
                                            }
                                            style={styles.space}
                                        >
                                            <Feather
                                                name="eye"
                                                size={24}
                                                color="#9BBDF9"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModalOpen(true);
                                                setCurrentUser(item);
                                                setEdit(true);
                                            }}
                                            style={styles.space}
                                        >
                                            <Feather
                                                name="edit"
                                                size={24}
                                                color="#2EC0F9"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => deleteUser(item)}
                                            style={styles.space}
                                        >
                                            <AntDesign
                                                name="delete"
                                                size={24}
                                                color="#B95F89"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                        ) : null}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        color: "#B95F89",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    },
    align: {
        flex: 1,
        flexDirection: "row",
    },
    alignStart: {
        flex: 0.7,
        flexDirection: "row",
    },

    alignEnd: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    space: {
        paddingLeft: "15%",
    },
});
