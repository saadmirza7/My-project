
// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuizScreen from './src/screens/QuizScreen';
import QuizListScreen from './src/screens/QuizListScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="QuizListScreen">
      {/* <Stack.Screen 
        name="LessonScreen" 
        component={LessonScreen}
        options={{ title: 'Lesson' }}
      /> */}
      <Stack.Screen 
        name="QuizListScreen" 
        component={QuizListScreen}
        options={{ title: 'Quizzes' }}
      />
      <Stack.Screen 
        name="QuizScreen" 
        component={QuizScreen}
        options={{ title: 'Quiz' }}
      />
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