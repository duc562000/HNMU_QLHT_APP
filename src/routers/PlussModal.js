import React, {Component, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import R from '../assets/R';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../Config/Functions';
import {useNavigation} from '@react-navigation/native';

import {HOMETEAM} from '../routers/ScreenNames';

const PlussModal = (props) => {
  const navation = useNavigation();
  const toggleModal = () => {
    navation.navigate(HOMETEAM);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <TouchableOpacity onPress={toggleModal} style={styles.btn}>
          <Image
            source={R.images.iconTeams}
            style={{
              width: WIDTHXD(100),
              height: WIDTHXD(100),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlussModal;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: R.colors.main,
    width: WIDTHXD(144),
    height: WIDTHXD(144),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 30,
  },
  container: {
    flex: 1,
  },
  wraper: {
    backgroundColor: R.colors.white,
    width: WIDTHXD(160),
    height: WIDTHXD(160),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -25,
    left: 15,
    borderRadius: WIDTHXD(90),
  },
  footer: {
    backgroundColor: 'white',
    height: HEIGHTXD(400),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgIcon: {
    width: WIDTHXD(150),
    height: HEIGHTXD(150),
    resizeMode: 'contain',
  },
  wraper1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  txt: {
    fontSize: getFontXD(36),
    color: R.colors.txtMain,
    marginTop: 5,
  },
});
