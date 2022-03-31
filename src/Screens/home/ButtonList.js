import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";
import R from "../../assets/R";

const ButtonList = (props) => {
    const { title,iconsName,Screen} = props;
    const navigate = useNavigation();
    const handlePress = () => navigate.navigate(Screen);
    return (
      <>
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Button 
                  icon={
                      <Icon
                          name={iconsName}
                          size={39}
                          color={R.colors.lightBlue}
                      />
                  }
                  buttonStyle={{
                    alignItems:'center',
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    width: 69,
                    height:69,
                    shadowOpacity:0.05,
                    borderColor:'#fff',
                  }}
                  onPress={handlePress}
                />
          <Text style={{color:R.colors.colorBtnLogin,fontWeight:'600',fontSize:16,paddingVertical:10,paddingBottom:10,width:100,textAlign:'center'}}>{title}</Text>
        </View>
      </>
    );
  };
export default ButtonList;