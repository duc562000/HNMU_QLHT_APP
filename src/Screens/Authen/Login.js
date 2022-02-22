import React, { Component, useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {
  checkFormatArray,
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
} from "../../Config/Functions";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";


import {
  REGISTER,
  TABNAVIGATOR,
  FORGOTPASSWORD,
} from "../../routers/ScreenNames";
import I18n from "../../helper/i18/i18n";
import { showAlert, TYPE } from "../../components/DropdownAlert";
import { loginApi } from "../../apis/Functions/users";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { saveUserToRedux } from "../../actions/users";
import { connect } from "react-redux";
import KEY from "../../assets/AsynStorage";
// import AsyncStorage from "@react-native-community/async-storage";
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/Input/InputForm";
import AppText from "../../components/AppText";
import Button from "../../components/Button";
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
// import Parse from 'parse/react-native';
import {UserRegistration} from './UserRegistration';
import ConfirmEmail from "./ConfirmEmail";
// import Styles from './Styles';


// Parse.setAsyncStorage(AsyncStorage);
// const PARSE_APPLICATION_ID = 'ZQ5CstdydeHDFyJyLKZUWRMsOhslmv0wL6HtTJVH';
// const PARSE_HOST_URL ='https://parseapi.back4app.com/';
// const PARSE_JAVASCRIPT_ID = 'PZRLelnsubMWNSsHPwya1BO00I7HiXWfuvTIa045';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_ID);
// Parse.serverURL = PARSE_HOST_URL;


const Login = (props) => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const doUserLogIn = async function () {
  //   // Note that these values come from state variables that we've declared before
  //   const usernameValue = username;
  //   const passwordValue = password;
  //   return await Parse.User.logIn(usernameValue, passwordValue)
  //     .then(async (loggedInUser) => {
  //       // logIn returns the corresponding ParseUser object
  //       Alert.alert(
  //         'Success!',
  //         `User ${loggedInUser.get('username')} has successfully signed in!`,
  //       );
  //       // To verify that this is in fact the current user, currentAsync can be used
  //       const currentUser = await Parse.User.currentAsync();
  //       console.log(loggedInUser === currentUser);
  //       return true;
  //     })
  //     .catch((error) => {
  //       // Error can be caused by wrong parameters or lack of Internet connection
  //       Alert.alert('Error!', error.message);
  //       return false;
  //     });
  // };
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigation();



  const onSubmit = (data) => {
    navigate.navigate(TABNAVIGATOR);
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
      enabled={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={require('../../assets/images/LoginScreen.png')} style={{ flex:1, paddingHorizontal: 10 }}>
          <Image source={require('../../assets/images/logo-dai-hoc-thu-do-ha-noi-removebg.png')} 
          style={{width:160,height:150,position:'absolute',alignSelf:'center',marginTop:10}}
          />
            
          <View style={{ marginTop: HEIGHTXD(550) }}>
            <View style={{alignItems:'center',marginBottom:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',marginBottom:10}}>Hệ thống quản lý học tập dành cho sinh viên</Text>
            </View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextForm
                  textColor={R.colors.white}
                  placeHolderColor={"#ccc"}
                  placeholder={("Nhập mã sinh viên")}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  
                />
              )}
              name="username"
              defaultValue="username"
            />
            <FontAwesome5 style={{left:53,top:45,position:'absolute'}} name="user-alt" size={22} color="#2c3092" />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextForm
                  textColor={R.colors.white}
                  placeHolderColor={"#ccc"}
                  title={"password"}
                  placeholder={("Nhập mật khẩu")}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  isPassword={true}
                  error={errors.password}
                  
                />
              )}
              name="password"
              defaultValue="password"
            />
            <FontAwesome5 style={{left:53,top:105,position:'absolute'}} name="lock" size={22} color="#2c3092" />
            <View style={styles.row}>
              <View />
              <TouchableOpacity onPress={() => navigate.navigate(FORGOTPASSWORD)}>
                <AppText style={styles.txtTitle} i18nKey={"ForgotPassword"} />
              </TouchableOpacity>
              
            </View>
            <Button
              onPress={handleSubmit(onSubmit)}
              backgroundColor={"#2c3092"}
              title={("Đăng nhập")}
            />
            {/* <Button
              onPress={() => navigate.navigate(REGISTER)}
              backgroundColor={"#55CEBF"}
              title={I18n.t("Register")}
            /> */}
            {/* <View
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigate.navigate(TABNAVIGATOR)}>
                <AppText style={styles.txtTitle} i18nKey={"GoBackHome"} />
              </TouchableOpacity>
            </View> */}
          </View>
      </ImageBackground>  
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
   
    
    
    
  },
  imageStyle: {
   
    left:20,
    height: 25,
    width: 25,
    
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight:50,
  },

  txtTitle: {
    fontSize: getFontXD(42),
    color: '#2c3092',
    fontWeight: "bold",
    textDecorationLine:'underline'
  },
});

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  saveUserToRedux,
  showLoading,
  hideLoading,
})(Login);
