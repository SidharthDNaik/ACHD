/*
* App
*
* Description:
*   Outputs our app + where we put all our screen navigation stuff.
*
*
 */
import React from 'react';
import Home from './Screens/Home';
import NewDiagnosis from './Screens/NewDiagnosis';
import DiagnosisList from './Screens/DiagnosisList';
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
              backgroundColor: '#312F36'
            },
            headerTintColor: 'black'
          }}/>
        <Stack.Screen name="New Diagnosis" component={NewDiagnosis}/>
        <Stack.Screen name="Diagnosis List" component={DiagnosisList}/>


      </Stack.Navigator>

    </NavigationContainer>
  );
}

//<Stack.Screen name="New Daignosis" component={NewDaignosisScreen} />
//<Stack.Screen name="List of Daignosis" component={DaignosisListScreen} />
