import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Quiz from './Quiz';

function SurveyScreen(props) {
  const navigate = useNavigation();
  const item = props.route.params.item; 
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <Header
      title ='Khai báo y tế'
      isBack ='true'
    />
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
        }}>
      <Quiz
        item ={item}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

});

export default SurveyScreen;
