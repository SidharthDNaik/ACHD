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

  var modalText = appData["Home"]["modalText"];

  var buttonNamesCol = appData["Home"]["buttonNamesCol"];

  var buttonNamesGen = appData["Home"]["buttonNamesGen"];

  var buttonOnpressRoutes = appData["Home"]["buttonOnpressRoutes"];

  var buttonOnpress = []

  for (let i = 0; i < buttonOnpressRoutes.length; i++){

    buttonOnpress.push(() => props.navigation.navigate(buttonOnpressRoutes[i]))

  }

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
                  <ScrollableModalView
                    modalText = {modalText}
                  />
                  <View style={styles.scrollableModalContent2}>
                    <GeneralButton
                            buttonStyle={styles.genButton}
                            textStyle={styles.buttonTextStyle}
                            name={buttonNamesGen[buttonNamesGen.length-1]}
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
