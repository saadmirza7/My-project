import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './src/screens/BottomTabNavigator';
import LessonScreen from './src/screens/LessonScreen';
import QuizScreen from './src/screens/QuizScreen';



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
       <Stack.Screen name="LessonScreen" component={LessonScreen} />
     <Stack.Screen name="Quizcreen" component={QuizScreen} /> 
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}