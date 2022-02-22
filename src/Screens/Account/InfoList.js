import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

const InfoList = (props) => {
    const {title,info,isBorder} = props;
    return (
      <>
      <View style={{margin:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
            <Text style={{fontSize:17,color:'#6e6c6c'}}>{title}</Text>
            <Text style={{fontSize:17,color:'#2c3092'}}>{info}</Text>
          </View>
          {isBorder ? (<View style={{height:1 ,backgroundColor:'#2c3092'}}/>) :null}
        </View>
      </>
    );
  };
export default InfoList;