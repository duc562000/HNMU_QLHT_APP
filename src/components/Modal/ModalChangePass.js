import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated,StyleSheet,ScrollView, ImageBackground } from 'react-native'
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

const ModalChangePass = (props) => {
    const onSubmit = (data) => {
        setShowScoreModal(!showScoreModal)
        console.log(data);
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
                            left:80,
                            fontSize:15,
                            fontWeight:'500',color:R.colors.colorBtnLogin}}>Đổi mật khẩu</Text>
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
                                            error={errors.passOld}
                                            placeHolderColor={"#333"}
                                            placeholder={"Nhập mật khẩu cũ"}
                                            name={'mật khẩu cũ'}
                                            title={'Mật khẩu cũ'}
                                    />
                                    )}
                                    name='passOld'
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
                                            error={errors.newPass}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={" Nhập mật khẩu mới"}
                                            title={'Mật khẩu mới'}
                                            name={'mật khẩu mới'}
                                    />
                                    )}
                                    name='newPass'
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
                                            error={errors.reNewPass}
                                            placeHolderColor={"#333"}
                                            placeholder={"Nhập lại mật khẩu mới"}
                                            title={'Nhập lại mật khẩu mới'}
                                            name={'lại mật khẩu mới'}
                                    />
                                    )}
                                    name='reNewPass'
                                    defaultValue=''
                                />  
                        </View>  
                    </View>
                           {/* Retry Quiz button */}
                           <View style={{marginTop:20,marginBottom:10}}>
                            <Button
                            widthBtn={200}
                            title={'Đổi mật khẩu'}
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

export default ModalChangePass;

