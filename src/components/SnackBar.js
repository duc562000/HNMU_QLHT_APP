import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import R from '../assets/R';
import Block from './Block';
import {getFontXD, HEIGHTXD} from '../Config/Functions';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {showNotificaton, hideNotification} from '../actions/SnackBarAction';
import {useNavigation} from '@react-navigation/native';
import AppText from '../components/AppText';
const SnackBar = (props) => {
  const navigate = useNavigation();
  const {isOpen, title, content, screen, id_record} = props.snackReducer;

  useEffect(() => {
    if (isOpen)
      setTimeout(() => {
        props.hideNotification();
      }, 10000);
  }, [props.snackReducer]);

  return (
    <Modal
      style={{padding: 0, margin: 0}}
      animationInTiming={1500}
      animationOutTiming={800}
      backdropOpacity={0}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      isVisible={isOpen}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text numberOfLines={2} style={styles.txt}>
            {content}
          </Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => props.hideNotification()}
            style={styles.btn}>
            <AppText i18nKey={'Close'} style={styles.txtBtn} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.hideNotification();
              navigate.navigate(screen, {id: id_record});
            }}
            style={[styles.btn, {marginLeft: 20}]}>
            <AppText i18nKey={'Detail'} style={styles.txtBtn} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => props.hideNotification()}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    snackReducer: state.SnackReducer,
  };
};

export default connect(mapStateToProps, {showNotificaton, hideNotification})(
  SnackBar,
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: HEIGHTXD(380),
    backgroundColor: R.colors.white,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txt: {
    color: R.colors.black,
  },
  txtBtn: {
    fontSize: getFontXD(42),
    color: R.colors.txtMain,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.black,
    fontWeight: 'bold',
  },
});
