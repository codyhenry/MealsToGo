import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        presentation: "card",
      }}
    >
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ headerBackTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
};
