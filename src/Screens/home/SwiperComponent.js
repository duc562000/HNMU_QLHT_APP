import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

import Swiper from 'react-native-swiper';
import R from '../../assets/R';
import {HEIGHTXD, WIDTHXD} from '../../Config/Functions';
const SwiperComponent = (props) => {
  return (
    <View style={styles.container}>
      <Swiper
        dotColor={R.colors.color777}
        activeDotColor={R.colors.white}
        paginationStyle={{bottom: 5}}
        style={styles.wrapper}
        loop={true}
        autoplay={true}>
        {props.listImage.map((item) => (
            <View style={{borderRadius: 10}}>
              <Image
                  style={{height: HEIGHTXD(300), width: '100%', borderRadius: 5}}
                  source={{uri: item.url}}
                  resizeMode={'cover'}
              />
            </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WIDTHXD(40),
    marginBottom: 10,
    borderRadius: 5,

    height: HEIGHTXD(300),
    marginTop: HEIGHTXD(40),
    borderBottomColor: R.colors.borderGray,
    borderTopColor: R.colors.borderGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 2,
  },
  wrapper: {
    borderRadius: 5,
    height: HEIGHTXD(300),
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SwiperComponent;
