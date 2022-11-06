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

import {
    TopLeftCorner,
    TopRightCorner,
    BottomLeftCorner,
    BottomRightCorner,
} from "../components/BorderQRCode";

import NotificationEnrollApp from "./NotificationScreens/NotificationEnrollApp";
import NotificattionRejectCamPermission from "./NotificationScreens/NotificattionRejectCamPermission";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const APP_NAME = "Apps safe";
const ENROLL_APP = "App test";
const PREVIOUS_SCREEN = "EnrollApps";

export default function QrCodeCam({ navigation, navigateTo }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState(false);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setConfirmationMessage(true);
        //alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`);
        //alert(`Bar code with type ${type} and data ${data} has been scanned`);
    };

    /*if (hasCameraPermission === null) {
        return <Text>Requesting for Camera Permission</Text>;
    }*/
    if (hasCameraPermission === false) {
        return (
            <NotificattionRejectCamPermission
                APP_NAME={APP_NAME}
                navigation={navigation}
                PREVIOUS_SCREEN={PREVIOUS_SCREEN}
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
                    navigateTo={navigateTo}
                />
            </Modal>
            <Camera
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: height, width: width }}
            ></Camera>
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
