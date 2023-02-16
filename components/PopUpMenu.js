import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PopUpMenuOptions, ColorPalette } from "../data/GlobalVariables";
import PopUpMenuItem from "./PopUpMenuItem";
import React from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function PopUpMenu({ navigation }) {
    return (
        <View style={styles.popUpMenuContainer}>
            {PopUpMenuOptions.map((popUpMenuOption) => (
                <PopUpMenuItem
                    key={popUpMenuOption.id}
                    popUpItem={popUpMenuOption}
                    navigation={navigation}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    popUpMenuContainer: {
        flex: 0.15,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        width: width * 0.63,
        backgroundColor: ColorPalette.WHITE,
        marginTop: height * 0.07,
        marginLeft: width * 0.28,
        elevation: 5,
    },
});
