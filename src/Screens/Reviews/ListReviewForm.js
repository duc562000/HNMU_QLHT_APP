import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';

import { View } from "react-native";
import ItemReviewForm from "./ItemReviewForm";

const ListReviewForm = (props) => {
    const {title} = props
    return (
      <>
        <View>
            <Text style={{color:'#2c3092',fontSize:20,fontWeight:'bold',marginTop:13,marginLeft:5}}>{title}</Text>
            <View style={{height:2 ,backgroundColor:'#2c3092',marginBottom:5}}/>
            
        </View>
        
      </>
    );
  };
export default ListReviewForm;