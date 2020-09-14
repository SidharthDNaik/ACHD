import React, { Component }from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, View, ScrollView } from 'react-native';
import styles from '../../Styles/GeneralStyles';
import appData from '../../DataSheet/appData'

const Card = (props) => {
  return(
    <View style={props.styleView}>
      <Text style={props.styleText}>
        {props.textValue}
      </Text>
    </View>
  );
};

const Row = (props) => {

  var display = [];

  for (var i = 0; i < props.row.length; i++){
    display.push( <View key={i}>
                    <Card  key={i}
                          styleView={props.style}
                          styleText={props.textStyle}
                          textValue={props.row[i]}
                    />
                  </View>
              );
  }

  return(
    <View style={{flexDirection: "row"}}>
      {display}
    </View>

  );

};


export default class CardTable extends Component {

  constructor(props){
    super(props);
  }

  render () {

    var keyQues = Object.keys(this.props.tableQuestions)[0];
    var keyAns = Object.keys(this.props.tableAnswers)[0];

    var table = {};

    table[keyQues] = this.props.tableQuestions[keyQues];
    table[keyAns] = this.props.tableAnswers[keyAns];

    var newTable = [[]]
    var keys = Object.keys(table);
    for(var i in table[keys[0]]){
      newTable.push([]);
    }

    for(var i in table){
      newTable[0].push(i);
      for (var j = 0; j < table[i].length; j++){
        newTable[j+1].push(table[i][j])
      }
    }

    var display = [];
    var style = styles.tableHeader;
    var textStyle = styles.tableHeaderText;

    for(var i = 0; i < newTable.length; i++){
      if (i != 0) {
        style = styles.tableCard
        textStyle = styles.tableCardText
      }
      display.push(
        <View key={i}>
          <Row key={i}
               row={newTable[i]}
               style={style}
               textStyle={textStyle}
          />
        </View>
      );
    }

    return (
      <View style={{flexDirection: "column"}}>
        {display}
      </View>
    );
  }
};
