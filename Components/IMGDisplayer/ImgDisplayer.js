import React, {useState, setState} from 'react';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import styles from './Style'
import GeneralButton from '../Buttons/GeneralButton'
import Modal from 'react-native-modal';
import appData from '../../DataSheet/appData'

function findImage(name){
  switch(name){
    case "Reccomendations for TOF":
      return require("../../DataSheet/Images/1.png");
      break;
    case "Reccomendations for Valvular Pulmonary Stenosis":
      return require("../../DataSheet/Images/3.png");
      break;
    case "Recommendations for Branch and Peripheral PS":
      return require("../../DataSheet/Images/5.png");
      break;
    case "Recommendations for Ebstein Anomaly":
      return require("../../DataSheet/Images/7.png");
      break;
    case "Recommendations for Right Ventricle-to-PA conduit":
      return require("../../DataSheet/Images/9.png");
      break;
    case "Recommendations for d-TGA With Arterial Switch":
      return require("../../DataSheet/Images/11.png");
      break;
    case "Recommendations for Fontan Palliation of Single Ventricle Physiology":
      return require("../../DataSheet/Images/13.png");
      break;
    case "Recommendations for Fontan Palliation of Single Ventricle Physiology (Cont. Extended)":
      return require("../../DataSheet/Images/15.png");
      break;
    case "Recommendations for Atrial Septal Defect":
      return require("../../DataSheet/Images/17.png");
      break;
    case "Recommendations for Atrioventricular Septal Defect":
      return require("../../DataSheet/Images/19.png");
      break;
    case "Recommendations for Patent Ductus Arteriosus":
      return require("../../DataSheet/Images/21.png");
      break;
    case "Recommendations for Supravalvular Aortic Stenosis":
      return require("../../DataSheet/Images/23.png");
      break;
    case "Recommendations for Coarctation of the Aorta (Continued)":
      return require("../../DataSheet/Images/25.png");
      break;
    case "Recommendations for Congenital Valvular Aortic Stenosis (Continued)":
      return require("../../DataSheet/Images/27.png");
      break;
    case "Recomendations for Severe PAH (Continued)":
      return require("../../DataSheet/Images/29.png");
      break;
    case "Recommendations for Eisenmenger Syndrome (Continued)":
      return require("../../DataSheet/Images/31.png");
      break;
    case "Recommendations for Anomalous Pulmonary Venous Connections":
      return require("../../DataSheet/Images/33.png");
      break;
    case "Reccomendations for TOF (Continued)":
      return require("../../DataSheet/Images/2.png");
      break;
    case "Reccomendations for Isolated PR After Repair of Pulmonary Stenosis":
      return require("../../DataSheet/Images/4.png");
      break;
    case "Recommendations for Double-Chambered Right Ventricle":
      return require("../../DataSheet/Images/6.png");
      break;
    case "Recommendations for Ebstein Anomaly (Continued)":
      return require("../../DataSheet/Images/8.png");
      break;
    case "Recommendations for d-TGA with Artial Switch":
      return require("../../DataSheet/Images/10.png");
      break;
    case "Recommendations for Congenitally Corrected Transposition of the Great Arteries":
      return require("../../DataSheet/Images/12.png");
      break;
    case "Recommendations for Fontan Palliation of Single Ventricle Physiology (Continued)":
      return require("../../DataSheet/Images/14.png");
      break;
    case "Recommendations for Ventricular Septal Defect":
      return require("../../DataSheet/Images/16.png");
      break;
    case "Recommendations for Atrial Septal Defect (Continued)":
      return require("../../DataSheet/Images/18.png");
      break;
    case "Recommendations for Atrioventricular Septal Defect (Continued)":
      return require("../../DataSheet/Images/20.png");
      break;
    case "Recommendations for Subaortic Stenosis":
      return require("../../DataSheet/Images/22.png");
      break;
    case "Recommendations for Coartation of the Aorta":
      return require("../../DataSheet/Images/24.png");
      break;
    case "Recommendations for Congenital Valvular Aortic Stenosis":
      return require("../../DataSheet/Images/26.png");
      break;
    case "Recommendations for Severe PAH":
      return require("../../DataSheet/Images/28.png");
      break;
    case "Recommendations for Eisenmenger Syndrome":
      return require("../../DataSheet/Images/30.png");
      break;
    case "Recommendations for Anomalous Pulmonary Venous Connections (Continued)":
      return require("../../DataSheet/Images/32.png");
      break;
    default:
      return require("../../DataSheet/Images/error.png")
      break;
  }
}

