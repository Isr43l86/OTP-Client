import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../components/Onboarding";
import { ColorPalette } from "../data/GlobalVariables";

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
        backgroundColor: ColorPalette.WHITE,
        justifyContent: "center",
        alignItems: "center",
    },
});
