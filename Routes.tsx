import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fragment } from "react";
import { Home } from "./src/screens/Home";
import { Splash } from "./src/screens/Splash";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </Fragment>
    );
};
