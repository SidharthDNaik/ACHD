import React, { Component, useState, setState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default class QuestionairePanels extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: props.defaultAnswer
    };
  }
  render() {
    return(
      <DropDownPicker
        items={[
            {label: 'UK', value: 'uk'},
            {label: 'France', value: 'france'},
        ]}
        defaultValue={this.state.country}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => this.setState({answer: item.value })}
      />
    );
  }
}
