import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,TextInput } from "react-native";

const InputInfo = (props) => {
    const {title,note,handleChange,handleBlur,values,field} = props;
    return (
      <>
      <View style={{margin:15}}>
          <Text style={{fontSize:17,color:'#6e6c6c',marginBottom:5}}>{title}</Text>
          <TextInput
            style={{borderColor:'#6e6c6c', 
                    flex:1,
                    borderWidth:1,
                    borderRadius:5,
                    backgroundColor:'#fff',
                    height:39,
                    marginBottom:30,
                    fontSize:16}}
            placeholder={note}
            onChangeText={handleChange(field)}
            onBlur={handleBlur(field)}
            value={values[field]}
          />
          <View style={{height:1 ,backgroundColor:'#2c3092'}}/>
        </View>
      </>
    );
  };
export default InputInfo;