import { Dimensions } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function CustomHeaderRight() {
    return (
        <IconButton
            style={{ marginRight: width * 0.03 }}
            icon={() => (
                <Ionicons
                    name="ellipsis-vertical"
                    size={height * 0.038}
                    color="black"
                />
            )}
        />
    );
}
