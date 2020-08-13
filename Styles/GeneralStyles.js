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
  genHomeView: {
    backgroundColor: "#ACCFDB",
    height: deviceHeight,
    width: deviceWidth,
    alignItems:"flex-end"
  },
  genInHomeView: {
    backgroundColor: "#ACCFDB",
    height: deviceHeight - 200,
    width: deviceWidth,
    alignItems:"center",
  },
  genButton: {
    height: 75,
    width: "auto",
    borderRadius: 100,
    backgroundColor: "white",
    textAlign:"center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonTextStyle: {
    top: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: "black"
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
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
