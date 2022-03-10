import React, { Component,useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView
} from "react-native";
import R from "../../assets/R";
import { getFontXD, WIDTHXD, WIDTHXDICON } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useForm, Controller } from "react-hook-form";
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN,SURVEYSCREEN, STUDYRESULT, TESTSCHEDULE, TUITION, NOTE_SCREEN } from "../../routers/ScreenNames";
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import HeaderTitleCenter from "../../components/Header/Header";
import MapView ,{ Callout, Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import ContactInfo from "./ContactInfo";
import YouTube from 'react-native-youtube';




const InfoHNMUVideo = (props) => {
    const navigate = useNavigation();
    const [isPress, setIsPress] = useState(false);
    return (
                    <View style={{paddingHorizontal:10}}>
                        <TouchableOpacity
                            onPress={() => {setIsPress(!isPress)}}
                        >
                            <View style={[styles.styleTouch,{backgroundColor:isPress ? R.colors.lightBlue : '#fff' }]}>
                                <Text style={{fontSize:18,
                                            fontWeight:'500',
                                            paddingVertical:10,
                                            color:isPress ? R.colors.white : R.colors.black
                                            }}>Giới thiệu về trường</Text>
                            </View>
                            <MaterialCommunityIcons style={{position:'absolute',
                                                            right:10,
                                                            top:22,
                                                            
                                                        }} 
                                                    name={isPress ? "chevron-up" :"chevron-down"} size={28} color="black" />
                        </TouchableOpacity>
                        <View style={[styles.imageItem,{display:isPress ? 'flex' :'none',}]}>
                                <YouTube
                                videoId={'6yFn09n0q3g'}   
                                play={false}             
                                fullscreen={true}
                                loop={true}         
                                style={{height:200,borderRadius:10}}
                                />
                        </View>
                    </View>                                       
);
};

const styles = StyleSheet.create({
    txt:{
        color:R.colors.colorBtnLogin,
        fontSize:16,
        paddingLeft:5,
        width:325,
        paddingVertical:5
    },
    imageItem:{
        width:'100%',
    },
    styleTouch:{
        alignItems:'center',
        borderRadius:10,
        marginTop:15
    }
});

export default InfoHNMUVideo;
