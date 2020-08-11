import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './Screens/FirstScreen'
import NewDaignosisScreen from './Screens/NewDaignosisScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={FirstScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
