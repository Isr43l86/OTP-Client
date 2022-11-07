import { StyleSheet, View, BackHandler } from "react-native";
import React, { useEffect } from "react";

import QrCodeCam from "../components/QrCodeCam";
import CustomHeaderLeft from "../components/CustomHeaderLeft";

const nextPage = "EnrollApps";

export default function QrCodeReader({ route, navigation }) {
    const { previousScreen, notificationMessage } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <CustomHeaderLeft navigateTo={previousScreen} />,
        });
    }, [navigation, previousScreen]);

    return (
        <View style={styles.container}>
            <View style={styles.scannerContainer}>
                <QrCodeCam
                    navigation={navigation}
                    navigateTo={nextPage}
                    previousScreen={previousScreen}
                    notificationMessage={notificationMessage}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        marginLeft: 0,
        marginStart: 0,
        paddingHorizontal: 0,
        paddingLeft: 0,
        paddingStart: 0,
        padding: 0,
    },
    scannerContainer: {
        marginHorizontal: 0,
        marginLeft: 0,
        marginStart: 0,
        paddingHorizontal: 0,
        paddingLeft: 0,
        paddingStart: 0,
        padding: 0,
    },
});
