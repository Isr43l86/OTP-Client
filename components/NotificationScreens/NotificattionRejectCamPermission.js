import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NotificattionRejectCamPermission({
    APP_NAME,
    navigation,
    PREVIOUS_SCREEN,
}) {
    return (
        <View style={styles.centeredAlert}>
            <View style={styles.confirmationMessage}>
                <Text style={styles.titleMessage}>Permiso denegado!</Text>
                <Text style={styles.textConfirmationMessage}>
                    Si deniega el permiso a la Cámara{" "}
                    <Text style={{ fontWeight: "bold" }}>{APP_NAME}</Text>{" "}
                    lamentablemente no podrá funcionar de manera correcta
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(PREVIOUS_SCREEN)}
                        activeOpacity={0.5}
                    >
                        <Text style={styles.buttonText}>ENTENDIDO</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredAlert: {
        marginTop: height * 0.25,
        alignItems: "center",
    },
    titleMessage: {
        fontSize: height * 0.027,
        fontWeight: "bold",
        paddingBottom: height * 0.01,
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
        flexDirection: "row-reverse",
        marginTop: "6%",
    },
    buttonText: {
        fontSize: height * 0.024,
        color: "#015BBB",
        fontWeight: "bold",
    },
});
