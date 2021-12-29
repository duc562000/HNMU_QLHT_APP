import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../Config/Functions';
import R from '../../assets/R';

const TextField = (props) => {
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
  } = props;

  return (
    <View style={{marginVertical: 5, marginHorizontal: 10}}>
      <Text
        style={{
          fontSize: getFontXD(42),
          color: R.colors.color777,
          marginBottom: 5,
        }}>
        {title ? title : ''}
      </Text>
      <TextInput
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={R.colors.placeHolder}
        editable={editable != null ? editable : true}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        value={value}
        keyboardType={isNumber ? 'number-pad' : 'default'}
        onChangeText={(val) => onChangeText(val)}
        style={{
          height: HEIGHTXD(109),
          color: 'black',
          borderRadius: 7,
          borderWidth: 0.7,
          borderColor: '#DBDBDB',
          fontSize: getFontXD(42),
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          shadowColor: '#AFA9A9',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,
          elevation: 1,
        }}
      />
    </View>
  );
};

export default React.memo(TextField);
