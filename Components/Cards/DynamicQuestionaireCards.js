import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../../Styles/GeneralStyles';
import GeneralButton from '../Buttons/GeneralButton';
import Accordion from 'react-native-collapsible/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import QuestionPanels from './QuestionairePanels'
import Constants from 'expo-constants';

export default class DynamicQuestionaireCards extends Component {

  constructor(props)  {
    super(props);
    this.state = {

      isCollapsed: true,

      Sections : [
        {
          name: props.name,
          classification: props.classification,
          arrow: true,
          Questions: props.Questions,
          pickerItemNames: props.pickerItemNames,
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
    return (
      <View style={styles.dropDownCardFrame}>
        <Text style={styles.dropDownCardFrameText}>
          {section.name} Classification:{"  "}
        </Text>
        <View style={styles.dropDownCardFrameText2}>
          <Text style={styles.dropDownCardFrameText}>
            {section.classification}
          </Text>
        </View>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={section.arrow ? "chevron-down" : "chevron-up"}/>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    section.arrow = !(section.arrow);
    var scrollHeight = (section.Questions.length > 2) ? 600 : 400;
    var headerDisplay = (section.name.localeCompare("Physiologic")) ? section.name + " Variables" : "Select Dominant Final Diagnosis";
    return (
      <View style={{height: scrollHeight}}>
        <ScrollView>
          <View style={styles.dropDownCardPanelHeader}>
            <Text style={styles.dropDownCardPanelHeaderText}>
              {headerDisplay}
            </Text>
          </View>
          <QuestionPanels
            Questions={section.Questions}
            pickerItemNames={section.pickerItemNames}
          />
        </ScrollView>
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
