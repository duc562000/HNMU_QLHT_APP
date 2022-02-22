import React,{useState} from "react";
import { View, Text,StyleSheet,Modal,SafeAreaView,TouchableOpacity, Dimensions   } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";


const HocKyPicker = (props) => {
    const [chooseData,setchooseData] = useState('Học Kỳ');
    const [isModalVisible,setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (options) => {
        setchooseData(options)
    }
    const OPTIONS =['Học Kỳ 1','Học Kỳ 2']
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
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity
                onPress={() => changeModalVisibility(true) }
                style={styles.touchableOpacity}
            >   
                <AntDesign style={{position:'absolute',right:10,bottom:10}} name="caretdown" size={22} color="#2c3092" />
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>

            <Modal
                
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false) }
            >
                <TouchableOpacity
                    onPress={() => changeModalVisibility(false)}
                    style={{flex:1}}
                >
                    <View style={[styles.modal,{width:WIDTH - 250,height:HEIGHT/6}]}>
                        <ScrollView>
                            {options}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>   
    );
};

const styles = StyleSheet.create({
    text:{
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

export default HocKyPicker;
