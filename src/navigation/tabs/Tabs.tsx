import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../stacks/HomeStackScreen";
import SettingsStackScreen from "../stacks/SettingsStackScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="HomeMenu" 
        component={HomeStackScreen}
        options={{ headerShown: false }} />
        <Tab.Screen name="SettingsMenu" component={SettingsStackScreen} />
      </Tab.Navigator>
    
  );
};

export default Tabs;
