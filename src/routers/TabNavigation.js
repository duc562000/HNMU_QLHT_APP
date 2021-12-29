import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";

import Home from "../Screens/home/Home";
import History from "../Screens/history/History";
import Notification from "../Screens/notification/Notification";
import Account from "../Screens/Account/Account";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ activeTintColor: R.colors.main }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={History}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="history" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="NotificationScreen"
          component={Notification}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Account}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={size} color={color} />
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
