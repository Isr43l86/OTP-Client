import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
    LayoutAnimation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ColorPalette } from "../data/GlobalVariables";
import React from "react";
import { toggleAnimation } from "../animations/toggleAnimation";

const height = Dimensions.get("window").height;

export default function AccordeonItem({ item }) {
    const [showAnswer, setShowAnswer] = React.useState(false);
    const animationController = React.useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showAnswer ? 0 : 1,
            useNativeDriver: true,
        };
        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(toggleAnimation);
        setShowAnswer(!showAnswer);
    };

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "90deg"],
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => toggleListItem()}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>{item.question}</Text>
                    <Animated.View
                        style={{ transform: [{ rotateZ: arrowTransform }] }}
                    >
                        <Ionicons
                            name="chevron-forward-outline"
                            size={height * 0.03}
                            color="black"
                        />
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {showAnswer && (
                <View style={styles.answer}>
                    <Text style={{ textAlign: "justify" }}>{item.answer}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: "4%",
        borderRadius: 15,
        backgroundColor: ColorPalette.WHITE,
        marginBottom: "3%",
        overflow: "hidden",
        elevation: 4,
        borderColor: ColorPalette.DISABLED_COLOR,
        borderWidth: 1,
    },
    question: {
        fontSize: 16,
        color: "#2d2d2d",
        fontWeight: "bold",
    },
    answer: {
        paddingHorizontal: "2%",
        paddingVertical: "3%",
    },
    questionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
