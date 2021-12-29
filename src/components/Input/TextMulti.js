import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../Config/Functions';
import R from '../../assets/R';

const TextField = (props) => {
  const {title, onChangeText, maxLength, value, editable} = props;

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
      <TextInput
        maxLength={maxLength}
        textAlign={'left'}
        editable={editable != null ? editable : true}
        value={value}
        onChangeText={(val) => onChangeText(val)}
        multiline={true}
        numberOfLines={3}
        placeholderTextColor={R.colors.placeHolder}
        autoCapitalize="none"
        style={{
          textAlignVertical: 'top',
          textAlign: 'left',
          color: 'black',
          maxHeight: HEIGHTXD(259),
          minHeight: HEIGHTXD(169),
          borderRadius: 7,
          borderWidth: 0.7,
          borderColor: '#DBDBDB',
          fontSize: getFontXD(42),
          paddingVertical: 10,
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
