import { LayoutAnimation } from "react-native";

export const toggleAnimation = {
    duration: 300,
    update: {
        duration: 300,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delet: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut,
    },
};
