
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import {HEIGHTXD, WIDTHXD, getFontXD} from "../../Config/Functions";
import R from "../../assets/R";
import DropDownPicker from 'react-native-dropdown-picker';
import I18n from "../../helper/i18/i18n";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonRadio from "../ButtonRadio";


const PickerOpenDetails = (props) => {
    const{title,questions1,questions2,questions3,questions4,questions5} = props
    const [isPress, setIsPress] = useState(false);
  return (
    <View style={{paddingHorizontal:15,paddingTop:15}} >
            <TouchableOpacity
                onPress={() => {setIsPress(!isPress)}}
                style={[
                    styles.pickerStyle,
                    {
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'flex-start',
                    width: 360,
                    color: R.colors.black,
                    fontSize: 20,
                    fontWeight: '400',
                    backgroundColor: isPress ? R.colors.lightBlue : R.colors.colorBgInputText,
                    borderRadius: 5,
                    borderWidth:0.2,
                    paddingVertical:10
                    }
                ]}
                >
                <Text style={{width:280,
                            color:isPress ? R.colors.white : R.colors.black,
                            fontSize:15
                            }}>
                {title}
                </Text>
                <FontAwesome name={isPress ?"angle-up" :"angle-down"} style={{left:30}} size={24} color={isPress ? R.colors.white : R.colors.colorBtnLogin} />
            </TouchableOpacity> 
            <View
                style={[
                    styles.pickerStyle,
                    {
                    display:isPress ? 'flex' :'none',
                    top:-8,
                    color: R.colors.black,
                    fontSize: 20,
                    fontWeight: '400',
                    backgroundColor: R.colors.colorBgInputText,
                    borderBottomLeftRadius:5,
                    borderBottomRightRadius:5,
                    borderWidth:0.2,
                    paddingVertical:10
                    }
                ]}
                >
                <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                {questions1}
                </Text>
                <ButtonRadio/>
                <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                {questions2}
                </Text>
                <ButtonRadio/>
                <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                {questions3}
                </Text>
                <ButtonRadio/>
                {questions4 ? (
                <>
                <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                {questions4}
                </Text>
                <ButtonRadio/>
                </>
                ) : null
                }
                {questions5 ? (
                <>
                <Text style={{color:R.colors.colorBtnLogin,fontSize:15}}>
                {questions5}
                </Text>
                <ButtonRadio/>
                </>
                ) : null
                }
            </View> 
        </View> 
  );
};

const styles = StyleSheet.create({
    txt: { 
        fontSize:14,
        fontWeight:'600',
        color:R.colors.black,
        paddingBottom:10
        },
    pickerStyle: {
        backgroundColor: 'white',
        marginTop: 5,
        fontSize: getFontXD(42),
        paddingHorizontal: 15,
        },
    
});

export default React.memo(PickerOpenDetails);
