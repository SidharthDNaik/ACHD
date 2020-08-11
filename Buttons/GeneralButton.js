import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Styles/GeneralStyles'

const FirstScreen = (props) => {
  return (
    <View style={styles.genButton}>
        <Text style={styles.buttonTextStyle}>{props.name}</Text>
    </View>
  );
}

export default FirstScreen;
