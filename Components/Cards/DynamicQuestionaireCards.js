import React, { Component, setState, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../../Styles/GeneralStyles';
import GeneralButton from '../Buttons/GeneralButton';
import Accordion from 'react-native-collapsible/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import QuestionPanels from './QuestionairePanels'
import Constants from 'expo-constants';
import appData from '../../DataSheet/appData';

export default class DynamicQuestionaireCards extends Component {

  constructor(props)  {
    super(props);

    var x = []

    for (var i = 0; i < props.Questions.length; i++) {
      x.push(0);
    }

    this.state = {

      isSimpleVisible: true,

      isComplexVisible: true,

      isCollapsed: true,

      decisionTree: x,

      classification: props.classification,

      Sections : [
        {
          name: props.name,
          Questions: props.Questions,
          pickerItemNames: props.pickerItemNames,
          type: props.type,
        },
      ],

      activeSections: [],

    };
  };

  _renderSectionTitle = (section) => {
    return(
      <View>
      </View>
    );
  };

  _renderHeader = (section) => {
    var classStyle = styles.dropDownCardFrameText1;
    if (this.state.classification == 1 || this.state.classification == "A"){
      classStyle = styles.dropDownCardFrameText2
    } else if (this.state.classification == 2 || this.state.classification == "B"){
      classStyle = styles.dropDownCardFrameText3
    } else if (this.state.classification == 3 || this.state.classification == "C"){
      classStyle = styles.dropDownCardFrameText4
    } else if (this.state.classification == 4 || this.state.classification == "D"){
      classStyle = styles.dropDownCardFrameText5
    }
    return (
      <View style={styles.dropDownCardFrame}>
        <Text style={styles.dropDownCardFrameText}>
          {section.name} Classification:{"  "}
        </Text>
        <View style={classStyle}>
          <Text style={styles.dropDownCardFrameText}>
            {this.state.classification}
          </Text>
        </View>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={"chevron-down"}/>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    var height = (section.name.localeCompare("Physiologic")) ? styles.properHeight1 : styles.properHeight2;
    var headerDisplay = "";
    if (section.name.localeCompare("Physiologic")){
      headerDisplay = section.name + " Variables";
    } else if (section.name.localeCompare("Anatomic")){
      headerDisplay = "Select Dominant Final Diagnosis";
    } else {
      headerDisplay = "Explaination";
    }
    var headerDisplay = (section.name.localeCompare("Physiologic")) ? section.name + " Variables" : "Select Dominant Final Diagnosis";
    var display = []
    if (section.type.localeCompare("new diagnosis")) {
      display.push(
        <View key={0} style={styles.dropDownCardPanel2}>
          <Text style={styles.explainationText}>{appData["Questionaire"]["ExplainationForDiagnosisListQuestionaire"]}</Text>
        </View>);
    } else if (section.name.localeCompare("Anatomic")) {
      display.push(
          <View key={1}>
                <QuestionPanels
                  isVisible={true}
                  name={section.name}
                  Questions={section.Questions}
                  pickerItemNames={section.pickerItemNames}
                  classification={this.state.classification}
                  parentCallback={(newClassification, position) => {
                      var classChange = this.state.decisionTree;
                      classChange[position] = newClassification
                      this.setState({decisionTree: classChange})
                      var max = 0
                      for (var i = 0; i < this.state.decisionTree.length; i++){
                        if (max < this.state.decisionTree[i]){
                          max = this.state.decisionTree[i]
                        }
                      }
                      if (section.name.localeCompare("Anatomic")){
                        if(max == 0){
                          max = "N"
                        } else if (max == 1){
                          max = "A"
                        } else if (max == 2){
                          max = "B"
                        } else if (max == 3){
                          max = "C"
                        } else if (max == 4){
                          max = "D"
                        }
                      }
                      this.setState({classification: max})
                      this.props.parentCallback(max);
                    }
                  }
                />
          </View>
      );
    } else {
      display.push(
          <View key={1}>
                <QuestionPanels
                  isVisible={this.state.isSimpleVisible}
                  name={section.name}
                  Questions={appData["Questionaire"]["Anatomic"]["Simple"]}
                  pickerItemNames={appData["Questionaire"]["Anatomic"]["pickerSimple"]}
                  classification={this.state.classification}
                  parentCallback={(newClassification, position) => {
                      if (newClassification == 2){
                        this.setState({isComplexVisible: true});
                      } else {
                        this.setState({isComplexVisible: false});
                      }
                      this.setState({classification: newClassification})
                      this.props.parentCallback(newClassification);
                    }
                  }
                />
                <QuestionPanels
                  isVisible={this.state.isComplexVisible}
                  name={section.name}
                  Questions={appData["Questionaire"]["Anatomic"]["Complex"]}
                  pickerItemNames={appData["Questionaire"]["Anatomic"]["pickerComplex"]}
                  classification={this.state.classification}
                  parentCallback={(newClassification, position) => {
                      if (newClassification == 2){
                        this.setState({isSimpleVisible: true});
                      } else {
                        this.setState({isSimpleVisible: false});
                      }
                      this.setState({classification: newClassification})
                      this.props.parentCallback(newClassification);
                    }
                  }
                />
          </View>
      );
    }
    return (
      <View key={0}>
        <View style={styles.dropDownCardPanelHeader}>
          <Text style={styles.dropDownCardPanelHeaderText}>
            {headerDisplay}
          </Text>
        </View>
        {display}
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.Questionaire2}>
        <Accordion
            sections={this.state.Sections}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
        />
      </View>
    );
  }
}
