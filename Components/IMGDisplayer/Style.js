import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  panel: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    margin: 5,
  },
  panelText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  panelHolder: {
    padding: 10,
    flexDirection: "column",
    alignItems: "center"
  },
  imgOneHolder: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent: "center"
  },
  imgTwoHolder: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent: "center"
  },
  closeButton :{
    height: "auto",
    width: "auto",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  closeButtonText :{
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  closeButtonStyle :{
    height: "auto",
    width: "auto",
    backgroundColor: "#757171",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
