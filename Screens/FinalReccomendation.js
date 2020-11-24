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
import React, {useState, setState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, View, ScrollView } from 'react-native';
import styles from '../Styles/GeneralStyles';
import appData from '../DataSheet/appData'
import GeneralButton from '../Components/Buttons/GeneralButton'
import CardTable from '../Components/Cards/CardTable'
import QuestionTree from '../Components/Trees/QuestionTree'
import ImgDisplayer from '../Components/IMGDisplayer/ImgDisplayer'

const FinalReccomendation = (props) => {

  const { classificationA } = props.route.params;
  const { classificationP } = props.route.params;
  const { diagnosis } = props.route.params;

  var styleA = styles.dropDownCardFrameText1;
  var styleP = styles.dropDownCardFrameText1;
  var display = [];
  var tableQuestions = appData["FinalReccomendation"][diagnosis]["TableQuestions"];
  var tableAnswers;

  if (classificationA == 1){
    styleA = styles.dropDownCardFrameText2;
  } else if (classificationA == 2){
    styleA = styles.dropDownCardFrameText3;
  } else if (classificationA == 3){
    styleA = styles.dropDownCardFrameText4;
  } else{
    styleA = styles.dropDownCardFrameText5;
  }
  if ( classificationP == "A" ){
    tableAnswers = appData["FinalReccomendation"][diagnosis]["TableA"];
    display.push(
      <CardTable key={0} tableQuestions={tableQuestions} tableAnswers={tableAnswers}/>
    );
    styleP = styles.dropDownCardFrameText2;
  } else if ( classificationP == "B" ){
    tableAnswers = appData["FinalReccomendation"][diagnosis]["TableB"];
    display.push(
      <CardTable key={1} tableQuestions={tableQuestions} tableAnswers={tableAnswers}/>
    );
    styleP = styles.dropDownCardFrameText3;
  } else if ( classificationP == "C" ){
    tableAnswers = appData["FinalReccomendation"][diagnosis]["TableC"];
    display.push(
      <CardTable key={2} tableQuestions={tableQuestions} tableAnswers={tableAnswers}/>
    );
    styleP = styles.dropDownCardFrameText4;
  } else {
    tableAnswers = appData["FinalReccomendation"][diagnosis]["TableD"];
    display.push(
      <CardTable key={3} tableQuestions={tableQuestions} tableAnswers={tableAnswers}/>
    );
    styleP = styles.dropDownCardFrameText5;
  }
  return(
    <LinearGradient colors={['#4086A8', '#4086A8']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
        <View style={styles.cardHolder}>
          <ScrollView>
            <View style={styles.finalRecCard0}>

              <View style= {{alignItems: "center", flexDirection:"column", bottom: 10}}>
                <Text style={styles.dropDownCardFrameText}>
                  {appData["FinalReccomendation"]["TopCard"]}
                </Text>
                <View style = {{top: 5, flexDirection:"row"}}>
                  <Text style={styles.dropDownCardFrameText}>
                    {diagnosis + " "}
                  </Text>
                  <View style={styleA}>
                    <Text style={styles.dropDownCardFrameText}>
                      {classificationA}
                    </Text>
                  </View>
                  <Text>
                     {" "}
                  </Text>
                  <View style={styleP}>
                    <Text style={styles.dropDownCardFrameText}>
                      {classificationP}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{paddingBottom: 10}}>
                <Text style={styles.dropDownCardFrameText}>
                  {appData["FinalReccomendation"]["MiddleCard"]}
                </Text>
              </View>

              <View style={{flexDirection: "row"}}>
                {display}
              </View>

            </View>

            <View style={{height: 10}}>
            </View>

            <View style={styles.finalRecCard}>
              <View style={{paddingBottom: 9, borderBottomWidth:1, borderColor: "rgba(0,0,0,.2)"}}>
                <Text style={styles.dropDownCardFrameText}>
                  {appData["FinalReccomendation"]["TopCard2"]}
                </Text>
              </View>
              <ImgDisplayer
                panelNames={appData["FinalReccomendation"][diagnosis]["AdditionalReccomendations"]["panelNames"]}
                />
            </View>

            <View style={{height: 10}}>
            </View>

            <View style={styles.finalRecCard}>
              <View style={{paddingBottom: 9, borderBottomWidth:1, borderColor: "rgba(0,0,0,.2)"}}>
                <Text style={styles.dropDownCardFrameText}>
                  {appData["FinalReccomendation"]["TopCard3"]}
                </Text>
              </View>

              <QuestionTree
                header={appData["FinalReccomendation"][diagnosis]["header"]}
                questions={appData["FinalReccomendation"][diagnosis]["questions"]}
                noData={appData["FinalReccomendation"]["noData"]}
                />

            </View>

            <View style={{ top: 40, alignItems: "center"}}>
              <GeneralButton
                name="Return Home"
                buttonStyle={styles.finalButton}
                textStyle={styles.returnHomeText}
                onPress={() => {
                    props.navigation.navigate('Home')
                  }
                }
              />
              <View style={{height: 200}}>
              </View>
            </View>

          </ScrollView>
        </View>
    </LinearGradient>
  );
};

export default FinalReccomendation;
