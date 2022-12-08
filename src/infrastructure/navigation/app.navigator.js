import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

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
const SettingsScreen = () => <Text>Settings</Text>;

export const AppNavigator = () => (
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
);
