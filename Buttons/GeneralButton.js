import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../Styles/GeneralStyles'

const FirstScreen = (props) => {
  return (
    <TouchableOpacity
      style={styles.genButton}
      onPress={props.onPress}>
        <Text style={styles.buttonTextStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
}

export default FirstScreen;
