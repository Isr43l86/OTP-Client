import { StyleSheet, View, BackHandler } from "react-native";
import React, { useEffect } from "react";

import QrCodeCam from "../components/QrCodeCam";
import CustomHeaderLeft from "../components/CustomHeaderLeft";
import { ScreensNames, ColorPalette } from "../data/GlobalVariables";

export default function QrCodeReader({ route, navigation }) {
    const { PREVIOUS_PAGE, NOTIFICATION_MESSAGE } = route.params;
    const NEXT_PAGE = ScreensNames.HOME_PAGE;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <CustomHeaderLeft PREVIOUS_PAGE={PREVIOUS_PAGE} />
            ),
        });
    }, [navigation, PREVIOUS_PAGE]);

    return (
        <View style={styles.container}>
            <View style={styles.scannerContainer}>
                <QrCodeCam
                    navigation={navigation}
                    NEXT_PAGE={NEXT_PAGE}
                    PREVIOUS_PAGE={PREVIOUS_PAGE}
                    NOTIFICATION_MESSAGE={NOTIFICATION_MESSAGE}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scannerContainer: {
        flex: 1,
    },
});
