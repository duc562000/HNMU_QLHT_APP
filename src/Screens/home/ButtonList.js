import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

const ButtonList = (props) => {
    const { title,iconsName,Screen} = props;
    const navigate = useNavigation();
    const handlePress = () => navigate.navigate(Screen);
    return (
      <>
      
        <Button 
                title={title}
                icon={
                    <Icon
                        name={iconsName}
                        size={55}
                        color="#2c3092"
                    />
                }
                
                titleStyle={{ fontWeight: '700',color:'#004078' }}
                buttonStyle={{
                  backgroundColor: '#ace8ff',
                  borderColor: '#2c3092',
                  borderWidth: 1,
                  borderRadius: 10,
                  flexDirection:'column',
                  
                }}
                containerStyle={{
                  width: 160,
                  marginHorizontal: 39,
                  marginVertical: 10,
                }}
                onPress={handlePress}
              />
        
      </>
    );
  };
export default ButtonList;