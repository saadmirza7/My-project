import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import Profile from "./Profile";
import QuizScreen from "./QuizScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
      }} />
       <Tab.Screen name="QuizScreen" component={QuizScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
