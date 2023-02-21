import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
    FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";

import AppEnrolledCard from "../components/AppEnrolledCard";
import EnrollOptionButton from "../components/EnrollOptionButton";
import { ColorPalette } from "../data/GlobalVariables";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/fb";
import LottieView from "lottie-react-native";
import * as SecureStore from "expo-secure-store";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const USER_ID = "USER_ID";

export default function EnrollApps({ navigation }) {
    const [userList, setUserLis] = useState();
    const [loading, setLoading] = useState(true);

    const getAppsEnrolledList = async () => {
        const userID = await SecureStore.getItemAsync(USER_ID);
        const q = query(collection(db, "users", userID, userID));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            });
            setUserLis(users);
            setLoading(false);
        });
    };

    useEffect(() => {
        getAppsEnrolledList();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aplicaciones registradas</Text>
            <View style={styles.cardContainer}>
                {loading ? (
                    <>
                        <View style={styles.loadingScreenStyle}>
                            <LottieView
                                source={require("../assets/animations/square_loading animation.json")}
                                autoPlay
                                loop
                            />
                        </View>
                    </>
                ) : (
                    <ScrollView style={styles.scrollContainer}>
                        {userList.map((user) => (
                            <AppEnrolledCard
                                key={user.userInfo._id}
                                appInfo={user}
                                navigation={navigation}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>
            <View style={styles.button}>
                <EnrollOptionButton navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorPalette.WHITE,
    },
    title: {
        paddingTop: height * 0.035,
        paddingLeft: width * 0.06,
        paddingBottom: height * 0.025,
        fontSize: height * 0.022,
        fontWeight: "bold",
    },
    loadingScreenStyle: {
        width: width,
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    cardContainer: {
        alignItems: "center",
    },
    button: {
        position: "absolute",
        marginTop: height * 0.68,
        marginLeft: width * 0.71,
    },
    scrollContainer: {
        width: width * 0.9,
        height: height * 0.8,
    },
});
