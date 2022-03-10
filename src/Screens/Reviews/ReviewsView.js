
import React, {Component} from 'react';
import {View, Text,StyleSheet, ImageBackground} from 'react-native';
import R from '../../assets/R';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonNext from '../../components/ButtonNext';
import {useNavigation} from '@react-navigation/native';
import HeaderTitleCenter from '../../components/Header/Header';
import { EVALUTE_TEACHING, EVALUTE_USER } from '../../routers/ScreenNames';


const data = [
  {
    id:1,
    fullname:'Nguyen Minh Duc'
  }
]


const ReviewView = props => {
  const navigate = useNavigation();
  return (
    
    <View style={{flex: 1}}>
      <HeaderTitleCenter
        title='Hòm thư đánh giá'
        isBack='true'
      />
      

        <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%'}}>
          
          <ButtonNext
            title={'Đánh giá chất lượng giảng dạy'}
            iconName='home-edit-outline'
            isColor = {R.colors.colorBtnLogin}
            onPress={() => navigate.navigate(EVALUTE_TEACHING)}
          />
          <ButtonNext
            title={'Tự đánh giá cá nhân'}
            iconName='account-edit-outline'
            isColor = {R.colors.colorBtnLogin}
            onPress={() => navigate.navigate(EVALUTE_USER)}
          />
        </ImageBackground>
    
    </View>
  );
};

const styles=StyleSheet.create({
  txtTitle : {
    fontSize:14,
    fontWeight:'600',
    color:R.colors.black,
    paddingVertical:15,
    paddingHorizontal:15
  },
})

export default ReviewView;
