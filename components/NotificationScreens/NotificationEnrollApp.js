import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
} from "react-native";
import React from "react";

import { ColorPalette, NotificationMessages } from "../../data/GlobalVariables";

import { db } from "../../config/fb";
import {
    addDoc,
    collection,
    query,
    onSnapshot,
    updateDoc,
    doc,
} from "firebase/firestore";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { async } from "@firebase/util";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const USER_ID = "USER_ID";

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

    const showUpdateSuccessToastMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            NotificationMessages.UPDATE_ACCOUNT_SUCCESS,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
    };

    const showToastErorMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            NotificationMessages.APP_ENROLLED_FAIULER,
            ToastAndroid.LONG,
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

    const checkIfIdANewUser = async () => {
        return new Promise(async (resolve, reject) => {
            const userID = await SecureStore.getItemAsync(USER_ID);
            const q = query(collection(db, "users", userID, userID));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const newUser = [true];
                querySnapshot.forEach((doc) => {
                    if (doc.data().userInfo._id === userInfo._id) {
                        newUser[0] = false;
                    }
                });
                if (newUser[0]) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    const getExistingUserInfo = async () => {
        return new Promise(async (resolve, reject) => {
            const userID = await SecureStore.getItemAsync(USER_ID);
            const q = query(collection(db, "users", userID, userID));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const newUser = ["hola"];
                querySnapshot.forEach((doc) => {
                    if (doc.data().userInfo._id === userInfo._id) {
                        newUser[0] = doc.data().idDoc;
                        resolve(doc.data().idDoc);
                    }
                });
            });
        });
    };

    const handleConfirmEnrollProcess = async () => {
        setConfirmationMessage(false);
        setLoadingWarning(true);

        const newUser = await checkIfIdANewUser();
        console.log(newUser);

        if (newUser) {
            userInfo.twoFactorAuthentication.activated = true;

            let requestResult = await axios
                .get(userInfo.getAppInfo_API)
                .then((response) => {
                    return response.data;
                });

            let appInfo = {
                appName: requestResult.appName,
                appLogo: requestResult.appLogo.url,
            };

            userInfo = { userInfo, ...appInfo };

            saveNewUser();
        } else {
            const oldDocRef = await getExistingUserInfo();

            userInfo.twoFactorAuthentication.activated = true;

            let requestResult = await axios
                .get(userInfo.getAppInfo_API)
                .then((response) => {
                    return response.data;
                });

            let appInfo = {
                appName: requestResult.appName,
                appLogo: requestResult.appLogo.url,
            };

            userInfo = { userInfo, ...appInfo };

            updateUser(oldDocRef);
        }
    };

    const saveNewUser = async () => {
        try {
            const userID = await SecureStore.getItemAsync(USER_ID);
            console.log(userID);
            const docRef = await addDoc(
                collection(db, "users", userID, userID),
                userInfo
            );

            console.log(docRef.id);

            await updateDoc(doc(db, "users", userID, userID, docRef.id), {
                idDoc: docRef.id,
            });

            setLoadingWarning(false);
            navigation.navigate(NEXT_PAGE);
            showToastMessage();
        } catch (error) {
            console.log(error);
            navigation.navigate(NEXT_PAGE);
            showToastErorMessage();
        }
    };

    const updateUser = async (oldDocRef) => {
        try {
            const userID = await SecureStore.getItemAsync(USER_ID);
            console.log(userID);
            const docRef = await updateDoc(
                doc(db, "users", userID, userID, oldDocRef),
                userInfo
            );
            setLoadingWarning(false);
            navigation.navigate(NEXT_PAGE);
            showUpdateSuccessToastMessage();
        } catch (error) {
            console.log(error);
            navigation.navigate(NEXT_PAGE);
            showToastErorMessage();
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
        paddingTop: height * 0.02,
        paddingBottom: height * 0.02,
        paddingLeft: width * 0.06,
        paddingRight: width * 0.06,
        backgroundColor: ColorPalette.WHITE,
        borderRadius: 10,
        shadowColor: ColorPalette.BLACK,
        elevation: 5,
    },
    textConfirmationMessage: {
        fontSize: height * 0.02,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "35%",
        marginTop: "6%",
        width: "65%",
    },
    buttonText: {
        fontSize: height * 0.018,
        color: ColorPalette.ALERT_TEXT_OPTIONS,
        fontWeight: "bold",
    },
});
