import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

import AppEnrolledCard from "../components/AppEnrolledCard";
import EnrollOptionButton from "../components/EnrollOptionButton";
import { ColorPalette } from "../data/GlobalVariables";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/fb";
import LottieView from "lottie-react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EnrollApps({ navigation }) {
    const [userList, setUserLis] = useState();
    const [loading, setLoading] = useState(true);

    const getAppsEnrolledList = async () => {
        const q = query(collection(db, "users"));
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
                                source={require("../assets/animations/cicle_loadng_animation.json")}
                                autoPlay
                                loop
                            />
                        </View>
                    </>
                ) : (
                    <>
                        {userList.map((user) => (
                            <AppEnrolledCard
                                key={user._id}
                                appInfo={user}
                                navigation={navigation}
                            />
                        ))}
                    </>
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
        paddingBottom: height * 0.015,
        fontSize: height * 0.028,
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
});
