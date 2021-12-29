import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../Config/Functions';
import R from '../assets/R';

const TextField = (props) => {
  const {title, value, linkImg} = props;

  return (
    <View style={{marginVertical: 5}}>
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
          borderRadius: 7,
          borderWidth: 0.7,
          flexDirection: 'row',
          borderColor: '#DBDBDB',
          fontSize: getFontXD(42),
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: '#E9E9E9',
          shadowColor: '#AFA9A9',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,
          elevation: 1,
          alignItems: 'center',
        }}>
        <Image
          resizeMode={'contain'}
          source={{uri: linkImg}}
          style={{width: 50, height: HEIGHTXD(109), marginRight: 10}}
        />
        <Text style={{flex: 1}} numberOfLines={1}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(TextField);
