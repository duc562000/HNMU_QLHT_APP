import React,{useState} from "react";
import { View, Text,StyleSheet,Dimensions,TouchableOpacity,Modal,FlatList,ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import PickerModal from '../../components/Picker/PickerModal'
import YearPickerModal from "../../components/Picker/YearPickerModal";
import AntDesign from "react-native-vector-icons/AntDesign";


const data = [
  {
    id:'1',
    year:'2019-2020',
    ngaythi: '20/11/2020',
    giothi:'7:00',
    monhoc:'Giải tích số',
    cathi:'Sáng',
    phongthi:'CS1 - A3-211(P001)',
    sobaodanh:'16'
  },
  {
    id:'2',
    year:'2020-2021',
    ngaythi: '20/11/2021',
    giothi:'8:00',
    monhoc:'Lập trình web',
    cathi:'Sáng',
    phongthi:'CS1 - A3-211(P001)',
    sobaodanh:'17'
  },
]

const TestScheduleView = (props) => {
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
            <View style={{width:'30%',backgroundColor:'#2b78e4',borderRadius:3}}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',padding:4}}>{item.ngaythi}</Text>
            </View>
            <View style={styles.table}>
             
                      <View style={{padding:10}}>
                        <Text style={{fontSize:39,color:'red',fontWeight:'bold',textAlign:'center'}}>{item.giothi}</Text>
                        <Text style={styles.texts}>Môn : {item.monhoc} </Text>
                        <Text style={styles.texts}>Ca thi : {item.cathi}</Text>
                        <Text style={styles.texts}>Phòng : {item.phongthi}</Text>
                        <Text style={styles.texts}>SBD : {item.sobaodanh}</Text>
                      </View>                 
              
              <View style={styles.borderRow}/>
              </View>
            
        </View>
    )
  }
  

  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       <Header title={"Lịch thi"} isBack ={true}/>
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
});

export default TestScheduleView;
