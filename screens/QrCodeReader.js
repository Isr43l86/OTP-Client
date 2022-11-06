import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import QrCodeCam from "../components/QrCodeCam";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const nextPage = "AppsEnrolledList";

export default function QrCodeReader({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.scannerContainer}>
                <QrCodeCam navigation={navigation} navigateTo={nextPage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        marginLeft: 0,
        marginStart: 0,
        paddingHorizontal: 0,
        paddingLeft: 0,
        paddingStart: 0,
        padding: 0,
    },
    scannerContainer: {
        marginHorizontal: 0,
        marginLeft: 0,
        marginStart: 0,
        paddingHorizontal: 0,
        paddingLeft: 0,
        paddingStart: 0,
        padding: 0,
    },
});
