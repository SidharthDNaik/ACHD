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
    backgroundColor: "rgba(0,0,0,0)",
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
    backgroundColor: '#4D4A59',
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
    backgroundColor: '#A0AEA0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
