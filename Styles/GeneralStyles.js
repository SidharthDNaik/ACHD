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
  genFirstView: {
    backgroundColor: "#03a5fc",
    height: deviceHeight,
    width: deviceWidth,
    alignItems:"flex-end",
  },
  genInFirstView: {
    backgroundColor: "#03a5fc",
    height: deviceHeight - 100,
    width: deviceWidth,
    alignItems:"center",
  },
  genButton: {
    height: 75,
    width: "fit-content",
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
  }

});
