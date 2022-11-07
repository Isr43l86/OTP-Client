import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import React from "react";

import metodosEntrega from "../data/MetodosEntrega";
import OTPinput from "../components/OTPinput";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function SendOTP({ route, navigation }) {
    const NEXT_PAGE = "AppsEnrolledList";
    const SCAN_SCREEN = "QrCodeReader";
    const PREVIOUS_SCREEN = "SendOTP";
    const NOTIFICATION_MESSAGE = "OTP enviado exitosamente!";

    const { deliveryMethod } = route.params;
    const indexOfMethod = metodosEntrega.findIndex((item) => {
        return item.type === deliveryMethod;
    });

    const image = metodosEntrega[indexOfMethod].image;
    const description = metodosEntrega[indexOfMethod].description;

    function ScanOTP() {
        return (
            <>
                <Text style={styles.text}>
                    Escanee el{" "}
                    <Text style={{ fontWeight: "bold" }}>{description}</Text>{" "}
                    que se encuentra en el prototipo web
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate(SCAN_SCREEN, {
                                previousScreen: PREVIOUS_SCREEN,
                                notificationMessage: NOTIFICATION_MESSAGE,
                            });
                        }}
                    >
                        <Text style={styles.buttonText}>ESCANEAR</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    function EnterOTP() {
        return (
            <>
                <Text style={styles.text}>
                    Escriba el código que recibió mediante{" "}
                    <Text style={{ fontWeight: "bold" }}>{description}</Text>
                </Text>
                <Pressable
                    style={styles.otpContainer}
                    onPress={Keyboard.dismiss}
                >
                    <OTPinput navigation={navigation} nextPage={NEXT_PAGE} />
                </Pressable>
            </>
        );
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
            keyboardVerticalOffset={height * 0.06}
        >
            <Pressable style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.imageContainer}>
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.textContainer}>
                    {deliveryMethod === "qr" ? <ScanOTP /> : <EnterOTP />}
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    imageContainer: {
        marginTop: height * 0.07,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.155,
        width: width,
    },
    image: {
        flex: 1,
        width: width,
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
    buttonContainer: {
        marginTop: height * 0.318,
    },
    button: {
        justifyContent: "center",
        height: height * 0.08,
        width: width * 0.83,
        borderRadius: 50,
        backgroundColor: "#1B8DE4",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: height * 0.027,
    },
});
