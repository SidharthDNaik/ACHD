/*
* Screens/NewDaignosis -> NewDaignosis Screen
*
* Description:
*   This screen is intended for users who need to figure out
*   what their patients diagnosis is before moving on.
*
* Parameters:
*
*
 */
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../Styles/GeneralStyles';

const NewDaignosis = (props) => {

  const { itemId } = props.route.params;
  const { diagnosis } = props.route.params;

  return (
    <LinearGradient colors={['#4D4A59', '#A0AEA0']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
       <ScrollView>
        <Text> {diagnosis} </Text>
      </ScrollView>
    </LinearGradient>
  );
}

export default NewDaignosis;
