import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { ColorPalette, ScreensNames } from "../data/GlobalVariables";
import React from "react";

const height = Dimensions.get("window").height;

export default function PopUpMenuItem({ popUpItem, navigation }) {
    const handleOptionMenu = () => {
        console.log(popUpItem.id);
        if (popUpItem.id === "1") {
            navigation.navigate(ScreensNames.INTRODUCTION_PAGE);
        }
    };

    return (
        <TouchableOpacity
            style={styles.containerItem}
            onPress={() => handleOptionMenu()}
        >
            <Image
                source={popUpItem.icon}
                style={{ height: height * 0.03, width: height * 0.03 }}
            />
            <Text
                style={{
                    paddingLeft: 16,
                    marginTop: -1,
                    fontSize: height * 0.02,
                }}
            >
                {popUpItem.description}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        flexDirection: "row",
        paddingTop: height * 0.02,
        borderBottomWidth: 1,
        borderBottomColor: ColorPalette.DISABLED_COLOR,
    },
});
