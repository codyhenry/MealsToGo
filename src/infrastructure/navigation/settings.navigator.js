import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        presentation: "modal",
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={() => null} />
    </SettingsStack.Navigator>
  );
};
