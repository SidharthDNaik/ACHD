import React, { Component, useState, setState} from 'react';
import { ScrollView, View, Text } from 'react-native'
import styles from '../../Styles/GeneralStyles';
import Modal from 'react-native-modal';
import appData from '../../DataSheet/appData.json';
import GeneralButton from '../Buttons/GeneralButton';
import {Picker} from '@react-native-community/picker';

const Panel = (props) => {

  // This is used to turn off/on the Help button modal.
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [answerName, setAnswerName] = useState("Not Selected");

  const changeAnswer = (itemValue) => {
    setAnswerName(itemValue);
  };

  var pickerItemList = [];

  pickerItemList.push(
    <Picker.Item key={0} label={"Not Selected"} value={"Not Selected"}/>
  );

  for(let i = 0; i < props.pickerItemNames.length ; i++){
    pickerItemList.push(
      <Picker.Item key={i+1} label={props.pickerItemNames[i]} value={props.pickerItemNames[i]}/>
    );
  }

  return (
    <View style={styles.dropDownCardPanel}>
      <View style={styles.QuestionPanel}>
        <Text style={styles.QuestionText}>{props.Question}</Text>
      </View>

      <View style={styles.AnswerPanel}>

        <GeneralButton
          buttonStyle={(answerName.localeCompare("Not Selected")) ? styles.answerButtonChosen : styles.answerButtonNotChosen}
          textStyle={styles.answerButtonText}
          onPress={toggleModal}
          name={answerName}
          />

      </View>
      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        style={styles.modal}
        >
        <View style={styles.pickerAnswerModal}>
          <View style={styles.closeButton}>
            <GeneralButton
                    buttonStyle={styles.closeButtonStyle}
                    textStyle={styles.closeButtonText}
                    name={"Close"}
                    onPress={toggleModal}/>
          </View>
          <Picker
            selectedValue={answerName}
            onValueChange={(itemValue) => {
              changeAnswer(itemValue)
            }}
            >
          {pickerItemList}
        </Picker>
        </View>
      </Modal>
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
               pickerItemNames = {this.props.pickerItemNames[i]}
        />
      );
    }

    return(
      <View>
        {panelList}
        <View style={{height: 45}}></View>
      </View>
    );
  }
}
