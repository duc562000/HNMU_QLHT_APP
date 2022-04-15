import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { Controller , useForm} from "react-hook-form";
import InputForm from "../../components/Input/InputForm";
import R from "../../assets/R";
import PickerItem from "../../components/Picker/PickerItem";
import { getFontXD,getWidth } from "../../Config/Functions";


const CustomPickerItem =({control,title,placeholder,name,defaultValue,data,value,onValueChange}) => {
    const {
    } = useForm();
    return(
        <View style={{paddingHorizontal:15}} >
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                                    }}
                            render={({ field: { onChange,value}}) => (
                                // console.log(value),
                                <PickerItem 
                                    value={value}
                                    onValueChange ={(value,name) => {
                                        onChange(name) || onValueChange(value,name)
                                    }}
                                    width={getWidth()-40}
                                    data={data}
                                    title={title}
                                    defaultValue={defaultValue}
                                    /> 
                                )}
                                
                                name={name}
                            />  
                </View> 
    )
}

export default CustomPickerItem;