const Panel = (props) => {
  return (
    <TouchableOpacity style={styles.panel} onPress={props.onPress}>
      <Text style={styles.panelText}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

export default function ImgDisplayer(props){

  const[imgOne, setImgOne] = useState(false);

  const toggleImgOne = () => {
    setImgOne(!imgOne)
  }

  const[imgTwo, setImgTwo] = useState(false);

  const toggleImgTwo = () => {
    setImgTwo(!imgTwo)
  }

  const[imgThree, setImgThree] = useState(false);

  const toggleImgThree = () => {
    setImgThree(!imgThree)
  }

  const[imgFour, setImgFour] = useState(false);

  const toggleImgFour = () => {
    setImgFour(!imgFour)
  }

  var images = [];

  for(var i = 0; i < props.panelNames.length; i++){
    images.push(findImage(props.panelNames[i]));
  }

  var display = [];

  if(props.panelNames[0].localeCompare("") == 0){
    display.push(<View  key={-1}
                        style={{paddingTop:10}}>
                  <Text style={styles.panelText}>
                    {appData["FinalRecommendation"]["noData2"]}
                  </Text>
                </View>)
  } else {
      display.push(
        <View key={0}>
          <Panel
            key={props.panelNames[0]}
            name={props.panelNames[0]}
            onPress={
              toggleImgOne
            }
          />
          <Modal
            style={styles.modal}
            isVisible={imgOne}
            >
              <View style={styles.closeButton}>
                <GeneralButton
                        buttonStyle={styles.closeButtonStyle}
                        textStyle={styles.closeButtonText}
                        name={"Close"}
                        onPress={toggleImgOne}/>
              </View>
              <View style={styles.imgHolder}>
                  <Image
                    style={{height: "100%", width: "100%"}}
                    resizeMode="contain"
                    source={images[0]}
                  />
              </View>
          </Modal>
        </View>
      );
    }
    if(props.panelNames[1]){

      display.push(
        <View key={1}>
          <Panel
            key={props.panelNames[1]}
            name={props.panelNames[1]}
            onPress={
              toggleImgTwo
            }
          />
          <Modal
            style={styles.modal}
            isVisible={imgTwo}
            >
              <View style={styles.closeButton}>
                <GeneralButton
                        buttonStyle={styles.closeButtonStyle}
                        textStyle={styles.closeButtonText}
                        name={"Close"}
                        onPress={toggleImgTwo}/>
              </View>
                <Image
                  style={{height: "100%", width: "100%"}}
                  resizeMode="contain"
                  source={images[1]}
                />
          </Modal>
        </View>

      );
    }

    if(props.panelNames[2]){

      display.push(
        <View key={2}>
          <Panel
            key={props.panelNames[2]}
            name={props.panelNames[2]}
            onPress={
              toggleImgThree
            }
          />
          <Modal
            style={styles.modal}
            isVisible={imgThree}
            >

              <View style={styles.closeButton}>
                <GeneralButton
                        buttonStyle={styles.closeButtonStyle}
                        textStyle={styles.closeButtonText}
                        name={"Close"}
                        onPress={toggleImgThree}/>
              </View>
                <Image
                  style={{height: "100%", width: "100%"}}
                  resizeMode="contain"
                  source={images[2]}
                />
          </Modal>
        </View>

      );
    }

    if(props.panelNames[3]){

      display.push(
        <View key={3}>
          <Panel
            key={props.panelNames[3]}
            name={props.panelNames[3]}
            onPress={
              toggleImgFour
            }
          />
          <Modal
            style={styles.modal}
            isVisible={imgFour}
            >
              <View style={styles.closeButton}>
                <GeneralButton
                        buttonStyle={styles.closeButtonStyle}
                        textStyle={styles.closeButtonText}
                        name={"Close"}
                        onPress={toggleImgFour}/>
              </View>
                <Image
                  style={{height: "100%", width: "100%"}}
                  resizeMode="contain"
                  source={images[3]}
                />
          </Modal>
        </View>

      );
    }

  return(
    <View style={styles.panelHolder}>
      {display}
    </View>
  );
}
