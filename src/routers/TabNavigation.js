import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import colors from "../assets/colors";
import Home from "../Screens/home/Home";

import Notification from "../Screens/notification/Notification";
import Account from "../Screens/Account/Account";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();


const TabNavigator = (props) => {
  
  return (
    
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ 
          activeTintColor: '#ace8ff' ,
          style:{backgroundColor: '#2c3092'},
          activeBackgroundColor:'#3961d7',
          inactiveTintColor:'#fff',
          labelStyle: {
            fontSize: 13,
          },
         }}
        
      >
        <Tab.Screen
          
          name="HomeScreen"
          component={Home}
          options={{
            
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome  name="home" size={size} color={color} />
            ),
            
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={Notification}
          options={{
            tabBarLabel: "Thông báo",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={size} color={color} />
            ),
            tabBarBadge: 3 ,
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Account}
          options={{
            tabBarLabel: 'Cá nhân' ,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
