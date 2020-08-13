import React, {useState} from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../Styles/GeneralStyles';
import GeneralButton from '../Buttons/GeneralButton';

const ScrollableModel = (props) => {

  var isModalVisible = props.isModalVisible;

  const toggleModal = () => {
    isModalVisible = false;
  };

  return (
    <Modal
      testID={'modal'}
      isVisible={isModalVisible}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
        <ScrollView>
          <View style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
              Welcome to ACHD! * Optional short description *
            </Text>
          </View>
          <View style={styles.scrollableModalContent2}>
            <Text style={styles.scrollableModalText1}>
              Click Choose from Daignosis list to select a daignosis that
              applies to your patient.
            </Text>
          </View>
          <View style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
              Click Start New Daignosis if none of the listed apply to your
              patient. This will direct you to a screen where you can classify
              your patient.
            </Text>
          </View>
          <View style={styles.scrollableModalContent2}>
            <GeneralButton name="Close"
                    onPress={() => this.closeModal()}/>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default ScrollableModel;
