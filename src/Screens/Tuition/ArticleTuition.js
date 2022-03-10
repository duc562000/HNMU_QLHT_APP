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
import { TUITION_DETAILS } from "../../routers/ScreenNames";

export default function ArticleTuition({ item }) {
//   const openLink = () => {
//     const url = item.url;

//     // https://reactnative.dev/docs/linking
//     Linking.canOpenURL(url).then((supported) => {
//       if (supported) {
//         Linking.openURL(url);
//       } else {
//         Alert.alert("Broken Link!");
//       }
//     });
//   };

//   const publishedFromNow = formatDistanceToNow(new Date(item.publishedAt));
const navigate = useNavigation();
    return (
        <ImageBackground source={R.images.bgLogo} borderBottomLeftRadius={20} borderBottomRightRadius={20} style={{flex:1,
            backgroundColor:'#fff',
            alignItems:'center',
            marginHorizontal:10,
            marginVertical:20,
            borderBottomLeftRadius:15,
            borderBottomRightRadius:15,
            }}>
            <View style={{flexDirection:'row',paddingVertical:20}}>
                <Feather style={{justifyContent:'center'}} name={item.icName} size={50} color={item.icColor} />
                <View style={{paddingHorizontal:20}}>
                    <Text style={styles.text}>Học Kỳ : {item.hocky} </Text>
                    <Text style={styles.text}>Năm học : {item.namhoc}</Text>
                    <Text style={styles.textSmalll}>Trạng thái : {item.status}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=> navigate.navigate(TUITION_DETAILS,{ item})} style={{width:'100%',alignItems:'center',}}>
                <ImageBackground source={R.images.bgBtn} 
                                    borderBottomLeftRadius={15} 
                                    borderBottomRightRadius={15} 
                                    style={{width:'100%',
                                    alignItems:'center'}}>
                    <Text style={styles.textTouch}>Xem chi tiết</Text>
                </ImageBackground>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    smallNews:{
        alignItems:'center',
    },
    smallNewsImg:{
        height:85,
        maxWidth:'39%',
        resizeMode: 'stretch'
    },
    txtsmallNews:{
        fontSize:13,
        color:R.colors.black,
        marginBottom:8,
        width:205,
        
        
    },
    timesmallNews:{
        fontSize:13,
        color:R.colors.brown
    },
    text:{
        fontSize:18,
        color:R.colors.colorBtnLogin,
        fontWeight:'500',
        textAlign:'center'
      },
      textSmalll:{
        paddingVertical:10,
        fontSize:16,
        color:R.colors.black,
        fontWeight:'400',
        textAlign:'center'
      },
      textTouch:{
        fontSize:16,
        color:R.colors.white,
        fontWeight:'500',
        textAlign:'center',
        padding:15
      }
});