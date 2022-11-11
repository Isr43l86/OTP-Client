import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Modal,
    ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

import {
    TopLeftCorner,
    TopRightCorner,
    BottomLeftCorner,
    BottomRightCorner,
} from "../components/BorderQRCode";
import { APP_NAME, ScreensNames } from "../data/GlobalVariables";

import NotificationEnrollApp from "./NotificationScreens/NotificationEnrollApp";
import NotificattionRejectCamPermission from "./NotificationScreens/NotificattionRejectCamPermission";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ENROLL_APP = "App test";

export default function QrCodeCam({
    navigation,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    NOTIFICATION_MESSAGE,
}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
        })();
    }, []);

    const handleBarCodeScannedEnrollApp = ({ type, data }) => {
        setScanned(true);
        setConfirmationMessage(true);
        //alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`);
        //alert(`Bar code with type ${type} and data ${data} has been scanned`);
    };

    const handleBarCodeScannedOTP = ({ type, data }) => {
        setScanned(true);
        ToastAndroid.showWithGravityAndOffset(
            NOTIFICATION_MESSAGE,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
        navigation.navigate(NEXT_PAGE);
    };

    /*if (hasCameraPermission === null) {
        return <Text>Requesting for Camera Permission</Text>;
    }*/
    if (hasCameraPermission === false) {
        return (
            <NotificattionRejectCamPermission
                APP_NAME={APP_NAME}
                navigation={navigation}
                PREVIOUS_PAGE={PREVIOUS_PAGE}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={confirmationMessage}
                transparent
                onRequestClose={() => setConfirmationMessage(false)}
            >
                <NotificationEnrollApp
                    ENROLL_APP={ENROLL_APP}
                    APP_NAME={APP_NAME}
                    setConfirmationMessage={setConfirmationMessage}
                    setScanned={setScanned}
                    navigation={navigation}
                    NEXT_PAGE={NEXT_PAGE}
                    PREVIOUS_PAGE={PREVIOUS_PAGE}
                    NOTIFICATION_MESSAGE={NOTIFICATION_MESSAGE}
                />
            </Modal>
            <>
                {isFocused && (
                    <Camera
                        onBarCodeScanned={
                            PREVIOUS_PAGE === ScreensNames.ENTER_OTP
                                ? scanned
                                    ? undefined
                                    : handleBarCodeScannedOTP
                                : scanned
                                ? undefined
                                : handleBarCodeScannedEnrollApp
                        }
                        style={{ height: height, width: width }}
                    ></Camera>
                )}
            </>
            <View style={styles.topContainer}></View>
            <View style={styles.bottomContainer}></View>
            <View style={styles.leftContainer}></View>
            <View style={styles.rightContainer}></View>
            <View style={styles.topLeftCorner}>
                <TopLeftCorner />
            </View>
            <View style={styles.topRightCorner}>
                <TopRightCorner />
            </View>
            <View style={styles.bottomLeftCorner}>
                <BottomLeftCorner />
            </View>
            <View style={styles.bottomRightCorner}>
                <BottomRightCorner />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Coloque el código QR dentro de las líneas azules
                </Text>
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
    topContainer: {
        position: "absolute",
        width: width,
        height: height * 0.2,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
    bottomContainer: {
        position: "absolute",
        marginTop: height * 0.58,
        width: width,
        height: height * 0.42,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
    leftContainer: {
        position: "absolute",
        marginTop: height * 0.2,
        width: width * 0.16,
        height: height * 0.38,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
    rightContainer: {
        position: "absolute",
        marginLeft: width * 0.84,
        marginTop: height * 0.2,
        width: width * 0.16,
        height: height * 0.38,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
    },
    topLeftCorner: {
        position: "absolute",
        aspectRatio: 1,
        marginTop: height * 0.1815,
        marginLeft: width * 0.132,
        height: height * 0.09,
        width: height * 0.09,
        opacity: 0.8,
    },
    topRightCorner: {
        position: "absolute",
        aspectRatio: 1,
        marginTop: height * 0.1813,
        marginLeft: width * 0.729,
        height: height * 0.09,
        width: height * 0.09,
        opacity: 0.8,
    },
    bottomLeftCorner: {
        position: "absolute",
        aspectRatio: 1,
        marginTop: height * 0.51,
        marginLeft: width * 0.133,
        height: height * 0.09,
        width: height * 0.09,
        opacity: 0.8,
    },
    bottomRightCorner: {
        position: "absolute",
        aspectRatio: 1,
        marginTop: height * 0.51,
        marginLeft: width * 0.729,
        height: height * 0.09,
        width: height * 0.09,
        opacity: 0.8,
    },
    textContainer: {
        marginLeft: width * 0.15,
        marginTop: height * 0.62,
        position: "absolute",
        width: width * 0.7,
    },
    text: {
        color: "white",
        fontSize: height * 0.027,
        textAlign: "center",
    },
});
