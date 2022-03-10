import React, {Component} from 'react';
import {View, Text, ImageBackground,StyleSheet,ScrollView,FlatList} from 'react-native';
import WeekView, { addLocale,createFixedWeekDate } from 'react-native-week-view';
import R from '../../assets/R';
import HeaderTitleCenter from '../../components/Header/Header';
import ListTestSchedule from './ListTestSchedule';

const dataTestSchedule =[
  {
    id:1,
    sbd:'10',
    subject:'Thiết kế web',
    date:'10/02/2022',
    time:'8:00-10:00',
    room:'A3-210'
  },
  {
    id:2,
    sbd:'15',
    subject:'Lập trình web',
    date:'10/02/2022',
    time:'12:30-14:00',
    room:'A2-210'
  },
  {
    id:3,
    sbd:'11',
    subject:'Quản trị mạng',
    date:'12/02/2022',
    time:'9:00-10:30',
    room:'A3-210'
  },
  {
    id:4,
    sbd:'8',
    subject:'Lập trình cơ bản',
    date:'15/02/2022',
    time:'13:00-15:00',
    room:'A3-310'
  },
  {
    id:5,
    sbd:'20',
    subject:'Cơ sở dữ liệu',
    date:'16/02/2022',
    time:'9:00-11:30',
    room:'A3-311'
  },
]

const TestScheduleView = (props) => {
  const renderListTestSchedule = ({ item }) => <ListTestSchedule item={item} />;
  return (
      <View style={{flex:1}}>
        <HeaderTitleCenter
          title={'Lịch thi kỳ I 2021-2022'}
          isBack={true}
        />
        <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%'}}>
          <FlatList
                data={dataTestSchedule}
                renderItem={renderListTestSchedule}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
          />
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  
})

export default TestScheduleView;

