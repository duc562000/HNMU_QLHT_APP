import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import R from "../../assets/R";
import { getFontXD, WIDTHXD, WIDTHXDICON } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import SwiperComponent from "./SwiperComponent";
import InputForm from "../../components/Input/InputForm";
import Header from "../../components/Header/Header";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useForm, Controller } from "react-hook-form";
import Home from "./Home";
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN,SURVEYSCREEN, STUDYRESULT, TESTSCHEDULE, TUITION, NOTE_SCREEN, CONTACT, ADMISSONS_WEBVIEW } from "../../routers/ScreenNames";
import { Button } from 'react-native-elements';
import ButtonList from "./ButtonList";
import { ScrollView } from "react-native-gesture-handler";
import { ACCOUNT } from "../../routers/ScreenNames";
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import { data } from "../Account/MaterialInfoTab";


const HomeView = (props) => {
  const navigate = useNavigation();
  const {item} = props
  return (
    <View style={{ flex:1 ,backgroundColor:'#000'}}>
      <HeaderTitleLeft  title={"HNMU EDU"}/>
        
        <ImageBackground style={{width:'100%',height:'100%'}} source={R.images.bgLogo2}>
          <View style={{margin:15,flex:1/2,paddingBottom:30,paddingTop:5}}>
                <ImageBackground
                  borderRadius={15} 
                  source={R.images.bgMainAvt2}
                  style={{ 
                          height:'100%',
                          flexDirection:'row',
                          marginVertical:15,
                          shadowOpacity:0.2,
                          shadowRadius:2,
                          alignItems:'center',
                          justifyContent:'center'
                          }}
                >
                  <Image 
                    source={data.info.avt}
                    style={{width:100,height:100,margin:10,borderRadius: 100,}}
                  />
                  <View style={{flexDirection:'column',margin:15,alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:18,paddingVertical:5}}>Xin chào !</Text>
                    <Text style={styles.txtInfo}>{item.name}</Text>
                    <Text style={styles.txtInfo}>{item.major}</Text>
                    <Text style={styles.txtInfo}>{item.studentCode}</Text>
                  </View>
                </ImageBackground>
          </View>
          <ImageBackground source={R.images.bgBody} borderRadius={20} style={styles.styleImg}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5}}> 
              <ButtonList title='Tin tức'  iconsName='newspaper-o' Screen = {NEWSCREEN}/>
              <ButtonList title='Lịch học' iconsName='calendar' Screen = {SCHEDULESCREEN}/>
              <ButtonList title='Lịch thi' iconsName='calendar-check-o' Screen = {TESTSCHEDULE}/>  
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5}}> 
              <ButtonList title='Kết quả học tập' iconsName='bar-chart' Screen = {STUDYRESULT}/>
              <ButtonList title='Thông tin học phí' iconsName='credit-card' Screen = {TUITION}/>
              <ButtonList title='Hòm thư đánh giá' iconsName='envelope-o' Screen = {REVIEWS}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:5}}> 
              <ButtonList title='Ghi chú' iconsName='edit' Screen = {NOTE_SCREEN} /> 
              <ButtonList title='Tuyển sinh' iconsName='graduation-cap' Screen = {ADMISSONS_WEBVIEW}/>
              <ButtonList title='Liên hệ' iconsName='wechat' Screen = {CONTACT} />
            </View>
          </ImageBackground>
        </ImageBackground>
    
    

    </View>
  );
};

const styles = StyleSheet.create({
  styleImg :{
    shadowOpacity:0.3,
    shadowRadius:2,
    paddingHorizontal:10,
    paddingVertical:55,
  },
  txtInfo:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    paddingVertical:1,
  }
});

export default HomeView;
