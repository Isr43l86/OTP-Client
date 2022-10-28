import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from "react-native";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function EnrollOptionButton({
    textButton,
    navigation,
    navigateTo,
}) {
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate(navigateTo)}
        >
            <Animated.View style={styles.button}>
                <Text style={styles.textButton}>{textButton}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: height * 0.025,
        backgroundColor: "#EBEBEB",
        height: height * 0.065,
        width: width * 0.85,
        borderRadius: 25,
        justifyContent: "center",
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
    },
    textButton: {
        fontSize: height * 0.025,
        fontWeight: "400",
    },
});
