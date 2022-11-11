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

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NotificationEnrollApp({
    ENROLL_APP,
    APP_NAME,
    setConfirmationMessage,
    setScanned,
    navigation,
    NEXT_PAGE,
    PREVIOUS_PAGE,
    NOTIFICATION_MESSAGE,
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
                        onPress={() => {
                            navigation.navigate(PREVIOUS_PAGE);
                            setConfirmationMessage(false);
                            setScanned(false);
                        }}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>RECHAZAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(NEXT_PAGE);
                            showToastMessage();
                        }}
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
        color: ColorPalette.PRIMARY_COLOR,
        fontWeight: "bold",
    },
});
