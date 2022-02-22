import React from "react";
import { View, Text,TextInput } from "react-native";

import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import R from "../../assets/R";
import I18n from "../../helper/i18/i18n";
import Feather from "react-native-vector-icons/Feather"


const TextField = (props) => {
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    fontSize,
  } = props;

  return (
    
    <View style={{marginLeft:50,marginRight:50,marginBottom:5,}}>
  
      <TextInput
        onBlur={onBlur}
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={placeHolderColor}
        editable={editable != null ? editable : true}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        value={value}
        fontSize={13}
        keyboardType={keyboardType}
        onChangeText={(val) => onChangeText(val)}
        
        style={{
          height: HEIGHTXD(109),
          backgroundColor:'#fff',
          borderRadius:5,
          color: '#000',
          borderWidth: 1,
          fontSize: fontSize ? fontSize : getFontXD(42),
          paddingLeft:30,
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderColor:'#9fc5f8',
          
        }}
      />
      
      <View
        style={{
          height: 20,
          paddingHorizontal: 5,
        }}
        
      >
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : "red",
              fontSize: getFontXD(32),
            }}
          >
            {("Tài khoản hoặc mật khẩu không hợp lệ !")}
          </Text>
        )}
      </View>
    </View>
    
  );
};

export default React.memo(TextField);
