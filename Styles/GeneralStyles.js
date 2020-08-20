/*
Filename: GeneralStyles.js
Description: This file will be imported by our screens and buttons for
             general styling.
 */
 import React from 'react';
 import { Dimensions, StyleSheet } from 'react-native';

 var deviceHeight = Dimensions.get('window').height;
 var deviceWidth = Dimensions.get('window').width;
 var wordLength = 50;

export default StyleSheet.create({
  titleText: {
    top: 25,
    fontSize: 50,
    fontWeight: 'bold',
    color: "white",
    flex: 2,
  },
  genGradient: {
    height: deviceHeight,
    width: deviceWidth,
  },
  genHomeView: {
    backgroundColor: "rgba(0,0,0,0)",
    height: deviceHeight,
    width: deviceWidth,
  },
  genInHomeView: {
    backgroundColor: "rgba(0,0,0,0)",
    height: deviceHeight - 200,
    width: deviceWidth,
    alignItems:"center",
  },
  genButton: {
    height: "auto",
    width: "auto",
    borderRadius: 100,
    backgroundColor: "#757171",
    textAlign:"center",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#757171',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    color: 'black',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#faf2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diagnosisList1: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: "center",
  },
  diagnosisList2: {
    top: 50,
    height: deviceHeight-400,
    width: deviceWidth-20,
  },
  pickerStyle: {
    height: 50,
    width: deviceWidth-20,
  },
  diagnosisButtonTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white"
  },
  Questionaire1: {
    height: deviceHeight,
    width: deviceWidth,
    alignItems: "center",
    
  },
  Questionaire2: {
    top: 30,
    height: "auto",
    width: deviceWidth-20,
    backgroundColor: 'green'
  },
  QuestionaireHeaderText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    top: 10,
  },
  dropDownCardFrame: {
    height: "auto",
    width: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#757171',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
  },
  dropDownCardFrameText : {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  dropDownCardPanel: {
    backgroundColor: '#faf2f2',
    borderBottomWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor: 'black',
  },
  dropDownCardPanelText: {
    fontSize: 15,
    color: "black",
    marginLeft: 10
  },
  icon: {
    left: 30,
  }
});
