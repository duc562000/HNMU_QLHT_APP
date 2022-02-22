import React from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

import { View } from "react-native";

const ItemReviewForm = (props) => {
    const {txt} = props
    const [checked, setChecked] = React.useState(null);
    return (
      <>
        <View>
            <Text style={{color:'#000',fontSize:17,marginLeft:5}}>{txt}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <View> 
                    <RadioButton
                        color="#2c3092"
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{textAlign:'center',marginBottom:10}}>(1)</Text>
                </View>
                <View> 
                    <RadioButton
                        color="#2c3092"
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{textAlign:'center',marginBottom:10}}>(2)</Text>
                </View>
                <View> 
                    <RadioButton
                        color="#2c3092"
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                    />
                    <Text style={{textAlign:'center',marginBottom:10}}>(3)</Text>
                </View>
                <View> 
                    <RadioButton
                        color="#2c3092"
                        value="fourth"
                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('fourth')}
                    />
                    <Text style={{textAlign:'center',marginBottom:10}}>(4)</Text>
                </View>
    </View>
        </View>
        
      </>
    );
  };
export default ItemReviewForm;