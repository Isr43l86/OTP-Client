import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import EnrollOptionButton from "../components/EnrollOptionButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EnrollFirstApp({ navigation }) {
    const enrollOptions = [
        {
            description: "Scan a QR code",
            navigateTo: "QrCodeReader",
        },
        {
            description: "Enter the OTP code",
            navigateTo: "Not implemented yet",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Name</Text>
            <View style={styles.desContainer}>
                <Text style={styles.description}>
                    Select any option to enable two-factor authentication for
                    your applicaition
                </Text>
            </View>
            <EnrollOptionButton
                textButton={enrollOptions[0].description}
                navigation={navigation}
                navigateTo={enrollOptions[0].navigateTo}
            />
            <EnrollOptionButton
                textButton={enrollOptions[1].description}
                navigation={navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.08,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: height * 0.028,
        fontWeight: "500",
    },
    desContainer: {
        width: "100%",
        paddingTop: height * 0.015,
        paddingBottom: height * 0.01,
    },
    description: {
        marginLeft: width * 0.08,
        marginRight: width * 0.08,
        fontSize: height * 0.025,
        fontWeight: "400",
    },
});
