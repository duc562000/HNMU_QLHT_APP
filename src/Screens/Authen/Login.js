import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet, ImageBackground,ScrollView,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FORGOT_PASSWORD, TABNAVIGATOR,REGISTER, SURVEYSTEP1} from '../../routers/ScreenNames';
import R from '../../assets/R'
import InputForm from '../../components/Input/InputForm';
import InputComponent from '../../components/Input/InputComponent';
import Header from '../../components/Header/Header';
import { Controller,useForm } from 'react-hook-form';
import I18n from "../../helper/i18/i18n";
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ModalForgotPass from '../../components/Modal/ModalForgotPass';

function Login() {
  const navigate = useNavigation();
  const [pass,setPass] = useState("")
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      masinhvien: '',
      pass: '',
    },
  });
  const onSubmit = ({ masinhvien, pass }) => {
    if(masinhvien=='218401109' && pass =='562000'){
      navigate.navigate(SURVEYSTEP1);
      console.log({masinhvien,pass});
    } else {
      Alert.alert('Sai tên đăng nhập hoặc mật khẩu')
    }
    
    
  };

  return (
    <>
    <StatusBar barStyle='dark-content'/>
    <View
      style={{
        flex:1
        
        }}>
      
          <ImageBackground source={R.images.bgLogo} style={{flex:2/6,alignItems:'center'}}>
            <Image 
              source={require('../../assets/images/logo-dai-hoc-thu-do-ha-noi-removebg.png')} 
              style ={{
                height:170,
                width:170,
                margin:70
                      }}>
            </Image>
          </ImageBackground>
          <ImageBackground
                  borderRadius={35}
                  source={R.images.bgLogin}
                  style={{
                    flex:3/3.5,
                    paddingTop:10,
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    paddingHorizontal:20,
                    }}>
            <Text style={{paddingVertical:30,fontSize:14.5,fontWeight:'500',color:R.colors.colorBtnLogin}}>Hệ thống quản lý học tập dành cho sinh viên HNMU</Text>
            <View style={{alignItems: 'center',}}>
              <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                render={({ field: { onChange, onBlur, value, } }) => (
                  <InputForm
                        onSubmitEditing={onSubmit}
                        textColor={R.colors.black}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.masinhvien}
                        placeHolderColor={"#333"}
                        placeholder={"Mã sinh viên"}
                        widthInput={300}
                        name={"mã sinh viên"}
                        padding={50}
                        icUser={true}
                        keyboardType={'number-pad'}
                  />
                )}
                  name='masinhvien'
                  defaultValue=""
              />
              
              <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputForm
                        textColor={R.colors.black}
                        onBlur={onBlur}
                        onChangeText={(val)=>{
                          onChange(val)
                          // setPass(val)
                        }}
                        onSubmitEditing={onSubmit}
                        value={value}
                        error={errors.pass}
                        placeHolderColor={"#333"}
                        placeholder={"Mật khẩu"}
                        isPassword='true'
                        widthInput={300}
                        name={"mật khẩu"}
                        padding={50}
                        icPass={true}
                  />
                )}
                name="pass"
                defaultValue=""
              />
              <View style={styles.row}>
                  <View />
                  <ModalForgotPass/>
                </View>
              <View style={{margin:50}}>
                <Button
                  // noBackgroundImage='true'
                  widthBtn={300}
                  title={'Đăng nhập'}
                  onPress={handleSubmit(onSubmit)}
                  >
                </Button>
              </View>
              <View style={{flexDirection:'row',paddingHorizontal:10,paddingVertical:25}}>
                <Image 
                  source={require('../../assets/images/logo-dai-hoc-thu-do-ha-noi-removebg.png')}
                  style={{width:60,height:60}}
                />
                <View style={{paddingHorizontal:10,paddingVertical:10}}>
                    <Text style={{color:'#2c3092',fontSize:21,fontWeight:'bold'}}>Trường đại học Thủ Đô Hà Nội</Text>
                    <Text style={{color:'#bf9000',fontSize:18,fontWeight:'bold'}}>Ha Noi Metropolitan University</Text>
                </View>
              </View>
            </View>
            <View style={{flex:2,flexDirection:'row',marginBottom:30,justifyContent:'space-evenly'}}>
                <View >
                  <TouchableOpacity onPress={() => {Alert.alert('Website','https://hnmu.edu.vn/')}} style={{alignItems:'center'}}>
                    <AntDesign name="earth" size={24} color={R.colors.colorBtnLogin} />
                    <Text style={{color:R.colors.colorBtnLogin,paddingTop:10}}>Website</Text>
                  </TouchableOpacity>
                </View>
                <View >
                  <TouchableOpacity onPress={() => {Alert.alert('Email','daotao@hnmu.edu.vn')}} style={{alignItems:'center'}}>
                    <Entypo name="mail" size={24} color={R.colors.colorBtnLogin} />
                    <Text style={{color:R.colors.colorBtnLogin,paddingTop:10}}>Email</Text>
                  </TouchableOpacity>
                </View>

                <View >
                  <TouchableOpacity onPress={() => {Alert.alert('Liên hệ','(+84) 24.3833.0708')}} style={{alignItems:'center'}}>
                    <Entypo name="phone" size={24} color={R.colors.colorBtnLogin} />
                    <Text style={{color:R.colors.colorBtnLogin,paddingTop:10}}>Liên hệ</Text>
                  </TouchableOpacity>
                </View>

                <View >
                  <TouchableOpacity onPress={() => {Alert.alert('Địa chỉ','Cơ sở 1:98 phố Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội')}} style={{alignItems:'center'}}>
                    <Entypo name="map" size={24} color={R.colors.colorBtnLogin} />
                    <Text style={{color:R.colors.colorBtnLogin,paddingTop:10}}>Địa chỉ</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </ImageBackground>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  txtColor: {
    color:R.colors.white,
    fontSize:16,
  },
  txtSmall:{
    color:R.colors.colorBtnLogin,
    fontSize:15,
    maxWidth:200,
    
  },
  txtSmallColor:{
    color:R.colors.colorNameBottomMenu,
    fontSize:15,
    textDecorationLine:'underline',
    
  }
});

export default Login;
