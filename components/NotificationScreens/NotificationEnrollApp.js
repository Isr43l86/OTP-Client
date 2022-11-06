import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NotificationEnrollApp({
    ENROLL_APP,
    APP_NAME,
    setConfirmationMessage,
    setScanned,
    navigation,
    navigateTo,
}) {
    const showToastMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Aplicación registrada exitosamente!",
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
                            setConfirmationMessage(false);
                            setScanned(false);
                        }}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>RECHAZAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(navigateTo);
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
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
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
        color: "#015BBB",
        fontWeight: "bold",
    },
});
