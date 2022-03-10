import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SURVEYSCREEN, TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Quiz from './Quiz';
import Button from '../../components/Button';
import SurveyScreen from './SurveyScreen';
import HeaderTitleCenter from '../../components/Header/Header';

function SurveyStep1() {
  const navigate = useNavigation();

  return (
    <>
    <StatusBar barStyle='light-content'/>
    <Header
      title ='XIN CHÀO !'
      isBack ='true'
    />
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:R.colors.white,
        marginBottom:450
        }}>
            <Text 
                style={{
                    fontSize:18,
                    fontWeight:'bold',
                    padding:50,
                    textAlign:'center',
                    color:R.colors.colorBtnLogin,
                }}
            >Vui lòng khai báo y tế trước khi chuyển đến màn hình trang chủ
            </Text>
            <Button
                title='Khai báo ngay'
                onPress={() => navigate.navigate(SURVEYSCREEN)}
            />
            <TouchableOpacity
                onPress={() => navigate.navigate(TABNAVIGATOR)}
            >
                <Text
                    style={{
                        fontSize:16,
                        color:R.colors.colorNameBottomMenu,
                        margin:30
                    }}
                >Bỏ qua
                </Text>
            </TouchableOpacity>
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

export default SurveyStep1;
