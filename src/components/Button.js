import React, { Component,useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Modal
} from "react-native";
import R from "../assets/R";
import { colors, sizes } from "../assets/theme";
import { getFontXD, getWidth, HEIGHTXD, WIDTHXD } from "../Config/Functions";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";

const Button = (props) => {
  const showModalOnPress = () => {
    onPress(true)
    setShowScoreModal(true);
    setTimeout(() => {
      setShowScoreModal(false);
    }, 3000);
  };
  const [showScoreModal, setShowScoreModal] = useState(false)
  const { title,transformStyle, onPress, containerStyle,txtContent, txtStyle, backgroundColor,heightBtn,widthBtn,isModalSuccess } = props;
  const renderContent = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text
        style={[
          {
            fontSize: 16,
            color: R.colors.white,
            fontWeight: "700",
            textTransform: transformStyle ? transformStyle : "uppercase",
          },
          { ...txtStyle },
        ]}
      >
        {title}
      </Text>
    </View>
  );
  return (
    <TouchableOpacity
      style={[
        {
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          elevation: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1,
          backgroundColor:R.colors.colorBtnLogin,
          width: widthBtn ? widthBtn : 350,
          height: heightBtn ? heightBtn : 55,
          borderRadius:10,
        },
        { ...containerStyle },
      ]}
      disabled={props.disabled}
      onPress={isModalSuccess ? () => showModalOnPress() : onPress}
    >
      {isModalSuccess ?
      <>
          <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       
                       marginTop:80,
                       flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <ImageBackground
                        source={R.images.bgLogo}
                        borderRadius={20}
                        style={{
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <View style={{
                               
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 23,
                                   padding:25,
                                   fontWeight:'600',
                                   color: R.colors.black,
                                   textAlign:'center'
                               }}>{txtContent} thành công !</Text>
                               <FontAwesome5 name="check-circle" size={55} color="green" />
                           </View>
                           
                       </ImageBackground>

                   </View>
               </Modal>
      </>
                      : null
      }
      {!props.noBackgroundImage ? (
        <ImageBackground
          source={
            props.disabled ? R.images.bgDisableButton : R.images.bgBtn
          }
          style={{ width: widthBtn ? widthBtn : 350, height: heightBtn ? heightBtn : 55,borderRadius: 10,overflow:"hidden" }}
          
        >
          {renderContent()}
        </ImageBackground>
      ) : (
        renderContent()
      )}
    </TouchableOpacity>
  );
};
export default Button;
