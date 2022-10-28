import {
    StyleSheet,
    Text,
    Animated,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    View,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function AppEnrolledCard({ appInfo }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigateTo)}
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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: height * 0.025,
        backgroundColor: "#EBEBEB",
        height: height * 0.065,
        width: width * 0.85,
        borderRadius: 25,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
    },
    logoAppContainer: {
        height: height * 0.047,
        width: width * 0.079,
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
