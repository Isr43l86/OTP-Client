import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from "react-native";
import appIcon from "../assets/favicon.png";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Name</Text>
            <View style={styles.imageContainer}>
                <Image source={appIcon} style={styles.appIcon} />
            </View>
            <View style={styles.sloganContainer}>
                <Text style={styles.slogan}>Slogan or prhase</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("EnrollFirstApp")}
                >
                    <Animated.View style={styles.button}>
                        <Text style={styles.textButton}>Get Started</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: height * 0.19,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: height * 0.038,
        fontWeight: "bold",
    },
    imageContainer: {
        marginTop: height * 0.06,
    },
    appIcon: {
        height: height * 0.3,
        width: height * 0.3,
    },
    sloganContainer: {
        marginTop: height * 0.038,
    },
    slogan: {
        fontSize: height * 0.026,
        fontWeight: "500",
    },
    buttonContainer: {
        marginTop: height * 0.1,
        alignItems: "center",
    },
    button: {
        backgroundColor: "#50ABFF",
        height: height * 0.06,
        width: width * 0.65,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        elevation: 10,
    },
    textButton: {
        color: "#fff",
        fontWeight: "500",
        fontSize: height * 0.026,
    },
});
