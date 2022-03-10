import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,ImageBackground,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {useNavigation} from '@react-navigation/native';
import Feather  from "react-native-vector-icons/Feather";

export default function ListTestSchedule({ item }) {
const navigate = useNavigation();
    return (
            <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <ImageBackground  borderRadius={5}
                                    source={R.images.bgLogo} 
                                    style={{flexDirection:'row',
                                    justifyContent:'flex-start',
                                    borderWidth:1,
                                    shadowOpacity:0.2,
                                    shadowRadius:2,
                                    borderColor:'#ccc',
                                    elevation:1,
                                    }}>
                    <View style={{paddingHorizontal:5,paddingVertical:15}}>
                    <Text style={styles.txtSbd}>SBD: {item.sbd}</Text>
                    <Text style={styles.txtDate}>{item.date}</Text>
                    </View>
                    <View style={styles.column}/>
                    <View style={{flexDirection:'column',paddingHorizontal:5,paddingVertical:15}}>
                    <Text style={styles.txtSubject}>{item.subject}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.txt}>{item.time}</Text>
                        <Text style={styles.txt}>Phòng thi : {item.room}</Text>
                    </View>
                    </View>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
        txtSbd:{
            color:R.colors.red,
            fontSize:17,
            fontWeight:'600',
            textAlign:'center',
            paddingBottom:10
        },
        txtDate:{
            color:R.colors.black,
            fontSize:16,
            textAlign:'center',
            paddingVertical:5
        },
        txtSubject:{
            color:R.colors.black,
            fontSize:17,
            fontWeight:'600',
            paddingBottom:10
        },
        column:{
            width:1,
            backgroundColor:'#aaa',
            marginHorizontal:10
        },
        txt:{
            color:R.colors.colorBtnLogin,
            fontSize:15,
            paddingVertical:5,
            paddingRight:30
        }
});