import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import FastImage from 'react-native-fast-image';
import R from '../assets/R';
import AppText from '../components/AppText';

const NoInternetComponent = (props) => {
  const [isConnected, setConnect] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnect(state.isConnected);
    });
    return unsubscribe;
  }, []);

  return !isConnected ? (
    <View style={styles.offlineContainer}>
      <FastImage
        source={R.images.bg_cannot_connect}
        style={styles.imageStyle}
      />
      <AppText i18nKey={'No_Internet'} style={styles.textStyle} />
      <AppText i18nKey={'Check_Internet_Connect'} style={styles.subTextStyle} />
      <TouchableOpacity
        onPress={() => {
          setTimeout(() => {
            NetInfo.fetch().then((state) => {
              setConnect(state.isConnected);
            });
          }, 3000);
        }}>
        <AppText
          i18nKey={'Retry'}
          style={{alignSelf: 'center', fontSize: 20, color: 'blue'}}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{width: 0, height: 0}} />
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  offlineText: {
    color: R.colors.white100,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    marginTop: 30,
  },
  subTextStyle: {
    fontSize: 16,
    color: R.colors.borderC,
    marginVertical: 10,
  },
  imageStyle: {
    width: '80%',
    height: 200,
  },
});

export default NoInternetComponent;
