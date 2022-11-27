import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import AppEnrolledCard from "../components/AppEnrolledCard";
import EnrollOptionButton from "../components/EnrollOptionButton";
import { ColorPalette, EnrolledListTest } from "../data/GlobalVariables";

import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EnrollApps({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicaciones registradas</Text>
            <View style={styles.cardContainer}>
                {EnrolledListTest.map((appCard) => (
                    <AppEnrolledCard
                        key={appCard.id}
                        appInfo={appCard}
                        navigation={navigation}
                    />
                ))}
            </View>
            <View style={styles.button}>
                <EnrollOptionButton navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalette.WHITE,
    },
    title: {
        paddingTop: height * 0.035,
        paddingLeft: width * 0.06,
        paddingBottom: height * 0.015,
        fontSize: height * 0.028,
        fontWeight: "bold",
    },
    cardContainer: {
        alignItems: "center",
    },
    button: {
        position: "absolute",
        marginTop: height * 0.68,
        marginLeft: width * 0.71,
    },
});
