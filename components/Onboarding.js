import { StyleSheet, View, FlatList, Animated, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import IntroSlides from "../data/IntroSlides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";

import AsyncStorage from "@react-native-async-storage/async-storage";

const height = Dimensions.get("window").height;

export default function Onboarding({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const updateShowOnboarding = async () => {
        try {
            await AsyncStorage.setItem("showOnboarding", "notShow");
        } catch (error) {
            alert(error);
        }
    };

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 30 }).current;

    const scrollTo = () => {
        console.log(`${currentIndex} - ${slidesRef.length}`);
        if (currentIndex < IntroSlides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            updateShowOnboarding();
            navigation.navigate("EnrollApps");
            console.log("Last item");
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={IntroSlides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <View style={styles.footerContainer}>
                <NextButton
                    scrollTo={scrollTo}
                    data={IntroSlides}
                    currentIndex={currentIndex}
                />
                <Paginator data={IntroSlides} scrollX={scrollX} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    footerContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: height * 0.25,
    },
});
