import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    Keyboard,
} from "react-native";
import React from "react";

import image from "../assets/images/EmailOTP.png";
import OTPinput from "../components/OTPinput";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EmailOTP() {
    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Escriba el código que recibió mediante{" "}
                    <Text style={{ fontWeight: "bold" }}>
                        correo electrónico
                    </Text>
                </Text>
            </View>
            <View style={styles.otpContainer}>
                <OTPinput />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    imageContainer: {
        marginTop: height * 0.09,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.16,
        width: width,
    },
    image: {
        height: height * 0.12,
        width: width * 0.235,
    },
    textContainer: {
        marginTop: height * 0.025,
        width: width * 0.8,
    },
    text: {
        fontSize: height * 0.025,
        textAlign: "center",
    },
    otpContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.12,
    },
});
