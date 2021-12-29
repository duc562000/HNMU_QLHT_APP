import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import StackNavigation from "./routers/StackNavigation";
import { connect } from "react-redux";
import DropdownAlert from "react-native-dropdownalert";
import DropdownManager from "./components/DropdownAlert/DropdownManager";
import R from "./assets/R";
import { WIDTHXD, HEIGHTXD } from "./Config/Functions";
import { SkypeIndicator } from "react-native-indicators";
import Modal from "react-native-modal";
import { TestAPI } from "./apis/Functions/users";

const RootView = (props) => {
  useEffect(() => {
    DropdownManager.register(
      dropDownAlertRef.current,
      dropDownAlertLongTimeRef.current
    );
  }, []);

  const dropDownAlertRef = useRef(null);
  const dropDownAlertLongTimeRef = useRef(null);

  return (
    <>
      <StackNavigation />
      <Modal isVisible={props.loadingModal.isVisible}>
        <SkypeIndicator color={"white"} />
      </Modal>
      <DropdownAlert
        inactiveStatusBarBackgroundColor={R.colors.main}
        activeStatusBarBackgroundColor={R.colors.main}
        warnImageSrc={R.images.iconWarn}
        successImageSrc={R.images.iconSuccess}
        errorImageSrc={R.images.iconError}
        titleStyle={{ color: "#fff" }}
        messageStyle={{ color: "#fff" }}
        updateStatusBar={false}
        closeInterval={1000}
        ref={dropDownAlertRef}
        warnColor={R.colors.orange400}
        defaultContainer={{
          borderBottomRightRadius: WIDTHXD(30),
          borderBottomLeftRadius: WIDTHXD(30),
          paddingTop: HEIGHTXD(30),
          paddingVertical: HEIGHTXD(30),
          paddingHorizontal: WIDTHXD(20),
        }}
      />
      <DropdownAlert
        updateStatusBar={false}
        inactiveStatusBarBackgroundColor={R.colors.colorMain}
        activeStatusBarBackgroundColor={R.colors.colorMain}
        warnImageSrc={R.images.iconWarn}
        successImageSrc={R.images.iconSuccess}
        errorImageSrc={R.images.iconError}
        titleStyle={{ color: "#fff" }}
        messageStyle={{ color: "#fff" }}
        closeInterval={600000}
        ref={dropDownAlertLongTimeRef}
        warnColor={R.colors.orange400}
        defaultContainer={{
          borderBottomRightRadius: WIDTHXD(30),
          borderBottomLeftRadius: WIDTHXD(30),
          paddingTop: HEIGHTXD(30),
          paddingVertical: HEIGHTXD(30),
          paddingHorizontal: WIDTHXD(20),
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {})(RootView);
