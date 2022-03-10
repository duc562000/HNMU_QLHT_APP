import React,{useState} from "react";
import { View, Text,StyleSheet,ScrollView, ImageBackground } from "react-native";
import R from "../../assets/R";
import Header from "../../components/Header/Header";
import MaterialTuitionTab from "./MaterialTuitionTab";
import TableTuition, { tinhtong } from "./TableTuition";
import { Child } from "./TableTuition";



const TuitionView = (props) => {
  
  return (
    <View style={{ flex: 1}}>
      <Header title={"Thông tin học phí"} isBack ={true}/>
          <MaterialTuitionTab/>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:18,
    color:'#000',
    fontWeight:'bold'
  },
  table:{
    borderWidth:2,
    borderColor:'#2c3092',
    borderRadius:3,
  },
  borderColumn : {
    width:2,
    height:'100%',
    backgroundColor:'#2c3092',
  },
  borderRow :{
    height:2,
    backgroundColor :'#2c3092'
  }
});

export default TuitionView;
