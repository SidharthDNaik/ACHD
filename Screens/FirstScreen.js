import React from 'react';
import { Text, View } from 'react-native';
import GeneralButton from '../Buttons/GeneralButton'
import styles from '../Styles/GeneralStyles'

const FirstScreen = (props) => {
  return (
    <View style={styles.genFirstView}>
      <View style={styles.genInFirstView}>

          <Text style={{
            top: 100,
            fontSize: 50,
            fontWeight: 'bold',
            color: "black",
            flex: 4,
          }}> ACHD </Text>

          <View style={{flex: 2}}>
            <GeneralButton name="Start New Daignosis"/>
          </View>

          <View style={{flex: 9}}>
            <GeneralButton name="Choose from Daignosis list"/>
          </View>

      </View>
      <View style={{right: 10}}>
        <GeneralButton name="Help"/>
      </View>
    </View>

  );
}

export default FirstScreen;
