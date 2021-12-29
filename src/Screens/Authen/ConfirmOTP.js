import React, {Component, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import R from '../../assets/R';
import {getFontXD, HEIGHTXD} from '../../Config/Functions';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {CONFIRMPASS} from '../../routers/ScreenNames';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const ConfirmOTP = (propsa) => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={-50}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={R.images.bgLogin}
          resizeMode={'stretch'}
          style={{width: '100%', height: '100%'}}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <View style={{flex: 1}}>
            <View
              style={{
                marginTop: 60,
                flex: 1,
                alignItems: 'center',
              }}>
              <Image source={R.images.logo} style={styles.imgLogo} />
              <View style={styles.container}>
                <View style={styles.containerCode}>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                      <View
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[
                          styles.cellRoot,
                          isFocused && styles.focusCell,
                        ]}>
                        <Text style={styles.cellText}>
                          {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                      </View>
                    )}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    width: '100%',
                    marginTop: 50,
                  }}>
                  <TouchableOpacity onPress={() => console.log('Hello')}>
                    <Text
                      style={{
                        fontSize: getFontXD(42),
                        color: R.colors.txtMain,
                      }}>
                      Gửi lại OTP
                    </Text>
                  </TouchableOpacity>
                </View>

                <Button
                  title={'Tiếp tục'}
                  onClick={() => navigation.navigate(CONFIRMPASS)}
                  containerStyle={{
                    backgroundColor: '#36BB75',
                    borderRadius: 20,
                    marginTop: 50,
                    height: 45,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imgLogo: {
    width: HEIGHTXD(450),
    height: HEIGHTXD(450),
  },
  container: {
    width: '100%',
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  txtInput: {
    paddingHorizontal: 10,
    color: R.colors.white,
    flex: 1,
    height: 45,
  },
  wrapInput: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(256, 256, 256, 0.3)',
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  containerCode: {
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
  },

  focusCell: {
    borderColor: '#000',
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: R.colors.white,
    borderBottomWidth: 1,
  },
  cellText: {
    color: 'white',
    fontSize: 42,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#36bb75',
    borderBottomWidth: 2,
  },
});

export default ConfirmOTP;
