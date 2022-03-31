import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import R from '../../assets/R';
import InfoMain from './InfoMain';
import InfoOther from './InfoOther';


const Tab = createMaterialTopTabNavigator();
export const data={
    info:  {
         name : 'Nguyễn Minh Đức',
         avt : require('../../assets/images/avatarSv.jpg'),
         dateOfBirth:'5/6/2000',
         studentCode:'218401xxx',
         sexdual:'Nam',
         yearSchool:'2018-2022',
         major:'Công nghệ thông tin',
         CCCD:'0362000xxxx',
         Pass:'05062000',
         address:'18 Nam Trực, Tp.Nam Định',
         Xa:'Nam Hải',
         Huyen:'Nam Trực',
         Tinh:'Nam Định',
         QuocTich:'Việt Nam',
         Dantoc:'Kinh',
         TonGiao:'Không',
        email:'duc562000@gmail.com',
        bhyt:'012727428381231',
        sdt:'0833434xxx',
        qr:require('../../assets/images/qrCode.png')
    },
    
}



const MaterialInfoTab = (props) => {
    const item = props.item
    return (
        <>
            <Tab.Navigator
            
                screenOptions={{
                    tabBarLabelStyle: {fontSize:18,fontWeight:'bold',textTransform:'none' },
                    tabBarActiveTintColor:R.colors.colorBtnLogin,
                    
                    tabBarIndicatorStyle :{
                        backgroundColor:R.colors.lightBlue,
                        width:169,
                        left:15,
                        height:4,
                    },
                    tabBarStyle:{
                        textAlign:'center',
                        height:50,
                        backgroundColor:R.colors.white,
                    },   
                  }}
            >
                
                    <Tab.Screen   name="Thông tin chính" children={props => (<InfoMain data={data} dataAPI = {item} title={"ban tin chih"} {...props} />) }  />
                    <Tab.Screen  name="Thông tin khác" children={props => (<InfoOther data={data}  dataAPI = {item} title={"ban tin chih 121"} {...props} />) } />
           </Tab.Navigator>
        </>
    )
}

export default MaterialInfoTab