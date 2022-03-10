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

const ContactInfo = (props) => {
    
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
                                            }}>Thông tin liên hệ</Text>
                            </View>
                            <MaterialCommunityIcons style={{position:'absolute',
                                                            right:10,
                                                            top:22,
                                                            
                                                        }} 
                                                    name={isPress ? "chevron-up" :"chevron-down"} size={28} color="black" />
                        </TouchableOpacity>
                        <ImageBackground source={R.images.bgLogo}
                                        borderBottomLeftRadius={10} 
                                        borderBottomRightRadius={10} 
                                        style={[styles.imageItem,{display:isPress ? 'flex' :'none',}]}>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <MaterialCommunityIcons name="phone-classic" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>(+84) 24.3833.0708</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <MaterialCommunityIcons name="fax" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>(+84) 24.3833.5426</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <Ionicons name="mail" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>banbientap@hnmu.edu.vn</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <Ionicons name="location" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>Cơ sở 1: Số 98 Phố Dương Quảng Hàm, P. Quan Hoa, Q. Cầu Giấy, TP. Hà Nội</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <Ionicons name="location" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>Cơ sở 2: Đường 131 thôn Đạc Tài, Xã Mai Đình, Huyện Sóc Sơn, TP. Hà Nội</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10}}>
                                <Ionicons name="location" size={23} color={R.colors.colorBtnLogin} />
                                <Text style={styles.txt}>Cơ sở 3: Số 6 Phố Vĩnh Phúc, Ba Đình, TP. Hà Nội</Text>
                            </View>
                        </ImageBackground>
                    </View>
);
};

const styles = StyleSheet.create({
    txt:{
        color:R.colors.colorBtnLogin,
        fontSize:16,
        paddingLeft:10,
        width:325,
        paddingVertical:5
    },
    imageItem:{
        width:'100%',
        paddingVertical:5,
    },
    styleTouch:{
        alignItems:'center',
        borderRadius:10,
        marginTop:15
    }
});

export default ContactInfo;
