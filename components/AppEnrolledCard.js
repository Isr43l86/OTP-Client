import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    View,
    Modal,
    SafeAreaView,
    ToastAndroid,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import {
    ScreensNames,
    ColorPalette,
    NotificationMessages,
} from "../data/GlobalVariables";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/fb";
import * as SecureStore from "expo-secure-store";

const USER_ID = "USER_ID";

export default function AppEnrolledCard({ appInfo, navigation }) {
    const [showConfirmationMessage, setshowConfirmationMessage] =
        React.useState(false);

    const showDeleteSuccessMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            NotificationMessages.DELETE_SUCCESS,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
    };
    const showDeleteErrorMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            NotificationMessages.DELETE_ERROR,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
    };

    const handleDeleteAccount = async () => {
        try {
            const userID = await SecureStore.getItemAsync(USER_ID);
            await deleteDoc(doc(db, "users", userID, userID, appInfo.idDoc));
            showDeleteSuccessMessage();
        } catch (error) {
            showDeleteErrorMessage();
        }
    };
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate(ScreensNames.ENTER_OTP, {
                        deliveryMethod:
                            appInfo.userInfo.twoFactorAuthentication
                                .deliveryMethod,
                        _id: appInfo.userInfo._id,
                        username: appInfo.userInfo.username,
                    })
                }
                activeOpacity={0.5}
            >
                <View style={styles.button}>
                    <View style={styles.logoAppContainer}>
                        <Image
                            source={{ uri: appInfo.appLogo }}
                            style={styles.logoApp}
                        />
                    </View>
                    <Text style={styles.textButton}>
                        {appInfo.appName} ({appInfo.userInfo.username})
                    </Text>
                </View>
            </TouchableOpacity>
            <IconButton
                style={styles.deleteIcon}
                icon={() => (
                    <Ionicons
                        name="trash-outline"
                        size={height * 0.03}
                        color="black"
                    />
                )}
                onPress={() => setshowConfirmationMessage(true)}
            />
            <Modal visible={showConfirmationMessage} transparent={true}>
                <SafeAreaView
                    style={styles.confirmationMessageBackground}
                    onTouchEnd={() => setshowConfirmationMessage(false)}
                >
                    <View style={styles.confitmationMessageContainer}>
                        <Text style={{ fontSize: height * 0.018 }}>
                            ¿Esta seguro que desea eliminar su cuenta con nombre
                            de ususario{" "}
                            <Text style={{ fontWeight: "bold" }}>
                                {appInfo.userInfo.username}
                            </Text>{" "}
                            en la aplicación{" "}
                            <Text style={{ fontWeight: "bold" }}>
                                {appInfo.appName}
                            </Text>
                            {""}?
                        </Text>
                        <View style={styles.confirmationButtonContainer}>
                            <TouchableOpacity
                                onPress={() =>
                                    setshowConfirmationMessage(false)
                                }
                                activeOpacity={0.5}
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleDeleteAccount()}
                                activeOpacity={0.5}
                            >
                                <Text style={styles.buttonText}>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: ColorPalette.WHITE,
        borderRadius: 15,
        borderColor: ColorPalette.DISABLED_COLOR,
        borderWidth: 1,
        elevation: 5,
        marginBottom: height * 0.02,
        flexDirection: "row",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.065,
        width: width * 0.7,
        paddingLeft: width * 0.04,
        paddingRight: width * 0.04,
    },
    deleteIcon: {
        marginLeft: width * 0.07,
        marginTop: height * 0.004,
    },
    logoAppContainer: {
        height: height * 0.047,
        width: height * 0.047,
        overflow: "hidden",
        borderRadius: 20,
    },
    logoApp: {
        flex: 1,
        resizeMode: "cover",
    },
    textButton: {
        paddingLeft: 10,
        fontSize: height * 0.02,
        fontWeight: "490",
    },
    confirmationMessageBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0,0.4)",
    },
    confitmationMessageContainer: {
        paddingTop: "3.5%",
        paddingBottom: "5%",
        paddingLeft: "6%",
        paddingRight: "6%",
        width: width * 0.8,
        borderRadius: 15,
        backgroundColor: ColorPalette.WHITE,
    },
    confirmationButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "32%",
        marginTop: "5%",
        width: "65%",
    },
    buttonText: {
        fontSize: height * 0.02,
        color: ColorPalette.ALERT_TEXT_OPTIONS,
        fontWeight: "bold",
    },
});
