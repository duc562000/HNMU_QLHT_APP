import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,TextInput } from "react-native";


const InputInfoShort = (props) => {
    const {title,note,isBorder,isPassword,disable,style,handleBlur,handleChange,field,values,info} = props;
    return (
      <>
      <View style={{margin:15,flexDirection:'row',flex:1,position:'relative'}}>
          <Text style={{fontSize:17,color:'#6e6c6c',marginRight:50}}>{title}</Text>
          <TextInput
            style={{borderColor:'#6e6c6c', 
                    
                    flex:1,
                    borderWidth:1,
                    borderRadius:5,
                    backgroundColor:'#fff',
                    height:39,
                    fontSize:16,
                    paddingRight:30
                    }}
            secureTextEntry={isPassword}
            editable={disable}
            autoCapitalize="none"      
            placeholder={note}
            onChangeText={handleChange(field)}
            onBlur={handleBlur(field)}
            value={values[field]}
          >
            
          </TextInput>
          
        </View>
        {isBorder ?(<View style={{height:1,margin:15 ,backgroundColor:'#2c3092'}}/>) : null}
      </>
    );
  };
export default InputInfoShort;