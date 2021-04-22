import React, { Component } from 'react';
import {View, Picker} from 'react-native'
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
                onPress={() => {
                  if (this.state.value != "Anomalous Origin of the Coronary"){
                    this.props.navigation.push('Questionaire', {
                      itemId: 10,
                      diagnosis: this.state.value
                    })
                  } else {
                    this.props.navigation.push('Final Recommendation', {
                      itemId: 10,
                      diagnosis: this.state.value
                    })
                  }
                }
              }/>
              </View>
            );
        } else {
            return null;
        }
    }

    var pickerItemNames = this.props.pickerItemNames;

    var buttonName = "Choose " + this.state.value;

    var pickerItemList = [];

    var j = 0;
    for(var i in pickerItemNames){
      pickerItemList.push(
        <Picker.Item key={j} label={i} value={i}/>
      );
      j+=1;
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
