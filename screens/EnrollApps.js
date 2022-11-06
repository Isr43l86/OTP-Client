import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import EnrollOptionButton from "../components/EnrollOptionButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EnrollApps({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicaciones registradas</Text>
            <View style={styles.button}>
                <EnrollOptionButton navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        paddingTop: height * 0.035,
        paddingLeft: width * 0.06,
        fontSize: height * 0.028,
        fontWeight: "bold",
    },
    button: {
        position: "absolute",
        marginTop: height * 0.63,
        marginLeft: width * 0.71,
    },
});
