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

  var j = 0;

  for(var i in props.pickerItemNames){
    pickerItemList.push(
      <Picker.Item key={j} label={i} value={i}/>
    );
    j+=1;
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
              changeAnswer(itemValue);
              props.parentCallback(appData["Questionaire"][props.name]["pickerItemNames"][props.position][itemValue], props.position);
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

    super(props);

    this.state = {
      name: props.name,
    }

  }

  render() {

    var panelList = [];

    for(var i = 0; i < this.props.Questions.length; i++){
      panelList.push(
        <View key={i}>
          {console.log(i)}
          <Panel
                 key={i}
                 position={i}
                 name={this.state.name}
                 Question={this.props.Questions[i]}
                 pickerItemNames = {this.props.pickerItemNames[i]}
                 parentCallback = {
                   (newClassification, position) => {
                   this.props.parentCallback(newClassification, position);
                 }}
          />
      </View>
      );
    }

    return(
      <View>
        {panelList}
      </View>
    );
  }
}
