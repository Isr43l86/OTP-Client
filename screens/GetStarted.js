import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import logo from "../assets/images/Logo.png";
import React, { useState, useEffect } from "react";
import { ScreensNames, ColorPalette } from "../data/GlobalVariables";

import { useIsFocused } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const height = Dimensions.get("window").height;

const USER_ID = "USER_ID";

export default function GetStarted({ navigation }) {
    const [showOnboarding, setShowOnboarding] = useState(true);
    const isFocused = useIsFocused();

    const checkIfIsFirstTimeOpeningApp = async () => {
        try {
            let show = await AsyncStorage.getItem("showOnboarding");
            show != null ? setShowOnboarding(false) : setShowOnboarding(true);
        } catch (error) {
            setShowOnboarding(true);
        }
    };

    const checkIdEmeiHasBeenStored = async () => {
        const result = await SecureStore.getItemAsync(USER_ID);
        if (!result) {
            const userID = Constants.installationId;
            SecureStore.setItemAsync(USER_ID, userID);
        }
        if (result) {
            console.log("id registrado");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            checkIfIsFirstTimeOpeningApp();
            checkIdEmeiHasBeenStored();
            showOnboarding
                ? navigation.navigate(ScreensNames.INTRODUCTION_PAGE)
                : navigation.navigate(ScreensNames.HOME_PAGE);
        }, 1500);
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={logo} style={styles.appIcon} />
            </View>
            <View style={styles.sloganContainer}>
                <Text style={styles.slogan}>Apps safe</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.19,
        flex: 1,
        backgroundColor: ColorPalette.PRIMARY_COLOR,
        alignItems: "center",
    },
    imageContainer: {
        marginTop: height * 0.18,
    },
    appIcon: {
        height: height * 0.12,
        width: height * 0.1,
    },
    sloganContainer: {
        marginTop: height * 0.02,
    },
    slogan: {
        fontSize: height * 0.055,
        color: ColorPalette.WHITE,
        fontWeight: "bold",
    },
});
