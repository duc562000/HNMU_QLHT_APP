import React, { useEffect,useState,Component } from "react";
import { ScrollView, StyleSheet, Text, View ,TextInput, KeyboardAvoidingView,Modal,Pressable,ImageBackground,Image} from "react-native";
import R from "../../assets/R";
import { getFontXD,getWidth } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import PickerAvatart from '../../components/Picker/PickerAvatart'
import InputForm from "../../components/Input/InputForm";
import { Controller,useForm } from "react-hook-form";
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import PickerItem from "../../components/Picker/PickerItem";
import Button from "../../components/Button";
import CustomInput from './CustomInput'
import CustomPickerItem from "./CustomPickerItem";




const InfoOther = (props) => {
  const {data}=props
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
  };

  const navigation = useNavigation();
//   const [text, setText] = ("");
  
  return (
    
      <ImageBackground source={R.images.bgBody} style={{}}>
        <ScrollView>
            <View style={{paddingBottom:100,flex:1,alignItems:'center',paddingVertical:20}}>
                <View style={{paddingBottom:10,alignItems:'center'}}>
                    <Image source={data.info.qr} borderRadius={10} style={{width:120,height:120}}/>
                    <Text style={{  paddingVertical:10,
                                    fontSize:13,
                                    color:R.colors.colorBtnLogin,
                                    fontWeight:'500',
                                    fontStyle:'italic'
                                    }}>Mã sổ sức khỏe điện tử</Text>
                </View>
                <CustomInput
                    control={control}
                    title="Địa chỉ cụ thể"
                    placeholder={'Nhập địa chỉ cụ thể'}
                    defaultValue={data.info.address}
                    name='adress'
                    
                    // onChangeText={text=>{
                    //     setText(text)
                    //   }}
                />
                <CustomPickerItem
                    control={control}
                    title="Phường/Xã"
                    defaultValue={data.info.Xa}
                    data={[
                        {name:"Nam Hải"},
                        {name:"Nam Thanh"},
                        {name:"Nam Lợi"}
                    ]}
                    name='xa'
                />
                <CustomPickerItem
                    control={control}
                    title='Quận/Huyện'
                    defaultValue={data.info.Huyen}
                    data={[
                        {name:"Nam Trực"},
                        {name:"Trực Ninh"},
                        {name:"Hải Hậu"}
                    ]}
                    name='huyen'
                />
                <CustomPickerItem
                    control={control}
                    title='Tỉnh/Thành phố'
                    defaultValue={data.info.Tinh}
                    data={[
                        {name:"Hà Nội"},
                        {name:"Nam Định"},
                        {name:"Khác"}
                    ]}
                    name='tinh'
                />
                <CustomPickerItem
                    control={control}
                    title='Quốc tịch'
                    defaultValue={data.info.QuocTich}
                    data={[
                        {name:"Việt Nam"},
                        {name:"Mỹ"},
                        {name:"Ấn Độ"}
                    ]}
                    name='quoctich'
                />
                <CustomPickerItem
                    control={control}
                    title='Dân tộc'
                    defaultValue={data.info.Dantoc}
                    data={[
                        {name:"Kinh"},
                        {name:"Tày"},
                        {name:"Thái"}
                    ]}
                    name='dantoc'
                />
                <CustomPickerItem
                    control={control}
                    title='Tôn giáo'
                    defaultValue={data.info.TonGiao}
                    data={[
                        {name:"Thiên chúa"},
                        {name:"Đạo hồi"},
                        {name:"Không"}
                    ]}
                    name='tongiao'
                />
                
                <CustomInput
                    QRcode={true}
                    control={control}
                    title='Số thẻ Bảo hiểm y tế'
                    placeholder={'Nhập Số thẻ BHYT'}
                    defaultValue={data.info.bhyt}
                    name='bhyt'
                    keyboardType={'number-pad'}
                />
                <CustomInput
                    control={control}
                    title='Số điện thoại'
                    placeholder={'Nhập Số điện thoại'}
                    defaultValue={data.info.sdt}
                    name='sdt'
                    keyboardType={'number-pad'}
                />


                <Button
                        widthBtn={200}
                        // noBackgroundImage='true'
                        title={'Lưu thông tin'}
                        onPress={handleSubmit(onSubmit)}
                        isModalSuccess = {true}
                        txtContent ={'Lưu thông tin'}
                >
                </Button>   
            </View>
        </ScrollView>
    </ImageBackground>
    
);
};


const styles = StyleSheet.create({

});

export default InfoOther;
