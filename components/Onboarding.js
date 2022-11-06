import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import IntroSlides from "../data/IntroSlides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NextButton from "./NextButton";

export default function Onboarding({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        console.log(`${currentIndex} - ${slidesRef.length}`);
        if (currentIndex < IntroSlides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate("EnrollApps");
            console.log("Last item");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
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
            <NextButton
                scrollTo={scrollTo}
                data={IntroSlides}
                currentIndex={currentIndex}
            />
            <Paginator data={IntroSlides} scrollX={scrollX} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
