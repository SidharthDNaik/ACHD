import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import NewDaignosis from './Screens/NewDaignosis';
import DaignosisList from './Screens/DaignosisList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initalRouteName="Home">

        <Stack.Screen name="Home" component={Home}
          options={{
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: '#FFFFFF'
          }}/>
        <Stack.Screen name="New Daignosis" component={NewDaignosis}/>
        <Stack.Screen name="Daignosis List" component={DaignosisList}/>


      </Stack.Navigator>

    </NavigationContainer>
  );
}

//<Stack.Screen name="New Daignosis" component={NewDaignosisScreen} />
//<Stack.Screen name="List of Daignosis" component={DaignosisListScreen} />
