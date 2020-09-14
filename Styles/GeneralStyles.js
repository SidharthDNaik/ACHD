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
    top: 15,
    flex:1.2,
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
  },
  titleText2: {
    flex:1,
    fontSize: 22,
    fontWeight: 'bold',
    color: "white",
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
  closeButton :{
    height: "auto",
    width: "auto",
    alignItems: "flex-end",
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#faf2f2"
  },
  closeButtonText :{
    fontSize: 16,
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
  modalHeader :{
    height: "auto",
    width: "auto",
    backgroundColor: '#faf2f2',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    alignItems: "center"
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: "auto",
    width: "auto",
    backgroundColor: '#faf2f2',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
  },
  modalText: {
    fontSize: 20,
    color: 'black',
  },
  scrollableModalContent2: {
    height: "auto",
    width: "auto",
    backgroundColor: '#faf2f2',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
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
    flexDirection: "column",
  },
  Questionaire2: {
    top: 30,
    height: "auto",
    width: deviceWidth,
    paddingBottom: 20,
  },
  Questionaire3: {
    paddingTop: 10,
    alignItems: "center"
  },
  Questionaire4: {
    paddingTop: 40,
    alignItems: "center"
  },

  QuestionaireHeaderText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    top: 10,
  },
  dropDownCardFrame: {
    height: "auto",
    width: deviceWidth,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: '#757171',
    borderColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth:1,
  },
  dropDownCardFrameText : {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },dropDownCardFrameText1 : {
    backgroundColor: "#bf8a86",
    height: "auto",
    width: "auto",
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
  },
  dropDownCardFrameText2 : {
    backgroundColor: "#7DAB88",
    height: "auto",
    width: "auto",
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
  },
  dropDownCardFrameText3 : {
    backgroundColor: "#ABAB7D",
    height: "auto",
    width: "auto",
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
  },
  dropDownCardFrameText4 : {
    backgroundColor: "#AB927D",
    height: "auto",
    width: "auto",
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
  },
  dropDownCardFrameText5 : {
    backgroundColor: "#9B7DAB",
    height: "auto",
    width: "auto",
    paddingRight: 5,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth: 1,
  },
  dropDownCardPanel: {
    height: 125,
    flexDirection: "row",
    backgroundColor: '#faf2f2',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  dropDownCardPanel2: {
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#faf2f2',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  explainationText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  dropDownCardPanelHeader: {
    height: "auto",
    width: "auto",
    alignItems: "center",
    backgroundColor: "#a6a6a6",
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  dropDownCardPanelHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  dropDownCardPanelText: {
    fontSize: 15,
    color: "black",
    marginLeft: 10
  },
  icon: {
    left: 20,
  },
  QuestionPanel: {
    height: "100%",
    width: "60%",
    borderRightWidth: 1,
    borderColor: 'black',
    left: 3,
    marginRight: 5,
    alignItems: "center",
    justifyContent:'center'
  },
  QuestionText: {
    fontSize: 20,
  },
  AnswerPanel: {
    height: "100%",
    width: "40%",
    right: 3,
    alignItems: "center",
    justifyContent:'center',
    flexDirection: "row",
  },
  answerButtonNotChosen: {
    flex: 1,
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "black",
    backgroundColor: "#bf8a86",
  },
  answerButtonChosen: {
    flex: 1,
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "black",
    backgroundColor: "#8cbf86",
  },
  pickerAnswerModal: {
    height: 300,
    backgroundColor: '#faf2f2',
  },
  answerButtonText: {
    fontSize: 20,
    marginLeft: 5,
  },
  finalButton: {
    alignItems: "center",
    backgroundColor: "#757171",
    borderWidth: 1,
    borderRadius: 10,
  },
  finalButtonText: {
    padding: 10,
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  cardHolder: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
    top: 10
  },
  finalRecCard0: {
    width: deviceWidth,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#757171",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  finalRecCard: {
    width: deviceWidth,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#757171",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  tableHeader: {
    flex:1,
    width: 180,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#757171",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 10,
  },
  tableHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  tableCard: {
    flex:1,
    width: 180,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#faf2f2",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 10,
  },
  tableCardText: {
    fontSize: deviceWidth/28,
    textAlign: "center"
  },
  returnHomeText: {
    padding: 10,
    fontSize: 23,
    color: "white",
    fontWeight: "bold"
  },
  promptNewDiag: {
    top: 40,
    height: "auto",
    width: "auto",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#757171",
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10
  },
  promptNewDiagText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  }
});
