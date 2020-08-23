import React, { Component } from 'react';
import {View} from 'react-native'
import {Picker} from '@react-native-community/picker';
import styles from '../../Styles/GeneralStyles';
import GeneralButton from '../Buttons/GeneralButton'

export default class PickerMod extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      value: props.defaultVal,
    };
  }


  render() {

    var showButton = () => {
        if (this.props.showButton) {
            return (
              <View style={{alignItems: 'center', top: 200}}>
                <GeneralButton
                buttonStyle={styles.genButton}
                textStyle={styles.diagnosisButtonTextStyle}
                name={buttonName}
                onPress={() => this.props.navigation.push('Questionaire', {
                  itemId: 10,
                  diagnosis: this.state.value
                })}/>
              </View>
            );
        } else {
            return null;
        }
    }

    var pickerItemNames = this.props.pickerItemNames;

    var buttonName = "Choose " + this.state.value;

    var pickerItemList = [];

    for(let i = 0; i < pickerItemNames.length ; i++){
      pickerItemList.push(
        <Picker.Item key={i} label={pickerItemNames[i]} value={pickerItemNames[i]}/>
      );
    }

    return(
      <View>
        <Picker
          selectedValue={this.state.value}
          style={this.props.pickerStyle}
          onValueChange={(itemValue) =>
            this.setState({value: itemValue})}
          >
          {pickerItemList}
        </Picker>
        {showButton()}
      </View>
    );
  }
}
