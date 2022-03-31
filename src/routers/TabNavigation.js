import React, { useState,useRef,useEffect } from "react";
import { Image, View,StyleSheet,Text,TouchableOpacity, Alert, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationHelpersContext, useNavigationContainerRef  } from '@react-navigation/native';
import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import colors from "../assets/colors";
import Home from "../Screens/home/Home";
import FlatlistDataNoti from "../Screens/notification/FlatlistDataNoti";
import Notification from "../Screens/notification/Notification";
import Account from "../Screens/Account/Account";
import { color } from "react-native-reanimated";
import { NOTIFICATION_SCREEN } from "./ScreenNames";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();


const TabNavigator = (props) => {
  const navigate = useNavigation();
  const [isClicked,setiClicked] = useState(false)
  const ref = useNavigationContainerRef(null);
  const item = props.route.params.item
  return (
    
    <View style={{ flex: 1 }} >
      
      <Tab.Navigator   
        initialRouteName="Screen5"
        tabBarOptions={{
          showLabel:false,
          style:{
            backgroundColor:'#ededed',
            borderRadius:20,
            ...styles.shadow
          }
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          initialParams={{item}}
          options={{
            tabBarIcon: ({ color, size,focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:8}}>
                <FontAwesome style={{paddingBottom:5}}  name="home" size={size+5} color={focused ? R.colors.lightBlue : '#878686'} />
                <Text style={{fontSize:12,fontWeight:'500',color:focused ? R.colors.lightBlue : '#878686'}}>Trang chủ</Text>
              </View>
            ),
            
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={Notification}
          listeners={{
            tabPress: () => {
              setiClicked(true)
            }
          }}
          options={{
            tabBarLabel: "Thông báo",
            tabBarOnPress: ({click}) => {
              click(setiClicked(true))
              
            },
            
            tabBarIcon: ({ color, size,focused,click }) => (
              <ImageBackground 
                borderWidth={5}
                borderColor={'#fff'}
                borderRadius={80} 
                source={R.images.bgMainAvt} 
                style={{alignItems:'center',
                              justifyContent:'center',
                              top:8,
                              height:80,
                              width:80,
                              marginBottom:25,
                              paddingBottom:12,
                              }}>
                <Octicons style={{paddingBottom:3}} name="bell" size={size+3} color={focused ? R.colors.lightBlue2 : '#fff'} />
                  <Text style={{fontSize:12,fontWeight:'700',color:focused ? R.colors.lightBlue2 : '#fff'}}>Thông báo</Text>
                {isClicked ? null : (
                  <View style={{
                    position:'absolute',
                    backgroundColor:'red',
                    width:16,
                    height:16,
                    alignItems:'center',
                    borderRadius:18,
                    top:8,
                    right:22,
                    justifyContent:'center'
                    }}>
                    <Text style={{
                      fontSize:13,
                      textAlign:'center',
                      color:R.colors.white,
                      fontWeight:'900'
                    }}
                    >{FlatlistDataNoti.length}</Text>
                  </View>
                )
                }
              </ImageBackground>
            ),
            // tabBarBadge: FlatlistDataNoti.length,
            
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Account}
          initialParams={{item}}
          options={{
            tabBarLabel: 'Cá nhân' ,
            tabBarIcon: ({ color, size,focused }) => (
              <View style={{alignItems:'center',justifyContent:'center',top:8}}>
                <FontAwesome style={{paddingBottom:5}} name="user-circle-o" size={size+3} color={focused ? R.colors.lightBlue : '#878686'} />
                <Text style={{fontSize:12,fontWeight:'500',color:focused ? R.colors.lightBlue : '#878686'}}>Cá nhân</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles=StyleSheet.create({
  shadow: {
    borderWidth:1,
    shadowOpacity:0.2,
    shadowRadius:2,
    borderColor:'#ccc',
    elevation:1,
    position:'absolute'
  }
})

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
