import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Paginator({ data, scrollX }) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [7, 13, 7],
                    extrapolate: "clamp",
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: "clamp",
                });
                return (
                    <Animated.View
                        style={[
                            styles.dot,
                            { width: dotWidth, opacity: opacity },
                        ]}
                        key={index.toString()}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: height * 0.07,
        marginTop: height * 0.04,
    },
    dot: {
        height: height * 0.012,
        borderRadius: 10,
        backgroundColor: "#1B8DE4",
        marginHorizontal: width * 0.013,
    },
});
