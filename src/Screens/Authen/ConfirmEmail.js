import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {CONFIRMOTP} from '../../routers/ScreenNames';

const ConfirmEmail = (props) => {
  const navigation = useNavigation();

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
                <View style={styles.wrapInput}>
                  <Icon
                    name={'phone-incoming'}
                    size={18}
                    color={R.colors.white}
                  />
                  <TextInput
                    style={styles.txtInput}
                    placeholder="Nhập số điện thoại"
                    placeholderTextColor={R.colors.white}
                    secureTextEntry={true}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    width: '100%',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text
                      style={{
                        fontSize: getFontXD(42),
                        color: R.colors.txtMain,
                      }}>
                      Quay lại đăng nhập
                    </Text>
                  </TouchableOpacity>
                </View>

                <Button
                  title={'Lấy mã xác thực'}
                  onClick={() => navigation.navigate(CONFIRMOTP)}
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
    marginTop: 50,
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
});

export default ConfirmEmail;
