import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

import { View, Text } from "react-native";
const AccountStack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <AccountStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AccountStack.Screen name="Main" component={AccountScreen} />
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Register" component={RegisterScreen} />
  </AccountStack.Navigator>
);