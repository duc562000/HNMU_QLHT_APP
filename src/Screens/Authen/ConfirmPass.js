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
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {LOGINSCREEN} from '../../routers/ScreenNames';

const ConfirmPass = (props) => {
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
                  <Icon name={'lock1'} size={18} color={R.colors.white} />
                  <TextInput
                    style={styles.txtInput}
                    placeholder="Mật khẩu mới"
                    placeholderTextColor={R.colors.white}
                    keyboardType={'number-pad'}
                  />
                </View>

                <View style={styles.wrapInput}>
                  <Icon name={'reload1'} size={18} color={R.colors.white} />
                  <TextInput
                    style={styles.txtInput}
                    placeholder="Xác nhận lại mật khẩu"
                    placeholderTextColor={R.colors.white}
                    secureTextEntry={true}
                  />
                </View>

                <Button
                  title={'Cập nhật'}
                  onClick={() =>
                    navigation.reset({
                      index: 1,
                      routes: [{name: LOGINSCREEN}],
                    })
                  }
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
});

export default ConfirmPass;
