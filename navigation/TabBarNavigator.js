import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Settings from "../views/Settings";
import Teste from "../views/Teste";

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Teste" component={Teste} />
    </Tab.Navigator>
  );
};

export default TabBarNavigator;
