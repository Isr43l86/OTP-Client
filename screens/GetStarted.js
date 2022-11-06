import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import logo from "../assets/images/Logo.png";

const height = Dimensions.get("window").height;

export default function GetStarted({ navigation }) {
    setTimeout(() => {
        navigation.navigate("IntroPages");
    }, 1500);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={logo} style={styles.appIcon} />
            </View>
            <View style={styles.sloganContainer}>
                <Text style={styles.slogan}>Apps safe</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.19,
        flex: 1,
        backgroundColor: "#1B8DE4",
        alignItems: "center",
    },
    imageContainer: {
        marginTop: height * 0.18,
    },
    appIcon: {
        height: height * 0.12,
        width: height * 0.1,
    },
    sloganContainer: {
        marginTop: height * 0.02,
    },
    slogan: {
        fontSize: height * 0.055,
        color: "white",
        fontWeight: "bold",
    },
});
