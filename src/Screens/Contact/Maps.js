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





const Maps = (props) => {
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
                                            }}>Bản đồ</Text>
                            </View>
                            <MaterialCommunityIcons style={{position:'absolute',
                                                            right:10,
                                                            top:22,
                                                            
                                                        }} 
                                                    name={isPress ? "chevron-up" :"chevron-down"} size={28} color="black" />
                        </TouchableOpacity>
                        <View style={[styles.imageItem,{display:isPress ? 'flex' :'none',}]}>
                                            <MapView
                                                
                                                style={{width:'100%',height:390,borderRadius:10}}
                                                    initialRegion={{
                                                        latitude: 21.035902460223916,  
                                                        longitude: 105.80134938500505,
                                                        latitudeDelta: 0.0922,
                                                        longitudeDelta: 0.09221,
                                                    }}
                                                >
                                                    <Marker
                                                        coordinate={{
                                                            latitude: 21.035902460223916,  
                                                            longitude: 105.80134938500505,
                                                            latitudeDelta: 0.0922,
                                                            longitudeDelta: 0.09221,
                                                        }}
                                                    >
                                                        <Callout>
                                                            <Text>Trường Đại học Thủ đô Hà Nội cơ sở 1</Text>
                                                        </Callout>
                                                    </Marker>
                                            </MapView>
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
        paddingVertical:0,
    },
    styleTouch:{
        alignItems:'center',
        borderRadius:10,
        marginTop:15
    }
});

export default Maps;
