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
import Maps from "./Maps";
import InfoHNMUVideo from "./InfoHNMUVideo";
import CustomInput from "../Account/CustomInput";
import Button from "../../components/Button";



const ContactRequest = (props) => {
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
                    <View style={{paddingHorizontal:10}}>
                        <TouchableOpacity
                            onPress={() => {setIsPress(!isPress)}}
                        >
                            <View style={[styles.styleTouch,{backgroundColor:isPress ? R.colors.lightBlue : '#fff' }]}>
                                <Text style={{fontSize:18,
                                            fontWeight:'500',
                                            paddingVertical:10,
                                            color:isPress ? R.colors.white : R.colors.black
                                            }}>Gửi yêu cầu liên hệ</Text>
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
                            <CustomInput
                                control={control}
                                placeholder={'Họ và Tên'}
                                defaultValue=''
                                name='fullName'
                            />
                            <CustomInput
                                control={control}
                                placeholder={'Địa chỉ'}
                                defaultValue=''
                                name='adresss'
                            />
                            <CustomInput
                                control={control}
                                placeholder={'Số điện thoại'}
                                defaultValue=''
                                name='sdt'
                            />
                            <CustomInput
                                control={control}
                                placeholder={'Email'}
                                defaultValue=''
                                name='email'
                            />
                            <CustomInput
                                heightInput={100}
                                control={control}
                                placeholder={'Nhập nội dung yêu cầu'}
                                defaultValue=''
                                name='content'
                                multiline={true}
                            />
                            <Button
                                widthBtn={200}
                                // noBackgroundImage='true'
                                title={'Gửi yêu cầu'}
                                onPress={handleSubmit(onSubmit)}
                                isModalSuccess = {true}
                                txtContent ={'Gửi yêu cầu'}
                            >
                            </Button>   
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
    }
});

export default ContactRequest;
