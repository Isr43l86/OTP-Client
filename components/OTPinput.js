import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function OTPinput() {
    const firstImput = useRef();
    const secondImput = useRef();
    const thirdImput = useRef();
    const fourthImput = useRef();
    const fifthImput = useRef();
    const sixthImput = useRef();

    const [otp, setOtp] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
    });
    const [isFocused1, setFocused1] = useState(true);
    const [isFocused2, setFocused2] = useState(false);
    const [isFocused3, setFocused3] = useState(false);
    const [isFocused4, setFocused4] = useState(false);
    const [isFocused5, setFocused5] = useState(false);
    const [isFocused6, setFocused6] = useState(false);

    const [isOTPCompleted, setIsOTPCompleted] = useState(false);

    useEffect(() => {
        const otpValue = Object.values(otp).join("");
        otpValue.length === 6
            ? setIsOTPCompleted(true)
            : setIsOTPCompleted(false);
    }, [otp]);

    return (
        <View style={styles.container}>
            <View style={styles.otpInputContainer}>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused1
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused1(false)}
                        onFocus={() => setFocused1(true)}
                        maxLength={1}
                        ref={firstImput}
                        autoFocus={true}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                1: text,
                            });
                            text && secondImput.current.focus();
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key != "Backspace" &&
                                otp["1"] != ""
                            ) {
                                secondImput.current.focus();
                                setOtp({ ...otp, 2: nativeEvent.key });
                            }
                            nativeEvent.key === "Backspace"
                                ? setIsOTPCompleted(false)
                                : null;
                        }}
                    ></TextInput>
                </View>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused2
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused2(false)}
                        onFocus={() => setFocused2(true)}
                        value={otp["2"]}
                        maxLength={1}
                        ref={secondImput}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                2: text,
                            });
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["2"] === ""
                            ) {
                                firstImput.current.focus();
                                setIsOTPCompleted(false);
                            }
                            if (
                                nativeEvent.key != "Backspace" &&
                                otp["2"] != ""
                            ) {
                                thirdImput.current.focus();
                                setOtp({ ...otp, 3: nativeEvent.key });
                            }
                        }}
                    ></TextInput>
                </View>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused3
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused3(false)}
                        onFocus={() => setFocused3(true)}
                        value={otp["3"]}
                        maxLength={1}
                        ref={thirdImput}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                3: text,
                            });
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["3"] === ""
                            ) {
                                secondImput.current.focus();
                                setIsOTPCompleted(false);
                            }
                            if (
                                nativeEvent.key != "Backspace" &&
                                otp["3"] != ""
                            ) {
                                fourthImput.current.focus();
                                setOtp({ ...otp, 4: nativeEvent.key });
                            }
                        }}
                    ></TextInput>
                </View>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused4
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused4(false)}
                        onFocus={() => setFocused4(true)}
                        value={otp["4"]}
                        maxLength={1}
                        ref={fourthImput}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                4: text,
                            });
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["4"] === ""
                            ) {
                                thirdImput.current.focus();
                                setIsOTPCompleted(false);
                            }
                            if (
                                nativeEvent.key != "Backspace" &&
                                otp["4"] != ""
                            ) {
                                fifthImput.current.focus();
                                setOtp({ ...otp, 5: nativeEvent.key });
                            }
                        }}
                    ></TextInput>
                </View>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused5
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused5(false)}
                        onFocus={() => setFocused5(true)}
                        value={otp["5"]}
                        maxLength={1}
                        ref={fifthImput}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                5: text,
                            });
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["5"] === ""
                            ) {
                                fourthImput.current.focus();
                                setIsOTPCompleted(false);
                            }
                            if (
                                nativeEvent.key != "Backspace" &&
                                otp["5"] != ""
                            ) {
                                sixthImput.current.focus();
                                setOtp({ ...otp, 6: nativeEvent.key });
                            }
                        }}
                    ></TextInput>
                </View>
                <View
                    style={
                        isOTPCompleted
                            ? styles.otpIsCompleted
                            : isFocused6
                            ? styles.otpInputFocused
                            : styles.otpInput
                    }
                >
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        onBlur={() => setFocused6(false)}
                        onFocus={() => setFocused6(true)}
                        value={otp["6"]}
                        maxLength={1}
                        ref={sixthImput}
                        caretHidden={true}
                        onChangeText={(text) => {
                            setOtp({
                                ...otp,
                                6: text,
                            });
                            !text && fifthImput.current.focus();
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["6"] === ""
                            ) {
                                setIsOTPCompleted(false);
                                fifthImput.current.focus();
                            }
                        }}
                    ></TextInput>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        isOTPCompleted
                            ? { backgroundColor: "#1B8DE4" }
                            : { backgroundColor: "#BAC0CA" },
                    ]}
                    activeOpacity={0.5}
                >
                    <Text style={styles.buttonText}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    otpInputContainer: {
        width: width * 0.85,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    otpInput: {
        borderColor: "#BAC0CA",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        height: height * 0.075,
        width: height * 0.075,
    },
    otpInputFocused: {
        borderColor: "#1B8DE4",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        height: height * 0.075,
        width: height * 0.075,
    },
    otpIsCompleted: {
        borderColor: "#86d96f",
        borderWidth: 2.3,
        borderRadius: 5,
        justifyContent: "center",
        height: height * 0.075,
        width: height * 0.075,
    },
    otpText: {
        fontSize: height * 0.04,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: height * 0.12,
    },
    button: {
        justifyContent: "center",
        height: height * 0.08,
        width: width * 0.83,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: height * 0.027,
    },
});
