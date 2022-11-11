import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    View,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
import { ScreensNames, ColorPalette } from "../data/GlobalVariables";

export default function AppEnrolledCard({ appInfo, navigation }) {
    const NEXT_PAGE = ScreensNames.ENTER_OTP;
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate(NEXT_PAGE, {
                        deliveryMethod: appInfo.deliveryMethod,
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
                        {appInfo.appName} ({appInfo.username})
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: height * 0.02,
        backgroundColor: ColorPalette.WHITE,
        borderRadius: 10,
        elevation: 5,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.065,
        width: width * 0.87,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
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
        fontSize: height * 0.025,
        fontWeight: "490",
    },
});
