import React, { Component, useState, setState} from 'react';
import { View, Text } from 'react-native'
import styles from '../../Styles/GeneralStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Panel = (props) => {

  return (
    <View style={styles.dropDownCardPanel}>
      <View style={styles.QuestionPanel}>
        <Text>{props.Question}</Text>
      </View>

      <View style={styles.AnswerPanel}>

      </View>
    </View>
  );
}

export default class QuestionairePanels extends Component {
  render() {
    return(
      <Panel Question="Select dominant final diagnosis"/>
    );
  }
}
