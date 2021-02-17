import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import Profile from "../screens/Profile";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
