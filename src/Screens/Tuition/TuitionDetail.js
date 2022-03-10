import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar,StyleSheet,FlatList, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import R from '../../assets/R'
import HeaderTitleCenter from '../../components/Header/Header';
import Feather  from "react-native-vector-icons/Feather";




function TuitionDetail({route}) {
  const navigate = useNavigation();
  const {title,icName,icColor,status,tc,contact,hinhthuc,thoigian,danop,phainop} = route.params.item
  // const {data} = props
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <View style={{flex: 1}}>
        <HeaderTitleCenter
        isBack='true'
        title={title}
        />
        <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%'}}>
            <View style={{alignItems:'center',paddingVertical:15}}>
                <Feather style={{justifyContent:'center'}} name={icName} size={80} color={icColor} />
                <Text style={styles.txtStatus}>{status}</Text>
            </View>
            <View>
                <Text style={styles.txt}>Số tín chỉ : {tc}</Text>
                <Text style={styles.txt}>Số tiền phải nộp : {phainop} VNĐ</Text>
                <Text style={styles.txt}>Số tiền đã nộp : {danop} VNĐ</Text>
                <Text style={styles.txt}>Thời gian nộp : {thoigian}</Text>
                <Text style={styles.txt}>Hình thức : {hinhthuc}</Text>
                <Text style={styles.txt}>{contact}</Text>
            </View>
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
  txtStatus: {
      fontSize: 20,
      fontWeight:'600',
      color:R.colors.black,
      paddingVertical:5
  },
  txt:{
      fontSize:18,
      color:R.colors.black,
      paddingHorizontal:10,
      paddingVertical:5,
      textAlign:'center',
  }
});

export default TuitionDetail;
