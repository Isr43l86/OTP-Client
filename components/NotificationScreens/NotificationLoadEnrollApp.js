import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ColorPalette } from "../../data/GlobalVariables";
import React from "react";
import LottieView from "lottie-react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function NotificationLoadEnrollApp() {
    return (
        <View style={styles.centeredAlert}>
            <View style={styles.loadingScreen}>
                <View style={[styles.animation_container]}>
                    <LottieView
                        source={require("../../assets/animations/cicle_loadng_animation.json")}
                        autoPlay
                        loop
                        style={{
                            marginTop: -height * 0.01,
                            width: width * 0.15,
                            aspectRatio: (width * 0.15) / 70,
                            flexGrow: 1,
                            alignSelf: "center",
                        }}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.textLoading}>Añadiendo aplicación</Text>
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
    loadingScreen: {
        flex: 0.04,
        flexDirection: "row",
        alignItems: "flex-start",
        width: width * 0.8,
        paddingTop: height * 0.035,
        paddingBottom: height * 0.035,
        paddingLeft: width * 0.04,
        paddingRight: width * 0.04,
        backgroundColor: ColorPalette.WHITE,
        borderRadius: 10,
        shadowColor: ColorPalette.BLACK,
        elevation: 5,
    },
    animation_container: {
        height: height * 0.09,
        width: width * 0.15,
        marginTop: -height * 0.025,
        marginRight: width * 0.02,
    },
    textLoading: {
        fontSize: height * 0.025,
    },
});
