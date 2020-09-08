import React, {useState, setState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Styles from './Style'

import GeneralButton from '../Buttons/GeneralButton'

const HeaderCard = (props) => {
  return(
    <View style={{padding: 10}}>
      <View style={Styles.card}>
        <Text style={Styles.cardText}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

const AnswerCard = (props) => {
  return(
    <View style={{flexDirection: "column", alignItems: "center"}}>

        <Line/>

      <View style={{padding: 10}}>
        <View style={Styles.card}>
          <View style={{paddingBottom: 10, flexDirection: "row-reverse"}}>
            <GeneralButton
                    buttonStyle={Styles.closeButtonStyle}
                    textStyle={Styles.closeButtonText}
                    name={"Restart"}
                    onPress={props.onPress}
                    />
          </View>

          <View style={Styles.answerHolder}>
            <View style={Styles.cardHeader}>
              <View style={{paddingBottom: 5, borderBottomWidth: 1, borderColor: "rgba(0,0,0,.2)"}}>
                <Text style={Styles.cardHeaderText}>
                  Suggestion
                </Text>
              </View>
            </View>

            <Text style={Styles.cardText}>
              {props.name}
            </Text>
          </View>
        </View>

      </View>

    </View>
  );
};

const QuestionCard = (props) => {
  var display = [];
  if (props.qCounter != 0){
    display.push(
      <View key={0}
            style={{paddingBottom: 10, flexDirection: "row-reverse"}}>
        <GeneralButton
                buttonStyle={Styles.closeButtonStyle}
                textStyle={Styles.closeButtonText}
                name={"Back"}
                onPress={props.onPress}
                />
      </View>
    );
  }
  return(
    <View style={{flexDirection: "column", alignItems: "center"}}>

      <Line/>

      <View style={{padding: 10}}>

        <View style={Styles.card}>

          {display}

          <View style={{padding: 10, borderWidth:1, borderColor: "rgba(0,0,0,.2)"}}>
            <Text style={Styles.cardText}>
              {props.name}
            </Text>
          </View>

        </View>

      </View>

      <View style={Styles.lineRow}>
        <View style={{alignItems: "center", paddingRight:30}}>
          <Line/>
          <TouchableCard
            name={props.q1}
            onPress={props.q1OnPress}
            />
        </View>

        <View style={{alignItems: "center", paddingLeft:10}}>
          <Line/>
          <TouchableCard
            name={props.q2}
            onPress={props.q2OnPress}/>
        </View>

      </View>
    </View>
  );
};

const Line = () => {
  return(
    <View style={{height:10, width:1, backgroundColor:"rgba(0,0,0,.2)"}}></View>
  );
}

const TouchableCard = (props) => {
  return(
    <View style={{padding: 10}}>
      <TouchableOpacity
        style={Styles.questionCard}
        onPress={props.onPress}
        >
        <Text style={Styles.cardText}>
          {props.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function QuestionTree(props){

  var header = props.header;
  var questions = props.questions;

  if (questions){

    const [qCounter, setQCounter] = useState(0);
    const incQCounter = (inc) => {
      if(qCounter < Object.keys(questions).length){
        setQCounter(qCounter+inc)
      }
    }
    const resetQCounter = () => {
      if(qCounter < Object.keys(questions).length){
        setQCounter(0)
      }
    }

    var display = [];

    var question = Object.keys(questions)[qCounter];
    if (typeof questions[question] == 'string' && questions[question].localeCompare("A") == 0){
      display.push(
        <AnswerCard key={0}
                    name={question}
                    onPress={()=>{
                      resetQCounter();
                    }}
        />
      );
    } else {
        var questionA = questions[question][0];
        var questionB = questions[question][1];

        display.push(
          <QuestionCard key={1}
                        name={question}
                        q1={questionA}
                        q1OnPress={()=>{
                          incQCounter(1)
                        }}
                        q2={questionB}
                        q2OnPress={()=>{
                          incQCounter(2)
                        }}
                        onPress={()=>{
                          incQCounter(-2)
                        }}
                        qCounter={qCounter}
          />
        );
    }

    return(
      <View style={{flexDirection:"column", alignItems: "center"}}>
        <HeaderCard name={header}/>
        {display}
      </View>
    );
  } else{
    return(
      <View style={{flexDirection:"column", alignItems: "center"}}>
        <Text style={{color: "white", fontSize: 15, fontWeight: "bold", paddingTop:10}}>
          {props.noData}
        </Text>
      </View>
    );
  }
}
