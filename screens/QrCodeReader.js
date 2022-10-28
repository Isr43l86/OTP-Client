import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import QrCodeCam from "../components/QrCodeCam";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const nextPage = "AppsEnrolledList";

export default function QrCodeReader({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                Scann the QR code showed in your web app
            </Text>
            <View style={styles.scannerContainer}>
                <QrCodeCam navigation={navigation} navigateTo={nextPage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height * 0.13,
        backgroundColor: "rgb(231, 231, 231)",
        alignItems: "center",
    },
    description: {
        fontSize: height * 0.027,
        fontWeight: "500",
    },
    scannerContainer: {
        marginTop: height * 0.1,
        height: height * 0.5,
        width: width * 0.751,
        borderRadius: 20,
        overflow: "hidden",
    },
});
