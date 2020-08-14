/*
* Component/Modal -> ScrollableModal
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

class ScrollableModel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    // This will be the list that represents the Views
    // we are outputting.
    var modalOutput = [];

    // Go through the length of number of text inputs
    // if i is odd generate view with odd style
    // else generate view with even style
    for (let i = 0; i < this.props.modalText.length; i++) {
      if (i % 2 == 0){
        modalOutput.push(
          <View key={i} style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
              {this.props.modalText[i]}
            </Text>
          </View>
        );
      } else {
        modalOutput.push(
          <View key={i} style={styles.scrollableModalContent2}>
            <Text style={styles.scrollableModalText1}>
              {this.props.modalText[i]}
            </Text>
          </View>
        );
      }
    }

    // Outputs our generated Views
    return (
      <View>
        {modalOutput}
      </View>
    );
  }
}

export default ScrollableModel;
