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

import {
    DeliveryMethods,
    ColorPalette,
    ScreensNames,
    NotificationMessages,
} from "../data/GlobalVariables";
import OTPinput from "../components/OTPinput";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function SendOTP({ route, navigation }) {
    const NEXT_PAGE = ScreensNames.HOME_PAGE;
    const SCAN_SCREEN = ScreensNames.SCAN_QRCODE;
    const PREVIOUS_PAGE = ScreensNames.ENTER_OTP;
    const NOTIFICATION_MESSAGE = NotificationMessages.OTP_SENDED_SUCCESS;

    const { deliveryMethod, _id, username } = route.params;
    console.log(deliveryMethod);
    const indexOfMethod = DeliveryMethods.findIndex((item) => {
        return item.type === deliveryMethod;
    });

    const image = DeliveryMethods[indexOfMethod].image;
    const description = DeliveryMethods[indexOfMethod].description;

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
                                PREVIOUS_PAGE: PREVIOUS_PAGE,
                                NOTIFICATION_MESSAGE: NOTIFICATION_MESSAGE,
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
                    <OTPinput
                        navigation={navigation}
                        NEXT_PAGE={NEXT_PAGE}
                        _id={_id}
                        username={username}
                    />
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
                    {deliveryMethod === "qr_code" ? <ScanOTP /> : <EnterOTP />}
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: ColorPalette.WHITE,
    },
    imageContainer: {
        marginTop: height * 0.145,
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.135,
        width: width,
    },
    image: {
        flex: 1,
        width: width,
    },
    textContainer: {
        marginTop: height * 0.05,
        width: width * 0.8,
    },
    text: {
        fontSize: height * 0.02,
        textAlign: "center",
    },
    otpContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.1,
    },
    buttonContainer: {
        marginTop: height * 0.318,
    },
    button: {
        justifyContent: "center",
        height: height * 0.06,
        width: width * 0.805,
        borderRadius: 50,
        backgroundColor: ColorPalette.PRIMARY_COLOR,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: height * 0.022,
    },
});
