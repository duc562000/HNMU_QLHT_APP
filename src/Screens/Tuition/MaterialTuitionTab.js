import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import R from '../../assets/R';
import TableTuition from './TableTuition';


const Tab = createMaterialTopTabNavigator();
export const daNop=[
        {
            title:'HK1 2018-2019',
            hocky:'1',
            id:1,
            namhoc:'2018-2019',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'15',
            phainop:'4.450.000',
            danop:'4.450.000',
            thoigian:'5/11/2019',
            hinhthuc:'Nộp trực tiếp',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
        {
            title:'HK2 2019-2020',
            hocky:'2',
            id:2,
            namhoc:'2019-2020',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'18',
            phainop:'5.450.000',
            danop:'5.450.000',
            thoigian:'5/4/2019',
            hinhthuc:'Chuyển khoản',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
        {
            title:'HK1 2019-2020',
            hocky:'1',
            id:3,
            namhoc:'2019-2020',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'20',
            phainop:'6.150.000',
            danop:'6.150.000',
            thoigian:'9/12/2020',
            hinhthuc:'Chuyển khoản',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
        {
            title:'HK2 2020-2021',
            hocky:'2',
            id:4,
            namhoc:'2020-2021',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'18',
            phainop:'6.000.000',
            danop:'6.000.000',
            thoigian:'9/3/2021',
            hinhthuc:'Chuyển khoản',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
        {
            title:'HK1 2020-2021',
            hocky:'1',
            id:5,
            namhoc:'2020-2021',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'22',
            phainop:'6.850.000',
            danop:'6.850.000',
            thoigian:'20/5/2020',
            hinhthuc:'Chuyển khoản',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
        {
            title:'HK2 2021-2022',
            hocky:'2',
            id:6,
            namhoc:'2021-2022',
            status:'Đã thanh toán',
            icName :'check-circle',
            icColor:'green',
            tc:'20',
            phainop:'6.350.000',
            danop:'6.350.000',
            thoigian:'25/11/2020',
            hinhthuc:'Chuyển khoản',
            contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
        },
    ]


const chuanop=[
    {
        title:'HK1 2021-2022',
        hocky:'1',
        id:1,
        namhoc:'2021-2022',
        status:'Chưa nộp đủ',
        icName :'alert-circle',
        icColor:R.colors.brown,
        tc:'21',
        phainop:'6.650.000',
        danop:'6.350.000',
        thoigian:'25/11/2021',
        hinhthuc:'Chuyển khoản',
        contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
    },
    {
        title:'HK2 2022-2023',
        hocky:'2',
        id:2,
        namhoc:'2022-2023',
        status:'Chưa thanh toán',
        icName :'x-circle',
        icColor:'red',
        tc:'20',
        phainop:'6.650.000',
        danop:'0',
        thoigian:'Chưa nộp',
        hinhthuc:'Chưa nộp',
        contact:'Mọi thắc mắc vui lòng liên hệ phòng kế toán !'
    }
]
    




const MaterialTuitionTab = (props) => {
    
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
                
                    <Tab.Screen   name="Đã nộp" children={()=> <TableTuition data={daNop}  title={"Danop"} /> }  />
                    <Tab.Screen  name="Chưa nộp" children={()=> <TableTuition data={chuanop}  title={"chuanop"} /> } />
           </Tab.Navigator>
        </>
    )
}

export default MaterialTuitionTab