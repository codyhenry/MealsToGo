import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text, Button } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { theme } from "../theme/index";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: { true: "md-restaurant", false: "md-restaurant-outline" },
  Map: { true: "md-map", false: "md-map-outline" },
  Settings: { true: "md-settings", false: "md-settings-outline" },
};

//if header is disabled, wrap these in a safe-area.component - needs import
const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = TAB_ICON[route.name][focused];
              //You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.brand.secondary,
            tabBarInactiveTintColor: theme.colors.ui.secondary,
            headerShown: false,
          })}
        >
          <Tab.Screen
            //The tabs will contain screens for stack navigation components
            name="Restaurants"
            component={RestaurantsNavigator}
          />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
