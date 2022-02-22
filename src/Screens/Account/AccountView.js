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



const AccountView = (props) => {
 
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const onChangeText = text => setText(text);
  const [modalSave, setModalSave] = useState(false);
  const [modalEditPass, setModalEditPass] = useState(false);
  return (
    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <Header title={"Sơ yếu lý lịch"} icons = {'user-graduate'} isLogout={true}/>
        <ScrollView>
          <Formik
              initialValues={ { 
                hktt: 'nam dinh',
                quequan: 'nam dinh',
                dantoc: '',
                sodienthoai: '',
                matkhau: '',
                matkhaucu:'',
                matkhaumoi:'',
                nhaplaimkmoi:'',
              }}
              onSubmit={values => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <View style={{margin:15,flexDirection:'row'}}>
              <PickerAvatart/>
              <View style={{flexDirection:'column',margin:15}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'#0b045e'}}>Nguyễn Minh Đức</Text>
                <Text style={{fontSize:17,fontWeight:'bold',color:'#6e6c6c'}}>Mã sinh viên : 218401109</Text>
              </View>
            </View>
            <View style={{height:6 ,backgroundColor:'#2c3092'}}/>
            <InfoList 
              title='Ngày sinh'
              info='5/6/2000'
              isBorder = 'true'
            />
            <InfoList 
              title='Khoa'
              info='KHTN & CN'
              isBorder = 'true'
            />
            <InfoList 
              title='Lớp'
              info='CNTT D2018B'
              isBorder = 'true'
            />
            <InfoList 
              title='Số CCCD'
              info='036200007451'
              isBorder = 'true'
            />
            <InfoList 
              title='Hệ đào tạo'
              info='Đại học chính quy'
              isBorder = 'true'
            />
            <InfoList 
              title='Niên khóa'
              info='2018-2022'
              
            />
            <View style={{height:6 ,backgroundColor:'#2c3092'}}/>
            
            <InputInfo 
              title='HKTT' 
              note='Hộ khẩu thường trú'
              field='hktt'
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <InputInfo 
              title='Quê quán' 
              note='Quê Quán'
              field='quequan'
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            
            <InputInfoShort 
              title='Dân tộc' 
              note ='Dân tộc' 
              isBorder='true'
              field='dantoc'
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <InputInfoShort 
              title='Số điện thoại' 
              note ='Số điện thoại' 
              isBorder='true'
              field='sodienthoai'
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <InputInfoShort 
              title='Mật khẩu' 
              note ='********' 
              isPassword={true} 
              disable={false}
              field='matkhau'
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              />
            
            <TouchableOpacity style={{left:295,top:-15}} onPress={() => setModalEditPass(true)}>
              <Text style={styles.txtDoipass}>Đổi mật khẩu</Text>
            </TouchableOpacity>
            <View style={[styles.centeredView]}>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    backdrop={true}
                    visible={modalEditPass}
                  >
                    <View style={styles.centeredView}>
                      <View style={[styles.modalView,{flex:4/8}]}>
                        
                        <InputInfoShort  
                          note ='Mật khẩu cũ' 
                          field='matkhaucu'
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                        <InputInfoShort  
                          note ='Mật khẩu mới' 
                          field='matkhaumoi'
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          />
                        <InputInfoShort  
                          field='nhaplaimkmoi'
                          note ='Nhập lại khẩu mới' 
                          values={values}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          />
                        
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30,paddingLeft:30}}>
                          <Button
                            backgroundColor={"#2c3092"}
                            title={("Đồng ý")}
                            onPress={handleSubmit}
                          />
                          <Button
                            backgroundColor={"red"}
                            title={('Hủy')}
                            onPress={() => setModalEditPass(!modalEditPass)}
                          />
                        </View>  
                        
                      </View>
                    </View>
                  </Modal>
                </View>
            
            <Button
              backgroundColor={"#2c3092"}
              title={("Lưu thay đổi")}
              onPress={() => setModalSave(true)}
            />
              <View style={styles.centeredView}>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    backdrop={true}
                    visible={modalSave}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Bạn có muốn lưu thay đổi ?</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                          <Button
                            backgroundColor={"#2c3092"}
                            title={("Đồng ý")}
                            onPress={handleSubmit}
                          />
                          <Button
                            backgroundColor={"red"}
                            title={('Hủy')}
                            onPress={() => setModalSave(!modalSave)}
                          />
                        </View>  
                        
                      </View>
                    </View>
                  </Modal>
              </View>
                </>
              )}
            
            </Formik>
        </ScrollView>
      
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
