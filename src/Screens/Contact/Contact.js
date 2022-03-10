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
  ScrollView,
  Linking
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
import Maps from "./Maps";
import InfoHNMUVideo from "./InfoHNMUVideo";
import CustomInput from "../Account/CustomInput";
import Button from "../../components/Button";
import ContactRequest from "./ContactRequest";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';






const Contact = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
        } = useForm();
        const onSubmit = (data) => {
            console.log(data);
            
        };
    const navigate = useNavigation();
    const [isPress, setIsPress] = useState(false);
    return (
        <View style={{ flex:1 ,backgroundColor:'#000'}}>
            <HeaderTitleCenter  title={"Liên hệ"} isBack={'true'}/>
            <ImageBackground style={{width:'100%',height:'100%'}}  source={R.images.bgBody}>
                <ScrollView>
                    <ContactInfo/>
                    <Maps/>
                    <InfoHNMUVideo/>
                    <ContactRequest/>
                    <View style={{paddingVertical:20}}>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',paddingVertical:20}}>
                            <View style={styles.line}/>
                            <Text style={{paddingHorizontal:10,color:R.colors.colorBtnLogin,fontSize:16,fontWeight:'500'}}>Hoặc liên hệ qua</Text>
                            <View style={styles.line}/>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:200}}>
                        <View >
                        <TouchableOpacity onPress={()=>{ Linking.openURL('https://hnmu.edu.vn/')}} style={{alignItems:'center'}}>
                            <AntDesign name="earth" size={24} color={R.colors.colorBtnLogin} />
                        </TouchableOpacity>
                        </View>
                        <View >
                        <TouchableOpacity onPress={()=>{ Linking.openURL('https://www.facebook.com/hnmu.edu.vn/')}} style={{alignItems:'center'}}>
                            <Entypo name="facebook" size={24} color={R.colors.colorBtnLogin} />
                        </TouchableOpacity>
                        </View>

                        <View >
                        <TouchableOpacity onPress={() => {alert('daotao@hnmu.edu.vn')}} style={{alignItems:'center'}}>
                            <Entypo name="google-" size={24} color={R.colors.colorBtnLogin} />
                        </TouchableOpacity>
                        </View>

                        <View >
                        <TouchableOpacity onPress={()=>{ Linking.openURL('https://www.youtube.com/channel/UCnx6eDkD8hPG9oxDGF7mlsA')}} style={{alignItems:'center'}}>
                            <Entypo name="youtube" size={24} color={R.colors.colorBtnLogin} />

                        </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        
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
        paddingVertical:5,
        alignItems:'center',
        paddingVertical:15,
    },
    styleTouch:{
        alignItems:'center',
        borderRadius:10,
        marginTop:15
    },
    line:{
        height:1,
        width:115,
        backgroundColor:R.colors.gray,
        
    }
});

export default Contact;
