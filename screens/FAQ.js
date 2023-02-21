import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    Dimensions,
} from "react-native";
import { ColorPalette, FAQ_ITEMS } from "../data/GlobalVariables";
import AccordeonItem from "../components/AccordeonItem";
import React from "react";

const height = Dimensions.get("window").height;

export default function FAQ() {
    return (
        <SafeAreaView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Preguntas frecuentes</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={FAQ_ITEMS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <AccordeonItem item={item} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: "4%",
        paddingHorizontal: "4%",
        height: "100%",
        backgroundColor: ColorPalette.WHITE,
    },
    titleContainer: {
        backgroundColor: ColorPalette.WHITE,
        paddingLeft: "6%",
        paddingTop: "6.5%",
    },
    title: {
        fontWeight: "700",
        fontSize: height * 0.022,
    },
});
