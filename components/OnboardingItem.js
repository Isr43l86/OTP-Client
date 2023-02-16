import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function OnboardingItem({ item }) {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        alignItems: "center",
        paddingTop: height * 0.25,
    },
    image: {
        flex: 0.2,
        width: width * 0.5,
        resizeMode: "contain",
    },
    textContainer: {
        flex: 0.3,
        paddingTop: height * 0.05,
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: height * 0.025,
        textAlign: "center",
    },
    description: {
        paddingTop: height * 0.03,
        fontSize: height * 0.02,
        textAlign: "center",
    },
});
