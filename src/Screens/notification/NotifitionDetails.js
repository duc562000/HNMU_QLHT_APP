import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet,FlatList, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NEWS_READ_SCREEN, TABNAVIGATOR} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { TextInput } from 'react-native-gesture-handler';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import HeaderTitleCenter from '../../components/Header/Header';



function NotificationDetails({route}) {
    
  const navigate = useNavigation();
  const {title,content,image,datetime} = route.params.item
  // const {data} = props
//   const renderArticle = ({ item }) => <Article item={item} />;
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View style={{flex: 1}}>
      <HeaderTitleCenter
        isBack='true'
        title={title}
      />
      <ImageBackground source={R.images.bgBody} style={{flex:1,width:'100%',height:'100%'}}>
        <Image source={{uri : image}} style={{width:'100%',height:250}}/>
        <View style={{paddingHorizontal:10,paddingVertical:20}}>
          <Text style={styles.txtDatetime}>{datetime}</Text>
          <Text style={styles.txtTitle} >{title}</Text>
        </View>
        <Text style={styles.txtContent} >{content}</Text>
      </ImageBackground>
      
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
  txtTitle :{
    color:R.colors.black,
    fontSize:20,
    fontWeight:'500',
    
  },
  txtContent : {
    fontSize:17,
    color:R.colors.black,
    paddingHorizontal:10
  },
  txtDatetime: {
    fontSize:13,
    color:R.colors.blacklight,
    opacity:0.5,
    paddingVertical:5,
    fontWeight:'400'
  }
});

export default NotificationDetails;
