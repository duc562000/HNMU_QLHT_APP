import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import R from '../assets/R';

class ButtonRadio extends Component {
  constructor () {
    super()
    this.state = {
      types2: [{label: '(1)', value: 0}, {label: '(2)', value: 1}, {label: '(3)', value: 2},{label: '(4)', value: 2}],
      value2: 0,
    }
  }
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.component}>
          <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                  {this.props.content}
          </Text>
            <RadioForm
              formHorizontal={true}
              animation={true}
            >

              {this.state.types2.map((obj, i) => {
                var that = this;
                var is_selected = this.state.value2Index == i;
                return (
                  
                  
                  <View key={i} style={styles.radioButtonWrap}>
                    <RadioButton
                      isSelected={is_selected}
                      obj={obj}
                      index={i}
                      labelHorizontal={false}
                      buttonColor={'#2196f3'}
                      labelColor={R.colors.colorBtnLogin}
                      style={[i !== this.state.types2.length-1 && styles.radioStyle]}
                      onPress={(value, index) => {
                        this.setState({value2:value})
                        this.setState({value2Index: index});
                      }}
                    />
                  </View>
                
                )
              })}
            </RadioForm>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  component: {
    alignItems: 'center',
  },
  radioStyle: {
    paddingRight: 30,
  },
  radioButtonWrap: {
    marginRight: 5,
    paddingVertical:10,
    paddingBottom:20,

  },
});

export default ButtonRadio