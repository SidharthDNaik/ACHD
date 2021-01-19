/*
* Screens/DiagnosisList -> DiagnosisList Screen
*
* Description:
*   This screen is intended for users who know their patients
*   Diagnosis already and want to choose from a list of available
*   options.
*
* Parameters:
*
*
 */
import React, {useState, useEffect, setState, Component} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, View, ScrollView } from 'react-native';
import GeneralButton from '../Components/Buttons/GeneralButton';
import styles from '../Styles/GeneralStyles';
import ScrollableModalView from '../Components/Modals/ScrollableModalView';
import ButtonColumnGenerator from '../Components/Buttons/ButtonColumnGen';
import appData from '../DataSheet/appData.json';
import Picker from '../Components/Picker/Picker'


export default class DiagnosisList extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){

   var pickerItemNames = appData['DiagnosisList']['pickerItemNames'];

   return (
       <LinearGradient colors={['#4086A8', '#4086A8']}
                       style={styles.genGradient}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}>
        <ScrollView>
              <View style={styles.diagnosisList1}>
                <View style={styles.diagnosisList2}>
                  <Picker
                    defaultVal= "ASD"
                    pickerStyle = {styles.pickerStyle}
                    showButton={true}
                    pickerItemNames={pickerItemNames}
                    navigation={this.props.navigation}
                    />
                </View>
              </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
