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
import React, { useState, setState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '../Styles/GeneralStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import DynamicQuestionaireCards from '../Components/Cards/DynamicQuestionaireCards';
import appData from '../DataSheet/appData.json';
import GeneralButton from '../Components/Buttons/GeneralButton'

const Questionaire = (props) => {

  const { itemId } = props.route.params;
  const { diagnosis } = props.route.params;

  var headerDisplayText = (diagnosis.localeCompare("new diagnosis")) ? "Selected diagnosis: " : "You are starting a ";
  var classification = (diagnosis.localeCompare("new diagnosis")) ? appData["DiagnosisList"]["pickerItemNames"][diagnosis] : 2;

  const [classificationA, setClassificationA] = useState(classification);
  const [classificationP, setClassificationP] = useState("N");
  const [isVisible, setIsVisible] = useState(false);
  const [isPrompt, setIsPrompt] = useState(false);

  const changeA = (newClassification) => {
    setClassificationA(newClassification);
  };

  const changeP = (newClassification) => {
    setClassificationP(newClassification);
  };

  const changeIsVisible = (val) => {
    setIsVisible(val);
  };

  const changeIsPrompt = (val) => {
    setIsPrompt(val);
  };


  var display = []

  if(isVisible){
    display.push(
      <View key={0} style={styles.Questionaire4}>
        <GeneralButton
          name="View Final Diagnosis Reccomendations"
          buttonStyle={styles.finalButton}
          textStyle={styles.finalButtonText}
          onPress={() => props.navigation.push('Final Reccomendation', {
              classificationA: classificationA,
              classificationP: classificationP,
              diagnosis: diagnosis,
            })
          }
        />
      </View>
    );
  }

  if(isPrompt){
    display.push(
      <View key={0} style={styles.promptNewDiag}>
        <Text style={styles.promptNewDiagText}>
          {appData["Questionaire"]["Prompt1"]}
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#757171', '#faf2f2']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
        <View style={styles.Questionaire1}>
          <ScrollView>
            <View style={styles.Questionaire3}>
              <Text style={styles.QuestionaireHeaderText}>
                  {headerDisplayText}{diagnosis}
              </Text>
            </View>
            <DynamicQuestionaireCards
              name={"Anatomic"}
              type={diagnosis}
              classification={classificationA}
              Questions= {appData["Questionaire"]["Anatomic"]["Questions"]}
              pickerItemNames= {appData["Questionaire"]["Anatomic"]["pickerItemNames"]}
              parentCallback = {(newClassification) => {
                changeA(newClassification);
              }}
              />
            <DynamicQuestionaireCards
              name="Physiologic"
              type={"new diagnosis"}
              classification={classificationP}
              Questions= {appData["Questionaire"]["Physiologic"]["Questions"]}
              pickerItemNames= {appData["Questionaire"]["Physiologic"]["pickerItemNames"]}
              parentCallback = {(newClassification) => {
                if (newClassification != "N" && (diagnosis.localeCompare("new diagnosis"))){
                  changeIsVisible(true);
                } else if (newClassification != "N" && !(diagnosis.localeCompare("new diagnosis"))) {
                  changeIsPrompt(true);
                } else {
                  changeIsPrompt(false);
                  changeIsVisible(false);
                }
                changeP(newClassification);
              }}
            />
            {display}
            <View style={{height: 150}}></View>
          </ScrollView>
        </View>
    </LinearGradient>
  );
}

export default Questionaire;
