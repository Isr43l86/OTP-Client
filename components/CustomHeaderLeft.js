import { Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

import { ScreensNames, DeliveryMethods } from "../data/GlobalVariables";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function CustomHeaderLeft({ PREVIOUS_PAGE }) {
    const navigation = useNavigation();

    return (
        <IconButton
            style={{ marginLeft: width * 0.03 }}
            icon={() => (
                <Ionicons
                    name="chevron-back"
                    size={height * 0.035}
                    color="black"
                />
            )}
            onPress={() =>
                PREVIOUS_PAGE === ScreensNames.ENTER_OTP
                    ? navigation.navigate(PREVIOUS_PAGE, {
                          deliveryMethod: DeliveryMethods[2].type,
                      })
                    : navigation.navigate(PREVIOUS_PAGE)
            }
        />
    );
}
