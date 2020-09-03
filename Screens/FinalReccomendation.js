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

const FinalReccomendation = (props) => {

  const { classificationA } = props.route.params;
  const { classificationP } = props.route.params;
  const { diagnosis } = props.route.params;

  var styleA = styles.dropDownCardFrameText1;
  var styleP = styles.dropDownCardFrameText1;
  var display = [];

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
    styleP = styles.dropDownCardFrameText2;
    display.push(<CardTable key={0} table={appData["FinalReccomendation"][diagnosis]["TableA"]}/>);
  } else if ( classificationP == "B" ){
    styleP = styles.dropDownCardFrameText3;
    display.push(<CardTable key={1} table={appData["FinalReccomendation"][diagnosis]["TableB"]}/>);
  } else if ( classificationP == "C" ){
    styleP = styles.dropDownCardFrameText4;
    display.push(<CardTable key={2} table={appData["FinalReccomendation"][diagnosis]["TableC"]}/>);
  } else {
    styleP = styles.dropDownCardFrameText5;
    display.push(<CardTable key={3} table={appData["FinalReccomendation"][diagnosis]["TableD"]}/>);
  }

  return(
    <LinearGradient colors={['#757171', '#faf2f2']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
        <View style={styles.cardHolder}>
          <ScrollView>
            <View style={styles.finalRecCard}>

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

              {display}

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
            </View>

          </ScrollView>
        </View>
    </LinearGradient>
  );
};

export default FinalReccomendation;
