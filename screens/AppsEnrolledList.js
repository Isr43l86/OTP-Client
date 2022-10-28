import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import AppEnrolledCard from "../components/AppEnrolledCard";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const appEnrolledList = [
    {
        id: 0,
        appName: "Facebook",
        username: "user1",
        appLogo:
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    },
    {
        id: 1,
        appName: "Instagram",
        username: "user2",
        appLogo:
            "https://www.nicepng.com/png/detail/432-4329510_instagram-logo-logos-de-redes-sociales-instagram.png",
    },
    {
        id: 2,
        appName: "Twitter",
        username: "user3",
        appLogo:
            "https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png",
    },
];

export default function AppsEnrolledList() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Name</Text>
            <View style={styles.desContainer}>
                <Text style={styles.description}>
                    Your app's list with 2FA activated are:
                </Text>
            </View>
            {appEnrolledList.map((appCard) => (
                <AppEnrolledCard key={appCard.id} appInfo={appCard} />
            ))}
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
