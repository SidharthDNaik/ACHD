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
  var holder = Styles.card;
  if (props.value.localeCompare("A") == 0){
    holder = Styles.answerHolderA;
  } else if (props.value.localeCompare("B") == 0){
    holder = Styles.answerHolderB;
  } else if (props.value.localeCompare("C") == 0){
    holder = Styles.answerHolderC;
  } else if (props.value.localeCompare("D") == 0){
    holder = Styles.answerHolderD;
  }
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

          <View style={holder}>
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
  if (props.prevQ.localeCompare("") != 0){
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
        <View style={{alignItems: "center", paddingRight:10}}>
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

    var questionsKeys = Object.keys(questions);
    const [q, setQ] = useState(questionsKeys[0]);
    const changeQ = (question) => {
      setQ(question);
    }
    const resetQ = () => {
      setQ(questionsKeys[0])
    }

    var display = [];

    if (typeof questions[q] == 'string'){
      display.push(
        <AnswerCard key={0}
                    name={q}
                    onPress={()=>{
                      resetQ();
                    }}
                    value={questions[q]}
        />
      );
    } else {
        var questionA = Object.keys(questions[q])[0];
        var questionB = Object.keys(questions[q])[1];
        var prevQ = questions[q]["Back"];

        display.push(
          <QuestionCard key={1}
                        name={q}
                        q1={questionA}
                        q1OnPress={()=>{
                          changeQ(questions[q][questionA]);
                        }}
                        q2={questionB}
                        q2OnPress={()=>{
                          changeQ(questions[q][questionB]);
                        }}
                        onPress={()=>{
                          changeQ(prevQ);
                        }}
                        prevQ={prevQ}
          />
        );
    }

    return(
      <View style={Styles.treeContainer}>
        <HeaderCard name={header}/>
        {display}
      </View>
    );
  } else{
    return(
      <View style={Styles.treeContainer}>
        <Text style={{color: "white", fontSize: 15, fontWeight: "bold", paddingTop:10}}>
          {props.noData}
        </Text>
      </View>
    );
  }
}
