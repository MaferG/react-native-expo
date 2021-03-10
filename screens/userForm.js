import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Modal, Button } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
    name: yup.string().required().min(4),
    email: yup.string().email().required().min(8),
    age: yup
        .number()
        .required()
        .test("is-num-1-120", "Age most be a number 1-110", (val) => {
            return parseInt(val) < 111 && parseInt(val) > 0;
        }),
});

export default function ReviewForm({ addUser, currentUser, editUser, edit }) {
    console.log(currentUser);
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    name: currentUser?.name,
                    email: currentUser?.email,
                    age: currentUser?.age,
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    if (edit) {
                        editUser(values);
                    } else {
                        addUser(values);
                    }
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="User name"
                            onChangeText={props.handleChange("name")}
                            value={props.values.name}
                            onBlur={props.handleBlur("name")}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.name && props.errors.name}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Email"
                            onChangeText={props.handleChange("email")}
                            value={props.values.email}
                            onBlur={props.handleBlur("email")}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.email && props.errors.email}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Age"
                            onChangeText={props.handleChange("age")}
                            value={props.values.age}
                            defaultValue={props.values.age}
                            onBlur={props.handleBlur("age")}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.age && props.errors.age}
                        </Text>

                        <FlatButton
                            text="submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}
