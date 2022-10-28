import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GetStarted from "./screens/GetStarted";
import EnrollFirstApp from "./screens/EnrollFirstApp";
import QrCodeReader from "./screens/QrCodeReader";
import AppsEnrolledList from "./screens/AppsEnrolledList";

const MyStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <MyStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="GetStarted"
            >
                <MyStack.Screen name="GetStarted" component={GetStarted} />
                <MyStack.Screen
                    name="EnrollFirstApp"
                    component={EnrollFirstApp}
                />
                <MyStack.Screen name="QrCodeReader" component={QrCodeReader} />
                <MyStack.Screen
                    name="AppsEnrolledList"
                    component={AppsEnrolledList}
                />
            </MyStack.Navigator>
        </NavigationContainer>
    );
}
