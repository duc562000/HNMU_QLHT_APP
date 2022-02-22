import React,{useCallback} from "react";
import { View, Text,StyleSheet,ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import NumberFormat from 'react-number-format';


const TableTuition = (props) => {
  const {hocphiki1,danopki1,hocphiki2,danopki2,isSum} = props
  const thuathieuki1 = hocphiki1 - danopki1
  const thuathieuki2 = hocphiki2 - danopki2
  const tongtienphainop =  hocphiki1 + hocphiki2;
  // const tongtiendanop = danopki1 - danopki2
  // const thuathieucanam = tongtienphainop - tongtiendanop
  
  return (
    <>
     {/* {isSum ? (
      
      <View style={{margin:15}}>
            <Text style={styles.text}>Tổng số tiền phải nộp :{tongtiendanop} </Text>
            <Text style={styles.text}>Tổng số tiền đã nộp : </Text>
            <Text style={styles.text}>Số tiền thừa/thiếu(+/-) : </Text>
      </View>
      
    ) : (
      null
    )} */}
    <View style={styles.table}>
              <View style={{flexDirection:'row'}}>
                <Text style={{padding:10,fontSize:25,fontWeight:'bold',color:'green',textAlignVertical:'center'}}>KỲ 1</Text>
                <View style={styles.borderColumn}/>
                      <View style={{padding:10}}>
                        <Text style={styles.text}>Muc hoc phi : {hocphiki1} VNĐ</Text>
                        <Text style={styles.text}>Số tiền đã nộp : {danopki1} VNĐ</Text>
                        <Text style={styles.text}>Thừa/Thiếu : {thuathieuki1} VNĐ</Text>
                      </View>                 
              </View>
              <View style={styles.borderRow}/>
              <View style={{flexDirection:'row'}}>
                <Text style={{padding:10,fontSize:25,fontWeight:'bold',color:'red',textAlignVertical:'center'}}>KỲ 2</Text>
                <View style={styles.borderColumn}/>
                <View style={{padding:10}}>
                    <Text style={styles.text}>Muc hoc phi : {hocphiki2} VNĐ</Text>
                    <Text style={styles.text}>Số tiền da nop : {danopki2} VNĐ</Text>
                    <Text style={styles.text}>Thừa/Thiếu : {thuathieuki2} VNĐ</Text>
                </View>
              </View>
            </View> 
    </>
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

export default TableTuition;
