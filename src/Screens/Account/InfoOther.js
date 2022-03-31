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
import { editUserApi, loginApi, provinceApi } from "../../apis/Functions/users";

const dataDantoc = [
    {name:"Kinh"},
    {name:"Tày"},
    {name:"Thái"}
]

const InfoOther = (props) => {
  const {data,dataAPI}=props
  const [response,setResponse] = useState([])
  const [proviceData,setProviceData] = useState([])
  const [valueData,setValueData] = useState([])
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();
const getDataprovinces = async () => {
        let response = await provinceApi({
        });
        setProviceData(response.data.map((item) => 
        {
            return {
                name: item.name,
            }
        }
        
        ))
};
// console.log(proviceData[2].name);
useEffect(() => {
    getDataprovinces();
}, []);

const setData = () => {
    const UserData = async () => {
        let response = await loginApi({
        });
        setResponse(response);
    }
    UserData()
    };
    useEffect(() => {
        setData();
    }, []);
  const onSubmit = async (data) => {
    let response = await editUserApi({
        "Xa": data.xa,
        "Huyen": data.huyen,
        "Tinh": proviceData[data.tinh].name,
        "QuocTich":data.quoctich,
        "Dantoc": dataDantoc[data.dantoc].name,
        "TonGiao": data.tongiao,
        "address": data.adress,
        "bhyt": data.bhyt,
        "sdt": data.sdt,
    })
    setData();
  };
  const navigation = useNavigation();
//   const [text, setText] = ("");
//   console.log('proviec',proviceData.data);
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
                    defaultValue={dataAPI.address}
                    name='adress'
                />
                <CustomPickerItem
                    control={control}
                    title='Tỉnh/Thành phố'
                    defaultValue={dataAPI.Tinh}
                    data={proviceData}
                    name='tinh'
                    // value={proviceData}
                />
                <CustomPickerItem
                    control={control}
                    title='Quận/Huyện'
                    defaultValue={dataAPI.Huyen}
                    data={[
                        {name:"Nam Trực"},
                        {name:"Trực Ninh"},
                        {name:"Hải Hậu"}
                    ]}
                    name='huyen'
                />
                <CustomPickerItem
                    control={control}
                    title="Phường/Xã"
                    defaultValue={dataAPI.Xa}
                    data={[
                        {name:"Nam Hải"},
                        {name:"Nam Thanh"},
                        {name:"Nam Lợi"}
                    ]}
                    name='xa'
                />
                <CustomPickerItem
                    control={control}
                    title='Quốc tịch'
                    defaultValue={dataAPI.QuocTich}
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
                    defaultValue={dataAPI.Dantoc}
                    data={dataDantoc}
                    name='dantoc'
                />
                <CustomPickerItem
                    control={control}
                    title='Tôn giáo'
                    defaultValue={dataAPI.TonGiao}
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
                    defaultValue={dataAPI.bhyt}
                    name='bhyt'
                    keyboardType={'number-pad'}
                />
                <CustomInput
                    control={control}
                    title='Số điện thoại'
                    placeholder={'Nhập Số điện thoại'}
                    defaultValue={dataAPI.sdt}
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
