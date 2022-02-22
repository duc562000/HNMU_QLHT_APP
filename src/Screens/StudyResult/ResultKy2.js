import React, {Component} from 'react';
import {View, Text,StyleSheet, FlatList} from 'react-native';
import Header from "../../components/Header/Header";

const data = [
    {
      id:'1',
      year:'2019-2020',
      monhoc:'Lập trình ',
      sotc:'2',
      diemchuyencan:'10',
      diemkiemtra:'8',
      diemthi:'6',
      tbhp:'7.3',
    },
    {
        id:'2',
        year:'2019-2020',
        monhoc:'Lập trình web',
        sotc:'3',
        diemchuyencan:'10',
        diemkiemtra:'8',
        diemthi:'6',
        tbhp:'7.3',
      },
      {
        id:'3',
        year:'2018-2019',
        monhoc:'Lập trình web',
        sotc:'3',
        diemchuyencan:'10',
        diemkiemtra:'8',
        diemthi:'6',
        tbhp:'7.3',
      },
  ]

const Resultki2 = (props) => {
    const renderItem = ({item,index}) => {
        return(
          <View key={index} style={{marginBottom:30}}>
                <View style={{width:'50%',backgroundColor:'#2b78e4',borderRadius:3}}>
                      <Text style={{fontSize:22,fontWeight:'bold',color:'#fff',padding:4}}> {item.monhoc}</Text>
                </View>
                <View style={styles.table}>
                 
                          <View style={{padding:10,alignItems:'flex-start'}}>
                            <Text style={styles.texts}>Số tín chỉ:{item.sotc}</Text>
                            <Text style={styles.texts}>Điểm chuyên cần: {item.diemchuyencan} </Text>
                            <Text style={styles.texts}>Điểm kiểm tra: {item.diemkiemtra}</Text>
                            <Text style={styles.texts}>Điểm thi: {item.diemthi}</Text>
                            <Text style={styles.texts}>TBHP: {item.tbhp}</Text>
                          </View>                 
                          <View style={{width:3,height:'100%',backgroundColor:'#2c3092',}}/> 
                          <Text style={[styles.texts,{textAlignVertical:'center',paddingLeft:35}]}>Điểm chữ : {'\n'}  
                            <Text style={{color:'red',fontSize:50}}>B</Text>
                          </Text>
                  
                  </View>
               
            </View>
        )
      }
  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
        <Header title={"KẾT QUẢ HỌC TẬP HỌC KỲ 2"} isBack ={true}/>
        <View style={{flexDirection:'row',marginBottom:10}}>
        <View style={{paddingLeft:6}}>
            <Text style={styles.text}>Mã Sinh viên : 218401109</Text>
            <Text style={styles.text}>TBC tích lũy (Hệ 4): 2.72 </Text>
            <Text style={styles.text}>X.Loại học tập (Hệ 10): Khá</Text>
            <Text style={styles.text}>Số tín chỉ học tập: 113</Text>
        </View>
        <View style={{paddingLeft:10}}>
            <Text style={styles.text}>X.Loại học tập (Hệ 4): Khá</Text>
            <Text style={styles.text}>TBC học tập (Hệ 4): 2.72</Text>
            <Text style={styles.text}>TC tích lũy: 102 / 102</Text>
            <Text style={styles.text}>TBC tích lũy (Hệ 10): 7.17</Text>
        </View>
       </View>
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        fontWeight:'bold'
      },
      texts:{
        textAlign:'center',
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
      },
      table:{
        borderWidth:2,
        borderColor:'#2c3092',
        borderRadius:3,
        flexDirection:'row'
      },
})

export default Resultki2;
