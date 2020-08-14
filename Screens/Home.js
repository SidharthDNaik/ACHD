/*
* Screens/Home -> Home Screen
*
* Description:
*   This Screen displays the desired UI for the homepage
*
* Parameters:
*   props.navigation: Tool from react navigation. Helps us navigate
*   from page to page. We use this for the onpress of our buttons
*
 */
import React, {useState} from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import GeneralButton from '../Components/Buttons/GeneralButton';
import styles from '../Styles/GeneralStyles';
import ScrollableModal from '../Components/Modals/ScrollableModal';
import Modal from 'react-native-modal';
import ButtonColumnGenerator from '../Components/Buttons/ButtonColumnGen';

const Home = (props) => {

  var modalText = ["Welcome to ACHD! * Optional short description *",
                 "Click Choose from Daignosis list to select a daignosis that"+
                  " applies to your patient.",
                 "Click Start New Diagnosis if none of the listed apply to"+
                  " your patient. This will direct you to a screen where you"+
                  " can classify your patient."];

  var buttonNames = ["Start New Diagnosis", "Choose from Diagnosis List"];

  var buttonOnpressRoutes = ["New Diagnosis", "Diagnosis List"]

  var buttonOnpress = []

  for (let i = 0; i < buttonOnpressRoutes.length; i++){

    buttonOnpress.push(() => props.navigation.navigate(buttonOnpressRoutes[i]))

  }

  var title = "ACHD"

  // This is used to turn off/on the Help button modal.
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Our Screen
  return (

    <LinearGradient colors={['#4D4A59', '#A0AEA0']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
      <ScrollView style={styles.genHomeView}>

        {/* The view for the main two Buttons */}
        <View style={styles.genInHomeView}>

            <Text style={styles.titleText}>
              {title} </Text>

          <View style={{flex: 9}}>

            <ButtonColumnGenerator
              names = {buttonNames}
              onPresses = {buttonOnpress}
              />

          </View>

        </View>

        {/* This is the View for the Help and Scroll Modal */}
        <View style={{right: 10, alignItems: 'flex-end'}}>

          <GeneralButton
            name="Help"
            onPress={toggleModal}
            />

            <Modal
              testID={'modal'}
              isVisible={isModalVisible}
              style={styles.modal}
              >
              <View style={styles.scrollableModal}>
                <ScrollView>
                  <ScrollableModal
                    modalText = {modalText}
                  />
                  <View style={styles.scrollableModalContent2}>
                    <GeneralButton name="Close"
                            onPress={toggleModal}/>
                  </View>
                </ScrollView>
              </View>
            </Modal>

        </View>

      </ScrollView>
    </LinearGradient>

  );
}

export default Home;
