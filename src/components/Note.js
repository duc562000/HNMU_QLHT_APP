import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from '../assets/R';
import {getFontXD} from '../Config/Functions';

const Note = (props) => {
  const [detail, setDetail] = useState(true);
  return (
    <View style={[{...props.style}, styles.container]}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', width: 50, alignItems: 'center'}}>
          <Image source={R.images.iconVoice} style={{width: 25, height: 25}} />
          <Text style={styles.txtTitle}>Chú ý</Text>
        </View>
        <TouchableOpacity
          onPress={() => setDetail(!detail)}
          style={{width: 30, alignItems: 'flex-end'}}>
          <Icon
            name={detail ? 'up' : 'down'}
            color={R.colors.color777}
            size={18}
          />
        </TouchableOpacity>
      </View>
      {detail ? <Text style={styles.txt}>{props.content}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FDD7AB',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.red1,
    fontWeight: '600',
  },
  txt: {
    fontSize: getFontXD(42),
    color: R.colors.red1,
  },
});

export default Note;
