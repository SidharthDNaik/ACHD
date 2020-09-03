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

    display.push(<Card key={1}
                       styleView={styles.tableHeader}
                       styleText={styles.tableHeaderText}
                       textValue={props.rowName}
                  />);

    for (var i = 0; i < props.row.length; i++){
      display.push(<Card key={i+2}
                         styleView={styles.tableCard}
                         styleText={styles.tableCardText}
                         textValue={props.row[i]}
                    />)
    }

  return(
    <View style={{flexDirection: "column"}}>
      {display}
    </View>

  );

};


export default class CardTable extends Component {

  constructor(props){
    super(props);
  }

  render () {

    var display = [];

    for(var i in this.props.table){
      display.push(
        <Row key={i}
             row={this.props.table[i]}
             rowName={i}
        />
      );
    }

    return (
      <View style={{flexDirection: "row"}}>
        {display}
      </View>
    );
  }
};
