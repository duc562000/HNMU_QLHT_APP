import React, { useEffect,useState,Component} from "react";
import { ScrollView, StyleSheet, Text, View ,TextInput, KeyboardAvoidingView,Modal,Pressable, ImageBackground, TouchableOpacity} from "react-native";
import R from "../../assets/R";
import { getFontXD } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import PickerAvatart from '../../components/Picker/PickerAvatart'
import InputForm from "../../components/Input/InputForm";
import { Controller,useForm } from "react-hook-form";
import AntDesign  from "react-native-vector-icons/AntDesign";
import Button from '../../components/Button';
import ModalChangePass from "../../components/Modal/ModalChangePass";
import { data } from "../Account/MaterialInfoTab";



const InfoMain = (props) => {
  const {data}=props
  const onSubmit = (data) => {
    setShowScoreModal(!showScoreModal)
    console.log(data);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);
  const [showScoreModal, setShowScoreModal] = useState(false)
  return (
    
    <ImageBackground source={R.images.bgBody} style={{}}>
        <ScrollView>
            <View style={{paddingBottom:100,flex:1,alignItems:'center'}}>
                <View style={{paddingVertical:15}}>
                    <PickerAvatart 
                        imgAvatart={true}
                        source={data.info.avt}
                    />
                </View>
        <View style={{paddingHorizontal:15,paddingTop:20}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Họ và Tên"}
                                            title={'Họ và Tên'}
                                            editable={false}
                                    />
                                    )}
                                    name='Fullname'
                                    defaultValue={data.info.name}
                                />  
        </View> 
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Ngày tháng năm sinh"}
                                            title={'Ngày tháng năm sinh'}
                                            editable={false}
                                    />
                                    )}
                                    name='DateOfBirth'
                                    defaultValue={data.info.dateOfBirth}
                                />  
        </View> 
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Mã sinh viên"}
                                            title={'Mã sinh viên'}
                                            editable={false}
                                    />
                                    )}
                                    name='studentCode'
                                    defaultValue={data.info.studentCode}
                                />  
        </View>
        <View style={{flexDirection:'row'}}>
                    <View style={{paddingHorizontal:15}}>

                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Giới tính"}
                                            widthInput={120}
                                            title={'Giới tính'}
                                            editable={false}
                                        
                                    />
                                )}
                                    name='sexdual'
                                    defaultValue={data.info.sexdual}
                                />  
                    </View> 
                    <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Niên khóa"}
                                            widthInput={200}
                                            title={'Niên khóa'}
                                            editable={false}
                                    />
                                    )}
                                    name='schoolyear'
                                    defaultValue={data.info.yearSchool}
                                />  
                    </View>  
                </View> 
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Ngành học"}
                                            title={'Ngành học'}
                                            editable={false}
                                    />
                                    )}
                                    name='majors'
                                    defaultValue={data.info.major}
                                />  
        </View> 
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Số CCCD"}
                                            title={'Số CCCD'}
                                            editable={false}
                                    />
                                    )}
                                    name='CCCD'
                                    defaultValue={data.info.CCCD}
                                />  
        </View> 
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Mật khẩu"}
                                            title={'Mật khẩu'}
                                            editable={false}
                                            secureTextEntry={true}
                                    />
                                    )}
                                    name='Pass'
                                    defaultValue={data.info.Pass}
                                />
            </View> 
        <ModalChangePass/>
        </View>
        </ScrollView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({

});

export default InfoMain;
