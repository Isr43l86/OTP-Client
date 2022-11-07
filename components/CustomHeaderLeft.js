import { Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("window").height;

export default function CustomHeaderLeft({ navigateTo }) {
    const navigation = useNavigation();

    return (
        <IconButton
            icon={() => (
                <MaterialCommunityIcons
                    name="chevron-left"
                    size={height * 0.06}
                    color="black"
                />
            )}
            onPress={() =>
                navigateTo === "SendOTP"
                    ? navigation.navigate(navigateTo, { deliveryMethod: "qr" })
                    : navigation.navigate(navigateTo)
            }
        />
    );
}
