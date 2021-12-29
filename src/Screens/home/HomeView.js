import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import R from "../../assets/R";
import { getFontXD, WIDTHXD, WIDTHXDICON } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import SwiperComponent from "./SwiperComponent";
import InputForm from "../../components/Input/InputForm";

const HomeView = (props) => {
  const navigation = useNavigation();
  const { listItem, listItem2 } = props;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: R.colors.white,
        paddingHorizontal: 10,
      }}
    >
      <Text>Home</Text>

      <InputForm title={"Ten dang nhap"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: WIDTHXDICON(150),
    height: WIDTHXDICON(150),
  },
  containerItem: {
    width: WIDTHXDICON(170),
    height: WIDTHXDICON(170),
    borderRadius: WIDTHXD(30),
    marginHorizontal: WIDTHXD(20),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: R.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  txtTitle: {
    fontSize: getFontXD(36),
    marginTop: 5,
    textAlign: "center",
    maxWidth: WIDTHXD(220),
  },
  txtHeader: {
    color: R.colors.orange,
    fontSize: getFontXD(36),
    marginTop: 5,
    marginHorizontal: WIDTHXD(40),
    marginVertical: WIDTHXD(40),
  },
});

export default HomeView;
