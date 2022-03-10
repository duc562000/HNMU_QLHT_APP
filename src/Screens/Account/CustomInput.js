import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import InputForm from "../../components/Input/InputForm";
import R from "../../assets/R";


const CustomInput =({control,title,placeholder,name,defaultValue,QRcode,heightInput,widthInput,keyboardType,onChangeText}) => {
    return(
        <View style={{paddingHorizontal:15}} >
                            <Controller
                                control={control}
                                rules={{
                                    required: false,
                                        }}
                                render={({ field: { onChange, onBlur, value, } }) => (
                                    <InputForm
                                            QRcode={QRcode}
                                            textColor={R.colors.black}
                                            onBlur={onBlur}
                                            editable={true}
                                            onChangeText={onChange}
                                            value={value}
                                            placeHolderColor={"#333"}
                                            placeholder={placeholder}
                                            title={title}
                                            heightInput={heightInput}
                                            widthInput={widthInput}
                                            keyboardType={keyboardType}
                                    />
                                    )}
                                    name={name}
                                    defaultValue={defaultValue}
                                />  
        </View> 
    )
}

export default CustomInput;