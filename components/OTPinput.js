import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    ToastAndroid,
    TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
let socket;

export default function OTPinput({ navigation, NEXT_PAGE, _id, username }) {
    const initializeSocket = async (finalOTPValue) => {
        try {
            socket = io("http://192.168.1.16:4000", {
                transports: ["websocket"],
            });
            console.log("initializing socket");

            socket.on("connect", (data) => {
                console.log("=======Socket connected=======");
            });
            socket.emit("sendOTPfromMobile", finalOTPValue);
        } catch (error) {
            console.log("socket is not initialized", error);
        }
    };

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

    const showToastMessage = () => {
        ToastAndroid.showWithGravityAndOffset(
            "OTP enviado exitosamente!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            height * 0.15
        );
    };

    const validateOptInput = (text) => {
        const re = /^[0-9]$/;
        return re.test(text);
    };

    const handleSendOTP = () => {
        const finalOTPValue = `${otp["1"]}${otp["2"]}${otp["3"]}${otp["4"]}${otp["5"]}${otp["6"]}`;
        const otpInfo = {
            id: _id,
            username: username,
            otpValue: finalOTPValue,
        };
        initializeSocket(otpInfo);
        console.log(finalOTPValue);
    };

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
                        value={otp["1"]}
                        maxLength={1}
                        ref={firstImput}
                        cursorColor={"#1B8DE4"}
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      1: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      1: "",
                                  });
                            text != "" ? secondImput.current.focus() : null;
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
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      2: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      2: "",
                                  });
                            text != "" ? thirdImput.current.focus() : null;
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
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      3: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      3: "",
                                  });
                            text != "" ? fourthImput.current.focus() : null;
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
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      4: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      4: "",
                                  });
                            text != "" ? fifthImput.current.focus() : null;
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
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      5: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      5: "",
                                  });
                            text != "" ? sixthImput.current.focus() : null;
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
                        onChangeText={(text) => {
                            validateOptInput(text)
                                ? setOtp({
                                      ...otp,
                                      6: text,
                                  })
                                : setOtp({
                                      ...otp,
                                      6: "",
                                  });
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (
                                nativeEvent.key === "Backspace" &&
                                otp["6"] != ""
                            ) {
                                setIsOTPCompleted(false);
                            }
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
                    onPress={() => {
                        handleSendOTP();
                        navigation.navigate(NEXT_PAGE);
                        showToastMessage();
                    }}
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
        height: height * 0.06,
        width: height * 0.06,
    },
    otpInputFocused: {
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 5,
        justifyContent: "center",
        height: height * 0.06,
        width: height * 0.06,
    },
    otpIsCompleted: {
        borderColor: "#1B8DE4",
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: "center",
        height: height * 0.06,
        width: height * 0.06,
    },
    otpText: {
        fontSize: height * 0.04,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: height * 0.11,
    },
    button: {
        justifyContent: "center",
        height: height * 0.06,
        width: width * 0.83,
        borderRadius: 50,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: height * 0.022,
    },
});
