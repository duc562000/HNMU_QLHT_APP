import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import InputForm from "../../components/Input/InputForm";
import R from "../../assets/R";
import PickerItem from "../../components/Picker/PickerItem";
import { getFontXD,getWidth } from "../../Config/Functions";


const CustomPickerItem =({control,title,placeholder,name,defaultValue,data}) => {
    return(
        <View style={{paddingHorizontal:15}} >
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                                    }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <PickerItem 
                                    width={getWidth()-40}
                                    value={value}
                                    data={data}
                                    title={title}
                                    onValueChange={onChange}
                                    defaultValue={defaultValue}
                                    onBlur={onBlur}
                                    /> 
                                )}
                                
                                name={name}
                            />  
                </View> 
    )
}

export default CustomPickerItem;