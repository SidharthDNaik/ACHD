/*
* Component/Button -> ButtonColumnGenerator
*
* Description:
*   This component will generate a series of views based on
*   user input for our ScrollableModal.
*
* Parameters:
*   props.modalText: Gives us a list of text to display in the views.
*                    The program will also generate the same number
*                    of views as text given in the modalText array
*
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../Styles/GeneralStyles';
import GeneralButton from './GeneralButton'

class ButtonColumnGenerator extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var buttonList = [];

    for(let i = 0; i < this.props.names.length ; i++){
      buttonList.push(
        <View key={i} style={{alignItems: 'center', marginTop: 5,
                              marginBottom: 5}}>
          <GeneralButton
            buttonStyle={styles.genButton}
            textStyle={styles.buttonTextStyle}
            name={this.props.names[i]}
            onPress={this.props.onPresses[i]}
          />
        </View>
      );
    }

    return (
      <View style={{flexDirection: 'column'}}>
        {buttonList}
      </View>
    );
  }
}

export default ButtonColumnGenerator;
