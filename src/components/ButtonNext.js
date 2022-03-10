import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import R from '../assets/R';
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from '../../Config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { LOGINSCREEN, TABNAVIGATOR } from '../../routers/ScreenNames';
const ButtonNext = props => {
  const {iconName,title,onPress,info,isColor} = props;
  const navigate = useNavigation();
  return (
    <>
     <TouchableOpacity 
        onPress={onPress}
        style={{flexDirection:'row',
                                    alignItems:'center',
                                    justifyContent:'space-between',
                                    paddingVertical:13,
                                    borderBottomWidth:0.2,
                                    borderTopWidth:0.2,
                                    borderColor:R.colors.gray3
                }}>
            
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                    <MaterialCommunityIcons name={iconName} size={32} color={isColor} />
                    <Text style={{fontSize:16,fontWeight:'500',paddingHorizontal:15,color:R.colors.black}}>{title}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                    <Text style={{fontSize:14,paddingHorizontal:10,color:R.colors.brown}}>{info}</Text>
                    <Feather name="chevron-right" size={24} color = {R.colors.colorBtnLogin} />
        
            </View>
          </TouchableOpacity>
    </>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  
});
