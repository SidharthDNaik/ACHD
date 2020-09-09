import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  treeContainer: {
    width: deviceWidth,
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    width:370,
    padding: 15,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "rgba(0,0,0,.2)",
    textAlignVertical: "center"
  },
  cardHeader: {
    padding: 10,
    alignItems: "center",
  },
  cardHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  questionCard: {
    width:156,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    alignItems: "center"
  },
  answerHolderA: {
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth:1,
    borderColor: "rgba(0,0,0,.2)",
    backgroundColor: "#7DAB88"
  },
  answerHolderB: {
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth:1,
    borderColor: "rgba(0,0,0,.2)",
    backgroundColor: "#ABAB7D"
  },
  answerHolderC: {
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth:1,
    borderColor: "rgba(0,0,0,.2)",
    backgroundColor: "#AB927D"
  },
  answerHolderD: {
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth:1,
    borderColor: "rgba(0,0,0,.2)",
    backgroundColor: "#9B7DAB"
  },
  lineRow: {
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row",
  },
  closeButtonStyle :{
    height: "auto",
    width: "auto",
    backgroundColor: "#faf2f2",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  closeButtonText : {
    fontSize: 12,
    fontWeight: "bold",
    color: "#757171"
  },
});
