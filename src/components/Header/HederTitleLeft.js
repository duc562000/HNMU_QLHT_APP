import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert
} from "react-native";
import R from "../../assets/R";
import {
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import { LOGINSCREEN, TABNAVIGATOR } from "../../routers/ScreenNames";
import { useNavigation } from "@react-navigation/native";
import SnackBar from "../SnackBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-community/async-storage";

const HeaderTitleLeft = (props) => {
  const { title, isBack, isTransparent, hideShadow ,QRcode,isIconNoti,isRed,isTittleCenter,isExit} = props;
  const navigate = useNavigation();
  return (
    <>
    <ImageBackground source={R.images.bgBtn} style={{width:"100%"}}>
      <SafeAreaView
        style={{
          flex: 0,
        }}
      />
      <StatusBar
        backgroundColor="light"
        translucent={false}
        barStyle="light-content"
      />
      <SnackBar />
      {isTittleCenter && (
          <Text
          numberOfLines={1}
          style={[
            styles.txtTitleCenter,
            {color: isTransparent ? R.colors.white : R.colors.brown},
          ]}>
          {title}
          </Text>
        )}

      <View
        style={
          isTransparent
            ? styles.headerContainerTransparent
            : hideShadow
            ? styles.headerContainer
            : styles.headerContainer
        }
      >
        <Text
          numberOfLines={1}
          style={[
            styles.txtTitle,
            { color: R.colors.white },
          ]}
        >
          {title}
        </Text>
        {QRcode && <TouchableOpacity style={{position: 'absolute', top:10,right:60}}
                                         
        >
          <FontAwesome name="qrcode" size={25} color="white" />
        </TouchableOpacity>
        }
        {isIconNoti && <TouchableOpacity style={{position: 'absolute', top:10,right:15}}
        
        >
          <FontAwesome name="bell-o" size={25} color="white" />
        </TouchableOpacity>
        }
        {isRed && <View style={{position: 'absolute', top:10,right:16,height:10,width:10,backgroundColor:R.colors.red,borderRadius:10}}
        />
        }
        {isExit && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top:5,
              right: 0,
              width: 50,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              Alert.alert(
                'Bạn muốn đăng xuất ?',
                '',
                [
                  {text: 'Đăng xuất',style:'default',onPress: () => {
                    AsyncStorage.clear();
                    navigate.reset({
                      index: 0,
                      routes: [{ name: LOGINSCREEN }],
                    });
                    Alert.alert('Đăng xuất thành công')
                  }},
                  
                  {text: 'Hủy',style:'cancel', onPress: () => console.log('Cancel Pressed!')},
                ],
                { cancelable: false }
              )
              
              }}>
            <Ionicons name="log-out-outline" size={30} color={R.colors.white} />
          </TouchableOpacity>
        )}
        {props.addPress && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 10,
            }}
            onPress={props.addPress}
          >
            <Ionicons
              name={"ios-add-circle-outline"}
              size={WIDTHXDICON(80)}
              color={isTransparent ? R.colors.white : R.colors.black}
            />
          </TouchableOpacity>
        )}
        {isBack && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 10,
              width: 35,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              
              navigate.goBack();
            }}
          >
            <Ionicons
              color={isTransparent ? R.colors.white : R.colors.white}
              name={'chevron-back'}
              size={22}
            />
          </TouchableOpacity>
        )}
        {props.filterPress && (
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 20,
            }}
            onPress={props.filterPress}
          >
            <Image
              source={R.images.icFilter}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
    </>
  );
};

export default HeaderTitleLeft;

const styles = StyleSheet.create({
  headerContainerShadow: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor: R.colors.black,
    shadowColor: R.colors.black,
    justifyContent: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 1,
    elevation: 5,
  },

  headerContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainerTransparent: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: WIDTHXD(40),
    alignItems: "center",
    backgroundColor:R.colors.black ,
  },
  txtTitle: {
    flex: 1,
    position:'absolute',
    left:10,
    top:10,
    fontSize: getFontXD(45),
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "900",
    color: R.colors.white,
  },
  txtTitleCenter: {
    flex: 1,
    fontSize: getFontXD(42),
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: R.colors.black,
  },
});
