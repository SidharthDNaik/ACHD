/*
* Component/Button -> GeneralButton
*
* Description:
*   This Component is a GeneralButton we will use generically
*   throughout the application
*
* Parameters:
*   props.name: Gives name of button
*   props.onPress: Gives onPress function of button
*
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../../Styles/GeneralStyles'
import {LinearGradient} from 'expo-linear-gradient';

class GeneralButton extends Component {

  constructor(props){
    super(props);
  }

  render () {

    // Generates a button with specific name and onpress.
    return (
        <TouchableOpacity
          style={this.props.buttonStyle}
          onPress={this.props.onPress}>
            <Text style={this.props.textStyle}>{this.props.name}</Text>
        </TouchableOpacity>
    );
  }
}

export default GeneralButton;
