import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../Config/Functions';
import R from '../../assets/R';

const TextField = (props) => {
  const {title, value} = props;

  return (
    <View style={{marginVertical: 5, borderRadius: 5}}>
      <Text
        style={{
          fontSize: getFontXD(42),
          color: R.colors.color777,
          marginBottom: 5,
        }}>
        {title ? title : ''}
      </Text>
      <View
        style={{
          height: HEIGHTXD(109),
          width: '100%',
          borderRadius: 7,
          fontSize: getFontXD(42),
          paddingHorizontal: 10,
          justifyContent: 'center',

          backgroundColor: '#D8D6D6',
          shadowColor: '#AFA9A9',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,
          elevation: 1,
        }}>
        <Text style={{fontSize: getFontXD(42)}}>{value}</Text>
      </View>
    </View>
  );
};

export default React.memo(TextField);
