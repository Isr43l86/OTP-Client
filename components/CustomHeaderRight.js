import {
    StyleSheet,
    Dimensions,
    Modal,
    Text,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { ColorPalette } from "../data/GlobalVariables";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

import PopUpMenu from "./PopUpMenu";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function CustomHeaderRight() {
    const navigation = useNavigation();
    const [showPopUpMenu, setShowPopUpMenu] = useState(false);
    return (
        <>
            <IconButton
                style={{ marginRight: width * 0.03 }}
                icon={() => (
                    <Ionicons
                        name="ellipsis-vertical"
                        size={height * 0.03}
                        color="black"
                    />
                )}
                onPress={() => setShowPopUpMenu(true)}
            />
            <Modal visible={showPopUpMenu} transparent>
                <SafeAreaView
                    style={styles.popUpMenuContainer}
                    onTouchEnd={() => setShowPopUpMenu(false)}
                >
                    <PopUpMenu navigation={navigation} />
                </SafeAreaView>
            </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    popUpMenuContainer: {
        flex: 1,
    },
});
