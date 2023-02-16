import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GetStarted from "./screens/GetStarted";
import EnrollApps from "./screens/EnrollApps";
import QrCodeReader from "./screens/QrCodeReader";
import QrCodeForSendOTP from "./screens/QrCodeForSendOTP";
import IntroPages from "./screens/IntroPages";
import SendOTP from "./screens/SendOTP";

import CustomHeaderLeft from "./components/CustomHeaderLeft";
import CustomHeaderRight from "./components/CustomHeaderRight";

const MyStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MyStack.Navigator initialRouteName="GetStarted">
                <MyStack.Screen
                    name="GetStarted"
                    component={GetStarted}
                    options={{ header: () => null }}
                />
                <MyStack.Screen
                    name="IntroPages"
                    component={IntroPages}
                    options={{ header: () => null }}
                />
                <MyStack.Screen
                    name="EnrollApps"
                    component={EnrollApps}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft PREVIOUS_PAGE={"GetStarted"} />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: "black",
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name="QrCodeReader"
                    component={QrCodeReader}
                    screenOptions={{ unmountOnBlur: true }}
                    options={{
                        unmountOnBlur: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft PREVIOUS_PAGE={"EnrollApps"} />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: "black",
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name="QrCodeForSendOTP"
                    component={QrCodeForSendOTP}
                    screenOptions={{ unmountOnBlur: true }}
                    options={{
                        unmountOnBlur: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft PREVIOUS_PAGE={"EnrollApps"} />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: "black",
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name="SendOTP"
                    component={SendOTP}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft PREVIOUS_PAGE={"EnrollApps"} />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: "black",
                            elevation: 5,
                        },
                    }}
                />
            </MyStack.Navigator>
        </NavigationContainer>
    );
}
