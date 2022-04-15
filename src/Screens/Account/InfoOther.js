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
import { DantocApi, editUserApi, huyenApi, loginApi, provinceApi, QuoctichApi, TongiaoApi, xaApi } from "../../apis/Functions/users";


const InfoOther = (props) => {
    const {data,dataAPI}=props
    const [response,setResponse] = useState([])
    const [tinhSelected,setTinhSelected]=useState()
    const [huyen,setHuyen]=useState([])
    const [huyenSelected,setHuyenSelected]=useState()
    const [xa,setXa]=useState([])
    const [xaSelected,setXaSelected]=useState()
    const [proviceData,setProviceData] = useState([])
    const [danTocData,setDantocData] = useState([])
    const [danTocSelected,setDantocSelected] = useState([])
    const [quoctichData,setQuoctichData] = useState([])
    const [quoctichSlected,setQuoctichSelected] = useState([])
    const [tonGiaoData,setTongiaoData] = useState([])
    const [tonGiaoSlected,setTongiaoSelected] = useState([])



  //Gọi danh sách tỉnh khi mở màn hình
    useEffect(() => {
        const getDataprovinces = async () => {
            let response = await provinceApi({
            });
            setProviceData(response.data.map((item,index) => 
            {
                return {
                    name: item.name,
                    code: item.code,
                }
            }
            ))
        };
        getDataprovinces()
    }, []);
  //Gọi danh sách huyện khi ng dùng chọn tỉnh( có id tỉnh để truyền lên api)
  
  useEffect(()=>{
    const getDataHuyen = async () => {
        let response = await huyenApi(tinhSelected, {});
        setHuyen(response.data.districts.map((item,index) => 
            {
                return {
                    name: item.name,
                    code: item.code,
                }
            }
            ))
            
    };
    getDataHuyen();
},[tinhSelected])
  //Gọi danh sách xa khi ng dùng chọn huyện (có id huyện để truyền lên api)
  useEffect(()=>{
    const getDataXa = async () => {
        let response = await xaApi(huyenSelected, {});
        setXa(response.data.wards.map((item,index) => 
            {
                return {
                    name: item.name,
                    code: item.code,
                }
            }
            ))
        console.log('xa',xa)
        // setXaSelected(name)
    };
    getDataXa();

},[huyenSelected])

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();



const getDantoc = async () => {
    let response = await DantocApi({
    });
    setDantocData(response.data.map((item,index) => 
        {
            return {
                name: item.name,
            }
        }
        ))
};
useEffect(() => {
    getDantoc();
}, []);

const onValueChange=(val,name)=>{
    setTinhSelected(val)
    setHuyenSelected(val)
    setXaSelected(val)
    setTongiaoSelected(name)
    setQuoctichSelected(name)
    setDantocSelected(name)
}


const getQuoctich = async () => {
    let response = await QuoctichApi({
    });
    setQuoctichData(response.data.map((item,index) => 
        {
            return {
                name: item.name_vi,
            }
        }
        ))
};
useEffect(() => {
    getQuoctich();
}, []);

const getTongiao = async () => {
    let response = await TongiaoApi({
    });
    setTongiaoData(response.data.map((item,index) => 
        {
            return {
                name: item.TenTonGiao,
            }
        }
        ))
};
useEffect(() => {
    getTongiao();
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
        "xa": data.xa,
        "huyen": data.huyen,
        "tinh": data.tinh,
        "quoctich":data.quoctich,
        "dantoc": data.dantoc,
        "tongiao": data.tongiao,
        "address": data.address,
        "bhyt": data.bhyt,
        "sdt": data.sdt,
        
    })
    setData();
  };
  
  const navigation = useNavigation();
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
                    name='address'

                />
                <CustomPickerItem
                    control={control}
                    title='Tỉnh/Thành phố'
                    onValueChange={onValueChange}
                    defaultValue={dataAPI.tinh}
                    data={proviceData}
                    name='tinh'
                />
                <CustomPickerItem
                    control={control}
                    title='Quận/Huyện'
                    defaultValue={dataAPI.huyen}
                    onValueChange={onValueChange}
                    data={huyen}
                    name='huyen'
                />
                <CustomPickerItem
                    control={control}
                    title="Phường/Xã"
                    defaultValue={dataAPI.xa}
                    onValueChange={onValueChange}
                    data={xa}
                    name='xa'
                />
                <CustomPickerItem
                    control={control}
                    title='Quốc tịch'
                    defaultValue={dataAPI.quoctich}
                    onValueChange={onValueChange}
                    data={quoctichData}
                    name='quoctich'
                />
                <CustomPickerItem
                    control={control}
                    title='Dân tộc'
                    defaultValue={dataAPI.dantoc}
                    onValueChange={onValueChange}
                    data={danTocData}
                    name='dantoc'
                />
                <CustomPickerItem
                    control={control}
                    title='Tôn giáo'
                    defaultValue={dataAPI.tongiao}
                    onValueChange={onValueChange}
                    data={tonGiaoData}
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
