import React, { Component, useState, setState} from 'react';
import { ScrollView, View, Text } from 'react-native'
import styles from '../../Styles/GeneralStyles';
import Picker from '../Picker/Picker'
import appData from '../../DataSheet/appData.json';


const Panel = (props) => {

  return (
    <View style={styles.dropDownCardPanel}>
      <View style={styles.QuestionPanel}>
        <Text style={styles.QuestionText}>{props.Question}</Text>
      </View>

      <View style={styles.AnswerPanel}>
        <Picker
          defaultVal= {props.pickerDefaultValues}
          showButton={false}
          pickerItemNames={props.pickerItemNames}
        />
      </View>
    </View>
  );
}

export default class QuestionairePanels extends Component {
  constructor(props){
    super(props)
  }
  render() {

    var panelList = [];

    for(let i = 0; i < this.props.Questions.length; i++){
      panelList.push(
        <Panel
               key={i}
               Question={this.props.Questions[i]}
               pickerDefaultValues ={this.props.pickerDefaultValues[i]}
               pickerItemNames = {this.props.pickerItemNames[i]}
        />
      );
    }

    return(
      <View>
        {panelList}
      </View>
    );
  }
}
