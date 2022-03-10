import React, { useEffect,useState,Component } from "react";
import { ScrollView, StyleSheet, Text, View ,TextInput, KeyboardAvoidingView,Modal,Pressable} from "react-native";
import R from "../../assets/R";
import { getFontXD } from "../../Config/Functions";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import PickerDate from "../../components/Picker/PickerDate";
import { showAlert, TYPE } from "../../components/DropdownAlert";
import PickerAvatart from "../../components/Picker/PickerAvatart";
import TextForm from "../../components/Input/InputForm";
import InfoList from "./InfoList";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputInfo from "./InputInfo";
import InputInfoShort from "./InputInfoShort";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import Button from "../../components/Button";
import ModalSave from "../../components/Picker/ModalSave";
import { Formik } from 'formik';
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import MaterialInfoTab from "./MaterialInfoTab";



const AccountView = (props) => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);
  const [modalSave, setModalSave] = useState(false);
  const [modalEditPass, setModalEditPass] = useState(false);
  return (
    <View style={{flex:1}}>
      <HeaderTitleLeft title={'THÔNG TIN CÁ NHÂN'} isExit={true} />
          <MaterialInfoTab/>
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
    fontSize: getFontXD(40),
  },
  txtInfo : {
    fontSize: getFontXD(50),
    fontWeight:'bold',
    color:'black',
    marginTop:15
  },
  txtDoipass: {
    fontSize: getFontXD(35),
    color: '#2c3092',
    fontWeight: "bold",
    textDecorationLine:'underline'
  },
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalView: {
    
    padding:20,
    backgroundColor: "white",
    borderRadius: 20,
    width:300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 1,
    textAlign: "center",
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20,
  }
});

export default AccountView;
