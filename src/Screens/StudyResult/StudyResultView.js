import React,{useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity,FlatList,ScrollView,Dimensions,Modal } from "react-native";
import Header from "../../components/Header/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN, STUDYRESULT, TESTSCHEDULE, TUITION,RESULTKY1, RESULTKY2 } from "../../routers/ScreenNames";
import { Button } from 'react-native-elements';
import ButtonList from "../home/ButtonList";
import { itemWidth } from "../../Config/Functions";



const data = [
  {
    screens: RESULTKY1,
    id:'1',
    year:'2019-2020',
    ky:'1',
    xlhthe4:'Khá',
    xlhthe10:'Khá',
    tbcht:'2.88',
    tbctluy:'2.88',
    tctichluy:'18/18',
    tchoctap:'22',
    tbctlhe10:'7.38'
  },
  {
    screens: RESULTKY1,
    id:'1',
    year:'2018-2019',
    ky:'1',
    xlhthe4:'Khá',
    xlhthe10:'Khá',
    tbcht:'2.88',
    tbctluy:'2.88',
    tctichluy:'18/18',
    tchoctap:'22',
    tbctlhe10:'7.38'
  },
  {
    screens: RESULTKY2,
    id:'2',
    year:'2019-2020',
    ky:'2',
    xlhthe4:'Khá',
    xlhthe10:'Khá',
    tbcht:'2.88',
    tbctluy:'2.88',
    tctichluy:'18/18',
    tchoctap:'22',
    tbctlhe10:'7.38'
  },
]

const StudyResultView = (props) => {

  const [chooseData,setchooseData] = useState('Năm học');
  const [isModalVisible,setisModalVisible] = useState(false);
  const [itemSelected,setItemSelected] = useState(data)
  
  const changeModalVisibility = (bool) => {
      setisModalVisible(bool)
  }
  // const setData = (options) => {
  //     setchooseData(options)
  // }
  const OPTIONS =[
    {year:'2018-2019'},
    {year:'2019-2020'},
    {year:'2020-2021'},
    {year:'2021-2022'}]
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  
  const onPressItem = year => {
    if(year !== '1'){
      setItemSelected([...data.filter(e=>e.year === year)])
    } else {
      setItemSelected(data)
    } 
          changeModalVisibility(false)
          setchooseData(year)
  }
      

      
  

  const renderItem = ({item,index}) => {
    return(
      <View key={index} style={{marginBottom:30}}>
            <View style={{width:'15%',backgroundColor:'#2b78e4',borderRadius:3}}>
                  <Text style={{fontSize:22,fontWeight:'bold',color:'red',padding:4}}>KỲ {item.ky}</Text>
            </View>
            <View style={styles.table}>
             
                      <View style={{padding:10,alignItems:'flex-start'}}>
                        <Text style={styles.texts}>Xếp loại học tập (Hệ 4):{item.xlhthe4}</Text>
                        <Text style={styles.texts}>Xếp loại học tập (Hệ 10): {item.xlhthe10} </Text>
                        <Text style={styles.texts}>TBC học tập (Hệ 4): {item.tbcht}</Text>
                        <Text style={styles.texts}>TBC tích lũy (Hệ 4): {item.tbctluy}</Text>
                        <Text style={styles.texts}>Số tín chỉ tích lũy: {item.tctichluy}</Text>
                        <Text style={styles.texts}>Số tín chỉ học tập: {item.tchoctap}</Text>
                        <Text style={styles.texts}>TBC tích lũy (Hệ 10): {item.tbctluy}</Text>
                      </View>                 
                      <View style={{alignItems:'center'}}>
                        <ButtonList title='Xem kết quả chi tiết'  iconsName='arrow-circle-right' Screen = {`${item.screens}`}/>
                      </View> 
                      
              
              </View>
           
        </View>
    )
  }
  

  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       <Header title={"KẾT QUẢ HỌC TẬP"} isBack ={true}/>
       
       <Text style={{margin:10,fontSize:19,textAlign:'center',fontWeight:'bold'}}>Kết quả chung</Text>
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
       <View style={{height:2 ,backgroundColor:'#2c3092'}}/>
       
       <View style={{flexDirection:'row',left:69,padding:10}}>
        <Text style={{fontSize:16,fontWeight:'bold',marginRight:5,textAlignVertical:'center'}}>Chọn năm học :</Text>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity
              onPress={() => changeModalVisibility(true) }
              style={styles.touchableOpacity}
          >   
              <AntDesign style={{position:'absolute',right:10,bottom:10}} name="caretdown" size={22} color="#2c3092" />
              <Text style={styles.textData}>{chooseData}</Text>
          </TouchableOpacity>
          
            <Modal
                
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false) }
            >
            
            {OPTIONS.map(e=>(  
              <TouchableOpacity
                  onPress={() => changeModalVisibility(false)}
                  style={{flex:1,alignItems:'flex-end'}}
              >
                  <View style={[styles.modal,{width:WIDTH - 250,height:HEIGHT/6}]}>
                      <ScrollView>
                      <TouchableOpacity 
                        style={styles.options}
                        
                        onPress={() => onPressItem(e.year)}
                        >
                          <Text style={{margin:20,fontSize:18,color:'#2c3092',fontWeight:'bold'}}>{e.year}</Text>
                          
                      </TouchableOpacity>
                      </ScrollView>
                  </View>
              </TouchableOpacity>
              ))
            }
          </Modal>
          
          </View>
       </View>
       
       <FlatList
        data={itemSelected}
        renderItem={renderItem}
        keyExtractor={(e,i) => i.toString()}
       />   
    </View>
  );
};


const styles = StyleSheet.create({
  text:{
    fontSize:15,
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
  },
  texts:{
    textAlign:'center',
    fontSize:20,
    color:'#000',
    fontWeight:'bold'
  },
textData:{
    color:'#2c3092',
    padding:10,
    fontSize:16
},
touchableOpacity:{
    width: 130,
    backgroundColor:'#fff',
    alignSelf:'stretch',
    paddingHorizontal:5,
    borderRadius:5,
    
},
modal:{
    backgroundColor:'#fff',
    borderRadius:5,
},
options:{
    alignItems:'flex-start'
}
})

export default StudyResultView;
