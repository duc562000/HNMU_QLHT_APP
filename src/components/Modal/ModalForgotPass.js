import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated,StyleSheet,ScrollView, ImageBackground, Alert } from 'react-native'
import R from '../../assets/R';
// import data from '../Survey/QuizData';ß
import Feather from 'react-native-vector-icons/Feather';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
import Button from '../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import InputForm from '../../components/Input/InputForm';
import { Controller,useForm } from 'react-hook-form';
import AntDesign  from "react-native-vector-icons/AntDesign";

const ModalForgotPass = (props) => {
    const onSubmit = (data) => {
        setShowScoreModal(!showScoreModal)
        console.log(data);
        Alert.alert('Gửi yêu cầu thành công!','Vui lòng mang Căn cước công dân đến phòng đào tạo để nhận mật khẩu mới')
      };
      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [showScoreModal, setShowScoreModal] = useState(false)
    return(
        <>
            <TouchableOpacity
            onPress={() => setShowScoreModal(true)}
        >
            <Text style={{  position:'absolute',
                            bottom:0,
                            right:26,
                            fontSize:15,
                            fontWeight:'500',color:R.colors.colorBtnLogin}}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >
                <View style={{
                    
                    marginTop:80,
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ImageBackground
                    source={R.images.bgLogo}
                    borderRadius={20}
                    style={{
                        padding: 20,
                        alignItems: 'center'
                    }}>
                           {/* <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text> */}
                    <TouchableOpacity
                        onPress={() => setShowScoreModal(!showScoreModal)}
                    >
                        <AntDesign style={{position:'absolute',left:130,bottom:-15}} name="close" size={24} color={R.colors.colorBtnLogin} />
                    </TouchableOpacity>
                    <View style={{
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginVertical: 20
                            }}>
                        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            widthInput={260}
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            error={errors.fullName}
                                            placeHolderColor={"#333"}
                                            placeholder={"Nhập Họ và tên"}
                                            name={'họ và tên'}
                                            title={'Họ và tên'}
                                    />
                                    )}
                                    name='fullName'
                                    defaultValue=''
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
                                            widthInput={260}
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            error={errors.codeStudent}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={" Nhập mã sinh viên"}
                                            title={'Mã sinh viên'}
                                            name={'mã sinh viên'}
                                            keyboardType={'number-pad'}
                                    />
                                    )}
                                    name='codeStudent'
                                    defaultValue=''
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
                                            widthInput={260}
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            error={errors.phoneNumber}
                                            placeHolderColor={"#333"}
                                            placeholder={"Nhập Số điện thoại"}
                                            title={'Số điện thoại'}
                                            name={'số điện thoại'}
                                            keyboardType={'number-pad'}
                                    />
                                    )}
                                    name='phoneNumber'
                                    defaultValue=''
                                />  
                        </View>  
                    </View>
                        <View style={{marginTop:20,marginBottom:10}}>
                            <Button
                            widthBtn={200}
                            title={'Gửi yêu cầu'}
                            onPress={handleSubmit(onSubmit)}
                            >
                            </Button>
                         </View>

                       </ImageBackground>

                   </View>
               </Modal>          
        </>
    )
}

export default ModalForgotPass;

