import React,{useState} from "react";
import { View, Text,StyleSheet,ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import TableTuition, { tinhtong } from "./TableTuition";
import { Child } from "./TableTuition";
const TuitionView = (props) => {
  
  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       
       <Header title={"THÔNG TIN HỌC PHÍ"} isBack ={true}/>
       <ScrollView>
        <View style={{margin:15}}>
            <Text style={styles.text}>Tổng số tiền phải nộp : </Text>
            <Text style={styles.text}>Tổng số tiền đã nộp : </Text>
            <Text style={styles.text}>Số tiền thừa/thiếu(+/-) : </Text>
        </View>

        <View style={{marginBottom:30}}>
            <View style={{width:'30%',backgroundColor:'#2b78e4',borderRadius:3}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',padding:4}}>2018-2019</Text>
            </View>
            <TableTuition 
              isSum = 'true'
              hocphiki1='100' 
              danopki1='200' 
              hocphiki2='200' 
              danopki2='100' 
             />
        </View>

        <View>
            <View style={{width:'30%',backgroundColor:'#2b78e4',borderRadius:3}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',padding:4}}>2019-2020</Text>
            </View>
            <TableTuition 
              hocphiki1='500' 
              danopki1='200' 
              hocphiki2='200' 
              danopki2='100' 
             />
        </View>

       </ScrollView>
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
