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
import ScrollableModalView from '../Components/Modals/ScrollableModalView';
import Modal from 'react-native-modal';
import ButtonColumnGenerator from '../Components/Buttons/ButtonColumnGen';
import appData from '../DataSheet/appData.json';

const Home = (props) => {

  var title = appData["Home"]["title"]

  var title2 = appData["Home"]["title2"]

  var modalText = appData["Home"]["modalText"];

  var buttonNamesCol = appData["Home"]["buttonNamesCol"];

  var buttonNamesGen = appData["Home"]["buttonNamesGen"];

  var buttonOnpressRoutes = appData["Home"]["buttonOnpressRoutes"];

  var buttonOnpress = []

  for (let i = 0; i < buttonOnpressRoutes.length ; i++){

    if (i == 0) {
      buttonOnpress.push(() => props.navigation.push('Questionaire', {
        itemId: i,
        diagnosis: "new diagnosis"
      }));
    } else {
      buttonOnpress.push(() => props.navigation.navigate(buttonOnpressRoutes[i]));
    }
  }

  // This is used to turn off/on the Help button modal.
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Our Screen
  return (

    <LinearGradient colors={['#757171', '#faf2f2']}
                    style={styles.genGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
      <ScrollView style={styles.genHomeView}>
        {/* The view for the main two Buttons */}
        <View style={styles.genInHomeView}>

            <Text style={styles.titleText}>
              {title} </Text>
            <Text style={styles.titleText2}>
                {title2} </Text>

          <View style={{flex: 9}}>

            <ButtonColumnGenerator
              names = {buttonNamesCol}
              onPresses = {buttonOnpress}
              />

          </View>

        </View>

        {/* This is the View for the Help and Scroll Modal */}
        <View style={{right: 10, alignItems: 'flex-end'}}>

          <GeneralButton
            buttonStyle={styles.genButton}
            textStyle={styles.buttonTextStyle}
            name={buttonNamesGen[buttonNamesGen.length-2]}
            onPress={toggleModal}
            />

            <Modal
              testID={'modal'}
              isVisible={isModalVisible}
              style={styles.modal}
              >
              <View style={styles.scrollableModal}>
                <ScrollView>
                  <View style={styles.closeButton}>
                    <GeneralButton
                            buttonStyle={styles.closeButtonStyle}
                            textStyle={styles.closeButtonText}
                            name={buttonNamesGen[buttonNamesGen.length-1]}
                            onPress={toggleModal}/>
                  </View>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalText}>
                      Welcome to ACHD!
                    </Text>
                  </View>
                  <ScrollableModalView
                    modalText = {modalText}
                  />
                </ScrollView>
              </View>
            </Modal>

        </View>

      </ScrollView>
    </LinearGradient>

  );
}

export default Home;
