import React, { Component, useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {
  checkFormatArray,
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
} from "../../Config/Functions";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

import {
  REGISTER,
  TABNAVIGATOR,
  FORGOTPASSWORD,
} from "../../routers/ScreenNames";
import I18n from "../../helper/i18/i18n";
import { showAlert, TYPE } from "../../components/DropdownAlert";
import { loginApi } from "../../apis/Functions/users";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { saveUserToRedux } from "../../actions/users";
import { connect } from "react-redux";
import KEY from "../../assets/AsynStorage";
import AsyncStorage from "@react-native-community/async-storage";
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/Input/InputForm";
import AppText from "../../components/AppText";
import Button from "../../components/Button";

const Login = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigation();

  const onSubmit = (data) => {
    navigate.navigate(TABNAVIGATOR);
    console.log(data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "blue", paddingHorizontal: 10 }}>
      <View style={{ marginTop: HEIGHTXD(760) }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextForm
              textColor={R.colors.white}
              placeHolderColor={"#80E0FF"}
              placeholder={I18n.t("EnterUsername")}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.username}
            />
          )}
          name="username"
          defaultValue=""
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextForm
              textColor={R.colors.white}
              placeHolderColor={"#80E0FF"}
              title={"password"}
              placeholder={I18n.t("EnterPass")}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isPassword={true}
              error={errors.password}
            />
          )}
          name="password"
          defaultValue=""
        />
        <View style={styles.row}>
          <View />
          <TouchableOpacity onPress={() => navigate.navigate(FORGOTPASSWORD)}>
            <AppText style={styles.txtTitle} i18nKey={"ForgotPassword"} />
          </TouchableOpacity>
        </View>
        <Button
          onPress={handleSubmit(onSubmit)}
          backgroundColor={"#FFC700"}
          title={I18n.t("Login")}
        />
        <Button
          onPress={() => navigate.navigate(REGISTER)}
          backgroundColor={"#55CEBF"}
          title={I18n.t("Register")}
        />
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigate.navigate(TABNAVIGATOR)}>
            <AppText style={styles.txtTitle} i18nKey={"GoBackHome"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: "600",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  saveUserToRedux,
  showLoading,
  hideLoading,
})(Login);
