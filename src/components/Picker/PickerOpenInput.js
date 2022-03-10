
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import {HEIGHTXD, WIDTHXD, getFontXD} from "../../Config/Functions";
import R from "../../assets/R";
import DropDownPicker from 'react-native-dropdown-picker';
import I18n from "../../helper/i18/i18n";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../Screens/Account/CustomInput";
import { Controller,useForm } from "react-hook-form";



const PickerOpenInput = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    };
    const{title,questions1,questions2,questions3,questions4,questions5,questions6,questions7,placeholder,name,heightInput,widthInput} = props
    const [isPress, setIsPress] = useState(false);
    return (
    <View style={{paddingHorizontal:15,paddingTop:15}} >
            <TouchableOpacity
                onPress={() => {setIsPress(!isPress)}}
                style={[
                    styles.pickerStyle,
                    {
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'flex-start',
                    width: 360,
                    color: R.colors.black,
                    fontSize: 20,
                    fontWeight: '400',
                    backgroundColor: isPress ? R.colors.lightBlue : R.colors.colorBgInputText,
                    borderRadius: 5,
                    borderWidth:0.2,
                    paddingVertical:10
                    }
                ]}
                >
                <Text style={{width:280,
                            color:isPress ? R.colors.white : R.colors.black,
                            fontSize:15
                            }}>
                {title}
                </Text>
                <FontAwesome name={isPress ?"angle-up" :"angle-down"} style={{left:30}} size={24} color={isPress ? R.colors.white : R.colors.colorBtnLogin} />
            </TouchableOpacity> 
            <View
                style={[
                    styles.pickerStyle,
                    {
                    display:isPress ? 'flex' :'none',
                    top:-8,
                    color: R.colors.black,
                    fontSize: 20,
                    fontWeight: '400',
                    backgroundColor: R.colors.colorBgInputText,
                    borderBottomLeftRadius:5,
                    borderBottomRightRadius:5,
                    borderWidth:0.2,
                    paddingVertical:10
                    }
                ]}
                >
                { questions1 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions1}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                widthInput={widthInput}
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                            />
                        </View>
                    </>
                ) : null
                    
                }
                
                { questions2 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                            {questions2}
                            </Text>
                            <View style={{alignItems:'center',paddingTop:5}}>
                                <CustomInput
                                    heightInput={heightInput}
                                    control={control}
                                    placeholder={'Điểm SV tự đánh giá'}
                                    name={name}
                                    widthInput={widthInput}
                                />
                            </View>
                    </>
                ):null

                }
                {questions3 ? (
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions3}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                                widthInput={widthInput}
                            />
                        </View>
                    </>
                ):null
                }
                {questions4 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions4}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                                widthInput={widthInput}
                            />
                        </View>
                    </>
                ):null

                }
                {questions5 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions5}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                                widthInput={widthInput}
                            />
                        </View>
                    </>
                ):null
                }
                {questions6 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions6}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                                widthInput={widthInput}
                            />
                        </View>
                    </>
                ):null
                }
                {questions7 ?(
                    <>
                        <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                        {questions7}
                        </Text>
                        <View style={{alignItems:'center',paddingTop:5}}>
                            <CustomInput
                                heightInput={heightInput}
                                control={control}
                                placeholder={'Điểm SV tự đánh giá'}
                                name={name}
                                widthInput={widthInput}
                            />
                        </View>
                    </>
                ):null
                }
            </View> 
        </View> 
  );
};

const styles = StyleSheet.create({
    txt: { 
        fontSize:14,
        fontWeight:'600',
        color:R.colors.black,
        paddingBottom:10
        },
    pickerStyle: {
        backgroundColor: 'white',
        marginTop: 5,
        fontSize: getFontXD(42),
        paddingHorizontal: 15,
        },
    
});

export default React.memo(PickerOpenInput);
