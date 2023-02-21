import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ScreensNames, ColorPalette } from "./data/GlobalVariables";

import GetStarted from "./screens/GetStarted";
import EnrollApps from "./screens/EnrollApps";
import QrCodeReader from "./screens/QrCodeReader";
import IntroPages from "./screens/IntroPages";
import SendOTP from "./screens/SendOTP";
import FAQ from "./screens/FAQ";

import CustomHeaderLeft from "./components/CustomHeaderLeft";
import CustomHeaderRight from "./components/CustomHeaderRight";

const MyStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MyStack.Navigator initialRouteName={ScreensNames.GET_STARTED}>
                <MyStack.Screen
                    name={ScreensNames.GET_STARTED}
                    component={GetStarted}
                    options={{ header: () => null }}
                />
                <MyStack.Screen
                    name={ScreensNames.INTRODUCTION_PAGE}
                    component={IntroPages}
                    options={{ header: () => null }}
                />
                <MyStack.Screen
                    name={ScreensNames.HOME_PAGE}
                    component={EnrollApps}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft
                                PREVIOUS_PAGE={ScreensNames.GET_STARTED}
                            />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: ColorPalette.BLACK,
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name={ScreensNames.SCAN_QRCODE}
                    component={QrCodeReader}
                    screenOptions={{ unmountOnBlur: true }}
                    options={{
                        unmountOnBlur: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft
                                PREVIOUS_PAGE={ScreensNames.HOME_PAGE}
                            />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: ColorPalette.BLACK,
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name={ScreensNames.ENTER_OTP}
                    component={SendOTP}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft
                                PREVIOUS_PAGE={ScreensNames.HOME_PAGE}
                            />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: ColorPalette.BLACK,
                            elevation: 5,
                        },
                    }}
                />
                <MyStack.Screen
                    name={ScreensNames.FAQ}
                    component={FAQ}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <CustomHeaderLeft
                                PREVIOUS_PAGE={ScreensNames.HOME_PAGE}
                            />
                        ),
                        headerRight: () => <CustomHeaderRight />,
                        headerStyle: {
                            shadowColor: ColorPalette.BLACK,
                            elevation: 5,
                        },
                    }}
                />
            </MyStack.Navigator>
        </NavigationContainer>
    );
}
