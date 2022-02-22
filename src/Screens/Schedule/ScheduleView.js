import React,{useState} from "react";
import { View, Text, FlatList,StyleSheet, Dimensions } from "react-native";
import Header from "../../components/Header/Header";
import R from "../../assets/R";
import PickerDate from "../../components/Picker/PickerDate";
import YearPickerModal from "../../components/Picker/YearPickerModal";
import HocKyPicker from "../../components/Picker/HocKyPicker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonGroup } from 'react-native-elements'
import TableTuition from "../Tuition/TableTuition";


const listtab = [
  {
    day : 'Thứ 2'
  },
  {
    day : 'Thứ 3'
  },
  {
    day : 'Thứ 4'
  },
  {
    day : 'Thứ 5'
  },
  {
    day : 'Thứ 6'
  },
  {
    day : 'Thứ 7'
  },
  {
    day : 'C.Nhật'
  }
]
  const data = [
    {
      id:1,
      day:'Thứ 2',
      giobatdau:'12:30',
      gioketthuc:'13:30',
      monhoc:'Kỹ thuật số',
      tenlop:'102020131231',
      thoigian:'8/12/2019-10/6/2019',
      phonghoc:'CS1-A2-206',
      giaovien:'Lê chí chung'
    },
    {
      id:2,
      day:'Thứ 2',
      giobatdau:'12:30',
      gioketthuc:'13:30',
      monhoc:'Kỹ thuật số',
      tenlop:'102020131231',
      thoigian:'8/12/2019-10/6/2019',
      phonghoc:'CS1-A2-206',
      giaovien:'Lê chí chung'
    },
    {
      id:3,
      day:'Thứ 4',
      giobatdau:'12:30',
      gioketthuc:'15:30',
      monhoc:'Kỹ thuật số',
      tenlop:'102020131231',
      thoigian:'8/12/2019-10/6/2019',
      phonghoc:'CS1-A2-206',
      giaovien:'Lê chí chung'
    },
  ]

const ScheduleView = (props) => {
  
  const renderItem = ({item,index}) => {
    return(
      <View key={index} style={{margin:10,borderWidth:3,borderColor:'#2c3092',borderLeftWidth:10,borderRadius:5}}>
          <View style={{flexDirection:'row'}}>
            <Text  style={{fontSize:39,color:'red',fontWeight:'bold',textAlignVertical:'center'}}>{item.giobatdau} {'\n'}     -    {'\n'}{item.gioketthuc}</Text>
            <View style={{width:3,height:'100%',backgroundColor:'#2c3092',}}/>
            <View style={{flexDirection:'column',padding:5}}>
              <Text style={styles.text}>Môn học : {item.monhoc}</Text>
              <Text style={styles.text}>Tên lớp tín chỉ : {item.tenlop}</Text>
              <Text style={styles.text}>Thơi gian : {item.thoigian}</Text>
              <Text style={styles.text}>Phòng : {item.phonghoc}</Text>
              <Text style={styles.text}>Giáo viên : {item.giaovien}</Text>
            </View>
          </View>
          <View>
            
          </View>
      </View>
    )
  }

  
  const [day,setday] = useState('thứ 2')
  const [itemSelected,setItemSelected] = useState(data)
  const setDayFilter = day => {
    if(day !== 'thứ 2'){
      setItemSelected([...data.filter(e=>e.day === day)])
    } else {
      setItemSelected(data)
    }
    setday(day)
  }

  return (
    
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       <Header title={"Lịch học"} isBack ={true}/>
      
        <View style={{flexDirection:'row',margin:15,marginLeft:50}}>
          <HocKyPicker/>
          <YearPickerModal/>
        </View>

        
          <View style={styles.listtab}>
            {
              listtab.map(e=> (
                <TouchableOpacity 
                  style={[styles.btnTab,day === e.day && styles.btnTabActive]}
                  onPress={()=> setDayFilter(e.day)}
                >
                  <Text style={[styles.textTab,day === e.day && styles.textActive]}>{e.day}</Text>
                </TouchableOpacity>
                
                ))
            }


          </View>
        

        {/* <ButtonGroup
        buttons={buttons}
        selectedIndex={element}
        onPress={SetstatusFilter}
        containerStyle={{backgroundColor:'#fff', marginBottom: 20 }}
      /> */}
        <FlatList
          data={itemSelected}
          keyExtractor={(e,i) => i.toString()}
          renderItem={renderItem}
        />
       
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    
    maxWidth:230,
    fontSize:16.5,
    fontWeight:'bold'
  },
  
  listtab:{
    
    flexDirection:'row',
    padding:6,
  },
  btnTab:{
    // width:Dimensions.get('window').width / 3.5,
    
    flexDirection:'row',
    borderWidth:0.5,
    borderColor:'#ccc',
    padding:5,
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  textTab:{
    color:'#2c3092',
    fontSize:16,
    fontWeight:'bold'
    
  },
  btnTabActive :{
    backgroundColor:'#2c3092',
  },
  textActive :{
    color:'#fff'
  }
})

export default ScheduleView;
