import { View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function CustomHeaderRight() {
    return (
        <IconButton
            icon={() => (
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={height * 0.045}
                    color="black"
                />
            )}
        />
    );
}
