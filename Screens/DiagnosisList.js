/*
* Screens/DaignosisList -> DaignosisList Screen
*
* Description:
*   This screen is intended for users who know their patients
*   daignosis already and want to choose from a list of available
*   options.
*
* Parameters:
*
*
 */
import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import GeneralButton from '../Components/Buttons/GeneralButton';
import styles from '../Styles/GeneralStyles';
import ScrollableModal from '../Components/Modals/ScrollableModal';
import ButtonColumnGenerator from '../Components/Buttons/ButtonColumnGen';

const DaignosisList = (props) => {

    var buttonNames = ["Start New Diagnosis", "Choose from Diagnosis List"];

    var buttonOnpressRoutes = ["New Diagnosis", "Home"]

    var buttonOnpress = []

    for (let i = 0; i < buttonOnpressRoutes.length; i++){

      buttonOnpress.push(() => props.navigation.navigate(buttonOnpressRoutes[i]))

    }

   return (

          <ScrollView style={styles.genHomeView}>
             <ButtonColumnGenerator
               names = {buttonNames}
               onPresses = {buttonOnpress}
               />
          </ScrollView>
    );
}

export default DaignosisList
