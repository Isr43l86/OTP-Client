import {
    StyleSheet,
    Text,
    View,
    Button,
    Linking,
    Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

const height = Dimensions.get("window").height;

export default function QrCodeCam({ navigation, navigateTo }) {
    const [permission, setPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`);
        //alert(`Bar code with type ${type} and data ${data} has been scanned`);
        navigation.navigate(navigateTo);
    };

    if (permission === null) {
        return <Text>Requesting for Camera Permission</Text>;
    }
    if (permission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.barcode}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    barcode: {
        height: height * 0.8,
    },
});
