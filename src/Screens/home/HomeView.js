import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
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
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN, STUDYRESULT, TESTSCHEDULE, TUITION } from "../../routers/ScreenNames";
import { Button } from 'react-native-elements';
import ButtonList from "./ButtonList";
import { ScrollView } from "react-native-gesture-handler";
import { ACCOUNT } from "../../routers/ScreenNames";


const HomeView = (props) => {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <Header  title={"HNMU EDU"} iconGraduation={true} icons = {'graduation-cap'}/>
      <ScrollView>
        <View style={{margin:15}}>
          <TouchableOpacity 
            
            style={{backgroundColor:'#2c3092',
                    borderColor: '#2c3092',
                    borderWidth: 1,
                    borderRadius: 10,
                    flexDirection:'row',
                    marginBottom:5,
                    
                    }}
            // onPress={() => navigate.navigate(ACCOUNT)}
          >
             <Image 
              source={require('../../assets/images/avatarSv.jpg')}
              style={{width:100,height:100,margin:10,borderRadius: 50,}}
             />
             <View style={{flexDirection:'column',margin:15,alignItems:'center'}}>
               <Text style={{color:'#fff',fontSize:18}}>Xin chào !</Text>
               <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Nguyễn Minh Đức</Text>
               <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>218401109</Text>
             </View>
          </TouchableOpacity>
        </View>
          <View style={{height:2 ,backgroundColor:'#2c3092'}}/>
        <View style={{margin:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
            <ButtonList title='TIN TỨC'  iconsName='newspaper-o' Screen = {NEWSCREEN}/>
            <ButtonList title='LỊCH HỌC' iconsName='calendar' Screen = {SCHEDULESCREEN}/>
          </View>
          <View style={{height:1 ,backgroundColor:'#2c3092'}}/>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
            <ButtonList title='LỊCH THI' iconsName='calendar-check-o' Screen = {TESTSCHEDULE}/>
            <ButtonList title='KẾT QUẢ HỌC TẬP' iconsName='bar-chart' Screen = {STUDYRESULT}/>
          </View>
          <View style={{height:1 ,backgroundColor:'#2c3092'}}/>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
            <ButtonList title='THÔNG TIN HỌC PHÍ' iconsName='credit-card' Screen = {TUITION}/>
            <ButtonList title='HÒM THƯ ĐÁNH GIÁ' iconsName='envelope-o' Screen = {REVIEWS}/>
          </View>
        </View>
      
        <View style={{height:2 ,backgroundColor:'#2c3092'}}/>
        <View style={{flexDirection:'row',margin:15}}>
          <Image 
            source={require('../../assets/images/logo-dai-hoc-thu-do-ha-noi-removebg.png')}
            style={{width:80,height:80}}
          />
          <View style={{flexDirection:'column',marginLeft:10}}>
            <Text style={{color:'#2c3092',fontSize:20,fontWeight:'bold'}}>Trường đại học Thủ Đô Hà Nội</Text>
            <Text style={{color:'#bf9000',fontSize:18,fontWeight:'bold'}}>Ha Noi Metropolitan University</Text>
            <Text> Website      :   http://hnmu.edu.vn/</Text>
            <Text numberOfLines={1} ellipsizeMode='tail'> Địa chỉ        :   98 Dương Quảng Hàm</Text>
            <Text> Điện thoại  :   (+84) 24.3833.0708</Text>
            <Text> Email          :    daotao@hnmu.edu.vn</Text>
          </View>
        </View>
      </ScrollView>  
    

    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeView;
