import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from '../../Styles/GeneralStyles';
import GeneralButton from '../Buttons/GeneralButton';
import Accordion from 'react-native-collapsible/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import QuestionPanels from './QuestionairePanels'


export default class DynamicQuestionaireCards extends Component {

  constructor(props)  {
    super(props);
    this.state = {

      isCollapsed: true,

      Sections : [
        {
          name: props.name,
          classification: props.classification,
          arrow: true
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
          {section.name}:{"  "}
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
    return (
      <QuestionPanels/>
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
