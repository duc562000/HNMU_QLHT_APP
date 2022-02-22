import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import R from "../../assets/R";
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import { LOGINSCREEN } from "../../routers/ScreenNames";

const Header = (props) => {
  const { title, isBack, addPress,icons,isLogout} = props;
  
  const navigate = useNavigation();
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: '#2c3092',
        }}
      />

      <View style={styles.headerContainer}>
        {isBack ? (
          <TouchableOpacity
            style={{ width: 35, height: 30 }}
            onPress={() => navigate.goBack()}
          >
            <Icon color={R.colors.white} name={"arrowleft"} size={22} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 35, height: 30 }} />
        )}
        
        <FontAwesome5 name={icons} style={{position:'absolute',left:130}} size={23} color={R.colors.white} />
        <Text numberOfLines={1} style={styles.txtTitle}>
          {title}
        </Text>
        
        {isLogout ? (
          <TouchableOpacity
            onPress={() => navigate.navigate(LOGINSCREEN)}
          >
            <FontAwesome5
              name={"sign-out-alt"}
              size={WIDTHXDICON(80)}
              color={R.colors.white}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 35, height: 30 }} />
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: HEIGHTXD(180),
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: '#2c3092',
    shadowColor: "#181F4D21",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  txtTitle: {
    alignItems:'center',
    marginLeft:30,
    flex: 1,
    fontSize: getFontXD(45),
    textAlign:'center',
    fontWeight: "bold",
    color: R.colors.white,
    textTransform: "uppercase",
    
  },
});
