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
import DropDownPicker from 'react-native-dropdown-picker';
import DynamicQuestionaireCards from '../Components/Cards/DynamicQuestionaireCards';
import appData from '../DataSheet/appData.json';

const Questionaire = (props) => {

  const { itemId } = props.route.params;
  const { diagnosis } = props.route.params;

  var headerDisplayText = (diagnosis.localeCompare("new diagnosis")) ? "Selected diagnosis: " : "You are starting a ";
  var classification = (diagnosis.localeCompare("new diagnosis")) ? appData["DiagnosisList"]["pickerItemNames"][diagnosis] : "0";

  return (
    <LinearGradient colors={['#757171', '#faf2f2']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
        <View style={styles.Questionaire1}>
          <Text style={styles.QuestionaireHeaderText}>
              {headerDisplayText}{diagnosis}
          </Text>
          <DynamicQuestionaireCards
            name={"Anatomic"}
            type={diagnosis}
            classification={classification}
            Questions= {appData["Questionaire"]["Anatomic"]["Questions"]}
            pickerItemNames= {appData["Questionaire"]["Anatomic"]["pickerItemNames"]}
            />
          <View style={{height:25}}></View>
          <DynamicQuestionaireCards
            name="Physiologic"
            type={"new diagnosis"}
            classification="N"
            Questions= {appData["Questionaire"]["Physiologic"]["Questions"]}
            pickerItemNames= {appData["Questionaire"]["Physiologic"]["pickerItemNames"]}
          />
        </View>
    </LinearGradient>
  );
}

export default Questionaire;
