import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {useNavigation} from '@react-navigation/native';
import { NEWS_READ_SCREEN, NOTIFICATION_DETAILS } from "../../routers/ScreenNames";
import { data } from "./DataNews";

export default function RenderItem({ item }) {
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
            <View style={{paddingHorizontal:15,
                    marginVertical:12}}>
                                <TouchableOpacity 
                                    style={{flexDirection:'row'}} 
                                    onPress={()=> navigate.navigate(NOTIFICATION_DETAILS,
                                        { item})}
                                    
                                >
                                <Image 
                                        source={{
                                        uri: item.image
                                        }}
                                        
                                        style={styles.smallNewsImg}
                                />
                                    <View style={{flexDirection:'column',paddingLeft:10}}>
                                        <Text numberOfLines={3} style={styles.txtsmallNews}>{item.title}</Text>
                                        <Text style={styles.timesmallNews}>{item.datetime}</Text>
                                    </View>
                                    
                                </TouchableOpacity>
                    </View>
);
}

const styles = StyleSheet.create({
    smallNews:{
        alignItems:'center',
    },
    smallNewsImg:{
        height:90,
        width:200,
        maxWidth:'39%',
        resizeMode: 'stretch',
        borderRadius:10,
    },
    txtsmallNews:{
        fontSize:15,
        color:R.colors.colorBtnLogin,
        fontWeight:'500',
        marginBottom:8,
        width:205,
    },
    timesmallNews:{
        fontSize:13,
        color:R.colors.blacklight,
        opacity:0.5
    }
});