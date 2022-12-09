import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
} from "react-native";
import React from "react";

import { ColorPalette } from "../../data/GlobalVariables";

import { db } from "../../config/fb";
import { addDoc, collection } from "firebase/firestore";
import axios from "axios";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NotificationEnrollApp({
    ENROLL_APP,
    APP_NAME,
    setConfirmationMessage,
    setLoadingWarning,
    setScanned,
    navigation,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    NOTIFICATION_MESSAGE,
    userInfo,
    activate2FA_API,
    generateJWT_USER_API,
}) {
    const showToastMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            NOTIFICATION_MESSAGE,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
    };

    const handleRejectEnrollProcess = () => {
        setConfirmationMessage(false);
        navigation.navigate(PREVIOUS_PAGE);
        setScanned(false);
    };

    const handleConfirmEnrollProcess = async () => {
        setConfirmationMessage(false);
        setLoadingWarning(true);
        const id = userInfo._id;

        const bearerToken = await axios
            .post(generateJWT_USER_API, {
                id: id,
                username: userInfo.username,
            })
            .then((response) => {
                return response.data.token;
            });

        const newData = {
            typeOfDelivery: userInfo.twoFactorAuthentication.deliveryMethod,
        };
        const statusCode = await axios
            .put(`${activate2FA_API}${id}`, newData, {
                headers: { Authorization: `bearer ${bearerToken}` },
            })
            .then((response) => {
                return response;
            });
        if (statusCode.status === 201) {
            userInfo.twoFactorAuthentication.activated = true;
        }
        saveNewUser();
    };

    const saveNewUser = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), userInfo);
            console.log(docRef.id);
            setLoadingWarning(false);
            navigation.navigate(NEXT_PAGE);
            showToastMessage();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.centeredAlert}>
            <View style={styles.confirmationMessage}>
                <Text style={styles.textConfirmationMessage}>
                    ¿Está seguro de querer registrar{" "}
                    <Text style={{ fontWeight: "bold" }}>{ENROLL_APP}</Text> en{" "}
                    <Text style={{ fontWeight: "bold" }}>{APP_NAME}</Text>?
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => handleRejectEnrollProcess()}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>RECHAZAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleConfirmEnrollProcess()}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>PERMITIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredAlert: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0,0.4)",
    },
    confirmationMessage: {
        width: width * 0.8,
        paddingTop: height * 0.035,
        paddingBottom: height * 0.035,
        paddingLeft: width * 0.06,
        paddingRight: width * 0.06,
        backgroundColor: ColorPalette.WHITE,
        borderRadius: 10,
        shadowColor: ColorPalette.BLACK,
        elevation: 5,
    },
    textConfirmationMessage: {
        fontSize: height * 0.025,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "35%",
        marginTop: "6%",
        width: "65%",
    },
    buttonText: {
        fontSize: height * 0.024,
        color: ColorPalette.ALERT_TEXT_OPTIONS,
        fontWeight: "bold",
    },
});
