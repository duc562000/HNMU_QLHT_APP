import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity,Modal,ImageBackground} from "react-native";
import {HEIGHTXD, WIDTHXD, getFontXD} from "../../Config/Functions";
import R from "../../assets/R";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PickerDate from "../Picker/PickerDate";
import AntDesign  from "react-native-vector-icons/AntDesign";
import Button from '../../components/Button';


const TextField = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const {
    isChangePass,
    icPass,
    icUser,
    padding,
    name,
    title,
    onChangeText,
    isPassword,
    QRcode,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    isDate,
    fontSize,
    borderBottomColor,
    required,
    autoCapitalize,
    heightInput,
    widthInput,
    secureTextEntry,
    multiline
  } = props;
  return (
    <View>
      {title ? <Text style={{
        fontSize: R.fontsize.fontSizeLabel,
        fontWeight: '700',
        color: R.colors.black,
        marginBottom: 8
      }}>
        <Text>{title}</Text>
        {required && <Text style={{color: R.colors.red1}}> *</Text>}
      </Text> : null}
      <View style={{justifyContent: 'center'}}>
        <TextInput
          onBlur={onBlur}
          maxLength={maxLength ? maxLength : 256}
          placeholderTextColor={placeHolderColor ? placeHolderColor : '#8E8E8E'}
          editable={editable != null ? editable : true}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry ? secureTextEntry : isPassword && !showPassword }
          autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
          value={value}
          multiline={multiline ? true : false}
          fontSize={13}
          keyboardType={keyboardType}
          onChangeText={(val) => {
            if (keyboardType === 'number-pad') {
              const text = val.replace(/[^0-9]/g, "");
              onChangeText(text)
            } else {
              onChangeText(val)
            }
          }}
          style={{
            height: heightInput ? heightInput : 50,
            width:widthInput ? widthInput : 350,
            color: textColor ? textColor : R.colors.black,
            fontSize: fontSize ? fontSize : R.fontsize.fontSizeInputText,
            paddingVertical: 5,
            fontWeight: '500',
            paddingHorizontal: padding ? padding : 15,
            backgroundColor: R.colors.colorBgInputText,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />
        {isPassword && <TouchableOpacity style={{position: 'absolute', right: 17}}
                                         onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color={'#4B4B4B'}/>
        </TouchableOpacity>
        }
        
        {QRcode && <TouchableOpacity style={{position: 'absolute', right: 17}}
                                         
        >
          <FontAwesome name="qrcode" size={20} color="black" />
        </TouchableOpacity>
        }
        {isDate && <View style={{position: 'absolute', right: 17}}                         
          >
            <PickerDate/>
          </View>
        }
        {QRcode && <TouchableOpacity style={{position: 'absolute', right: 17}}
                                         
        >
          <FontAwesome name="qrcode" size={20} color="black" />
        </TouchableOpacity>
        }
        {isChangePass &&<>
          <TouchableOpacity onPress={() => setShowScoreModal(!showScoreModal)} style={{position: 'absolute', right: 17}}>
            <FontAwesome name="edit" size={20} color="black" />
          </TouchableOpacity>
           
                          
                          </> }
        {icUser && <View style={{position: 'absolute', left: 15,flexDirection:'row'}}
          
          >
            <FontAwesome name="user" size={21} color={R.colors.colorBtnLogin} />
            <View style={{marginLeft:10,height:20,width:0.5,backgroundColor:R.colors.black}}/>
          </View>
          }
        {icPass && <View style={{position: 'absolute', left: 15,flexDirection:'row'}}
        
        >
          <FontAwesome name="lock" size={21} color={R.colors.colorBtnLogin} />
          <View style={{marginLeft:10,height:20,width:0.5,backgroundColor:R.colors.black}}/>
        </View>
        }
      </View>
      <View
        style={{
          height: 20,
          marginTop: 5,
        }}
      >
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : R.colors.red1,
              fontSize: getFontXD(32),
            }}
          >
            *Vui lòng nhập { name ? name : null }*
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
