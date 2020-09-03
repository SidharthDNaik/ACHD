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
import DiagnosisList from './Screens/DiagnosisList';
import Questionaire from './Screens/Questionaire';
import FinalReccomendation from './Screens/FinalReccomendation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronUp)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initalRouteName="Home"
        screenOptions={{
        headerStyle: {
          backgroundColor: '#757171',
          borderColor: 'black'
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Diagnosis List"
          component={DiagnosisList}
          />
        <Stack.Screen
          name="Questionaire"
          component={Questionaire}
          />
        <Stack.Screen
          name="Final Reccomendation"
          component={FinalReccomendation}
          />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

//<Stack.Screen name="New Daignosis" component={NewDaignosisScreen} />
//<Stack.Screen name="List of Daignosis" component={DaignosisListScreen} />
