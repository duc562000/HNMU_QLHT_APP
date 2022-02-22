import React,{useState, useEffect} from "react";
import { View, Text,StyleSheet,Modal,SafeAreaView,TouchableOpacity, Dimensions ,FlatList  } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

// const data = [
//     {
//       id:1,
//       ngaythi: '20/11/2020',
//       giothi:'7:00',
//       monhoc:'Giải tích số',
//       cathi:'Sáng',
//       phongthi:'CS1 - A3-211(P001)',
//       sobaodanh:'16'
//     },
    
//   ]

const YearPickerModal = (props) => {
    const [chooseData,setchooseData] = useState('Năm học');
    const [isModalVisible,setisModalVisible] = useState(false);
    // const [itemSelected,setItemSelected] = useState(data)
    
    useEffect(() => {

    }, [])

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (options) => {
        setchooseData(options)
    }
    const OPTIONS =['2018-2019','2019-2020','2020-2021','2021-2022']
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const options = OPTIONS.map((item,index) => {
        const onPressItem = (options) => {
            
            changeModalVisibility(false)
            setData(options)
        }
        return(
            <TouchableOpacity 
                style={styles.options}
                key={index}
                onPress={() => onPressItem(item)}
                >
                    <Text style={{margin:20,fontSize:18,color:'#2c3092',fontWeight:'bold'}}>{item}</Text>
            </TouchableOpacity>
        )

        
    })
    return (
        <>
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
                <TouchableOpacity
                    onPress={() => changeModalVisibility(false)}
                    style={{flex:1,alignItems:'flex-end'}}
                >
                    <View style={[styles.modal,{width:WIDTH - 250,height:HEIGHT/6}]}>
                        <ScrollView>
                            {options}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
            
        </View>
        
       
       </>
        

    );
};

const styles = StyleSheet.create({
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

export default YearPickerModal;
