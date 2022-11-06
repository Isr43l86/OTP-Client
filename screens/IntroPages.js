import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../components/Onboarding";

export default function IntroPage1({ navigation }) {
    return (
        <View style={styles.container}>
            <Onboarding navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
