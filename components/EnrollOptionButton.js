import { Dimensions } from "react-native";
import React from "react";
import { IconButton } from "@react-native-material/core";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

export default function EnrollOptionButton({ navigation }) {
    return (
        <IconButton
            icon={() => (
                <MaterialCommunityIcons
                    name="plus"
                    size={height * 0.06}
                    color="white"
                />
            )}
            backgroundColor="#1B8DE4"
            color="#DBF0FF"
            style={{
                elevation: 10,
                shadowColor: "black",
                height: height * 0.1,
                width: height * 0.1,
                borderRadius: height,
            }}
            onPress={() => navigation.navigate("QrCodeReader")}
        />
    );
}
