import React, {useState} from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import GeneralButton from '../Buttons/GeneralButton';
import styles from '../Styles/GeneralStyles';
import ScrollableModal from '../Modals/ScrollableModal';
import Modal from 'react-native-modal';

const Home = (props) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.genHomeView}>
      <View style={styles.genInHomeView}>

          <Text style={{
            top: 25,
            fontSize: 50,
            fontWeight: 'bold',
            color: "black",
            flex: 2,
          }}> ACHD </Text>

          <View style={{flex: 2}}>
            <GeneralButton
              name="Start New Daignosis"
              onPress={() => props.navigation.navigate('New Daignosis')}
            />
          </View>

          <View style={{flex: 9}}>
            <GeneralButton
              name="Choose from Daignosis list"
              onPress={() => props.navigation.navigate('Daignosis List')}
            />

          </View>

      </View>
      <View style={{right: 10}}>
        <GeneralButton
          name="Help"
          onPress={toggleModal}
          />
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
                    Click Choose from Daignosis list to select a daignosis that applies to your patient.
                  </Text>
                </View>
                <View style={styles.scrollableModalContent1}>
                  <Text style={styles.scrollableModalText1}>
                    Click Start New Daignosis if none of the listed apply to
                    your patient. This will direct you to a screen where you
                    can classify your patient.
                  </Text>
                </View>
                <View style={styles.scrollableModalContent2}>
                  <GeneralButton name="Close"
                          onPress={toggleModal}/>
                </View>
              </ScrollView>
            </View>
          </Modal>
      </View>
    </View>

  );
}

export default Home;
