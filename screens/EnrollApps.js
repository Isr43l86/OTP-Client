import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import AppEnrolledCard from "../components/AppEnrolledCard";
import EnrollOptionButton from "../components/EnrollOptionButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const appEnrolledList = [
    {
        id: 0,
        appName: "Facebook",
        username: "user1",
        appLogo:
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        deliveryMethod: "email",
    },
    {
        id: 1,
        appName: "Instagram",
        username: "user2",
        appLogo:
            "https://www.nicepng.com/png/detail/432-4329510_instagram-logo-logos-de-redes-sociales-instagram.png",
        deliveryMethod: "sms",
    },
    {
        id: 2,
        appName: "Twitter",
        username: "user3",
        appLogo:
            "https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png",
        deliveryMethod: "qr",
    },
];

export default function EnrollApps({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicaciones registradas</Text>
            <View style={styles.cardContainer}>
                {appEnrolledList.map((appCard) => (
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
        backgroundColor: "#fff",
    },
    title: {
        paddingTop: height * 0.035,
        paddingLeft: width * 0.06,
        fontSize: height * 0.028,
        fontWeight: "bold",
    },
    cardContainer: {
        alignItems: "center",
    },
    button: {
        position: "absolute",
        marginTop: height * 0.63,
        marginLeft: width * 0.71,
    },
});
