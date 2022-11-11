import { Dimensions } from "react-native";
import React from "react";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
    ScreensNames,
    ColorPalette,
    NotificationMessages,
} from "../data/GlobalVariables";

const height = Dimensions.get("window").height;

export default function EnrollOptionButton({ navigation }) {
    const PREVIOUS_PAGE = ScreensNames.HOME_PAGE;
    const NOTIFICATION_MESSAGE = NotificationMessages.APP_ENROLLED_SUCCESS;
    return (
        <IconButton
            icon={() => (
                <MaterialCommunityIcons
                    name="plus"
                    size={height * 0.06}
                    color="white"
                />
            )}
            backgroundColor={ColorPalette.PRIMARY_COLOR}
            color={ColorPalette.WHITE}
            style={{
                elevation: 10,
                shadowColor: ColorPalette.BLACK,
                height: height * 0.1,
                width: height * 0.1,
                borderRadius: height,
            }}
            onPress={() =>
                navigation.navigate(ScreensNames.SCAN_QRCODE, {
                    PREVIOUS_PAGE: PREVIOUS_PAGE,
                    NOTIFICATION_MESSAGE: NOTIFICATION_MESSAGE,
                })
            }
        />
    );
}
