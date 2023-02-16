import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import React from "react";
import { ColorPalette } from "../data/GlobalVariables";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function NextButton({ data, currentIndex, scrollTo }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={scrollTo}
                activeOpacity={0.5}
            >
                <Text style={styles.text}>{data[currentIndex].buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: ColorPalette.WHITE,
        width: width * 0.55,
        height: height * 0.055,
        justifyContent: "center",
        borderRadius: 50,
        borderColor: ColorPalette.BLACK,
        borderWidth: 2,
    },
    text: {
        color: ColorPalette.BLACK,
        textAlign: "center",
        fontSize: height * 0.022,
        fontWeight: "bold",
    },
});
