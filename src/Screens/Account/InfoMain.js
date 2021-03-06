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
  const {data,dataAPI}=props
//   console.log('dataAPI',dataAPI)
  const onSubmit = (data) => {
    setShowScoreModal(!showScoreModal)
    // console.log(data);
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"H??? v?? T??n"}
                                            title={'H??? v?? T??n'}
                                            editable={false}
                                    />
                                    )}
                                    name='Fullname'
                                    defaultValue={dataAPI.name}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Ng??y th??ng n??m sinh"}
                                            title={'Ng??y th??ng n??m sinh'}
                                            editable={false}
                                    />
                                    )}
                                    name='DateOfBirth'
                                    defaultValue={dataAPI.dateOfBirth}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"M?? sinh vi??n"}
                                            title={'M?? sinh vi??n'}
                                            editable={false}
                                    />
                                    )}
                                    name='studentCode'
                                    defaultValue={dataAPI.studentCode}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Gi???i t??nh"}
                                            widthInput={120}
                                            title={'Gi???i t??nh'}
                                            editable={false}
                                        
                                    />
                                )}
                                    name='sexdual'
                                    defaultValue={dataAPI.sexdual}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Ni??n kh??a"}
                                            widthInput={200}
                                            title={'Ni??n kh??a'}
                                            editable={false}
                                    />
                                    )}
                                    name='schoolyear'
                                    defaultValue={dataAPI.yearSchool}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"Ng??nh h???c"}
                                            title={'Ng??nh h???c'}
                                            editable={false}
                                    />
                                    )}
                                    name='majors'
                                    defaultValue={dataAPI.major}
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
                                            textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={"S??? CCCD"}
                                            title={'S??? CCCD'}
                                            editable={false}
                                    />
                                    )}
                                    name='CCCD'
                                    defaultValue={dataAPI.CCCD}
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
                                            // textColor={R.colors.color777}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            // value={value}
                                            placeHolderColor={R.colors.color777}
                                            placeholder={"*****************************"}
                                            title={'M???t kh???u'}
                                            editable={false}
                                            secureTextEntry={true}
                                    />
                                    )}
                                    name='Pass'
                                    defaultValue={dataAPI.pass}
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
