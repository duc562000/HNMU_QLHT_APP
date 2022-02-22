import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import R from "../assets/R";
import { colors, sizes } from "../assets/theme";
import { getFontXD, HEIGHTXD, WIDTHXD } from "../Config/Functions";
import LinearGradient from "react-native-linear-gradient";

const Button = (props) => {
  const { title, onPress, containerStyle, txtStyle, backgroundColor } = props;
  return (
    <TouchableOpacity
      style={[
        {
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor,
          borderRadius: 5,
          marginVertical: HEIGHTXD(50),
          marginLeft:50,
          marginRight:50,
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2.84,
        },
        { ...containerStyle },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            fontSize: getFontXD(46),
            color: '#fff',
            fontWeight:'bold',
            fontWeight: "600",
            padding:10
          },
          { ...txtStyle },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
