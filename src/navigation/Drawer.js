import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tab from "./Tab";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Tab">
      <Drawer.Screen name="Tab" component={Tab} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
