import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import R from "../../assets/R";
import { getFontXD } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import PickerDate from "../../components/Picker/PickerDate";
import { showAlert, TYPE } from "../../components/DropdownAlert";

const AccountView = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header title={"Account"} />

      <Text>Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  containerItem: {
    backgroundColor: R.colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  wrapContent: {
    paddingLeft: 15,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: getFontXD(46),
  },
});

export default AccountView;
