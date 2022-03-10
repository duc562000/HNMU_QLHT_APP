
import React,{useEffect, useState,Component} from "react";
import { View, Text,SafeAreaView,ActivityIndicator,FlatList,StyleSheet ,TouchableOpacity,Alert,Linking,Image, ImageBackground} from "react-native";
import R from "../../assets/R";
import HeaderTitleCenter from "../../components/Header/Header";
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import { LOGINSCREEN, NOTIFICATION_DETAILS } from "../../routers/ScreenNames";
import { WebView } from 'react-native-webview';

class AdMissionWebview extends Component {
    render() {
      return (
        <>
        <ImageBackground source={R.images.bgBody} style={{ flex: 1}}>
            <HeaderTitleCenter title={"Trang tin tuyển sinh"} isBack={true} />
            <WebView  source={{ uri: 'https://hnmu.edu.vn/tuyen-sinh.html' }} />           
        </ImageBackground>
        
        </>
      );
    }
  }

// const AdMissionWebview = (props) => {
//     return(
//         <>
//             
//         </>
//         );
//     }

export default AdMissionWebview;

const styles = StyleSheet.create({
    
})
