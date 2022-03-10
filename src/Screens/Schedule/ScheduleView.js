import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import WeekView, {createFixedWeekDate,addLocale} from 'react-native-week-view';
import R from '../../assets/R';
import HeaderTitleCenter from '../../components/Header/Header';
import { Icon } from 'react-native-elements';



const sampleFixedEvents = [
  {
    id: 1,
    description: 'Lập trình web',
    time:'12:00 - 14:00',
    tc:'3',
    teacher:'Trương Đức Phương',
    classroom:'A2-201',
    startDate: createFixedWeekDate(1, 12),
    endDate: createFixedWeekDate(1, 14),
  },
  {
    id: 2,
    description: 'Lập trình hướng đối tượng',
    time:'8:00 - 11:00',
    tc:'3',
    teacher:'Nguyễn Minh Huy',
    classroom:'A2-201',
    startDate: createFixedWeekDate(2, 8),
    endDate: createFixedWeekDate(2, 11),
  },
  {
    id: 3,
    description: 'Cấu trúc dữ liệu và giải thuật',
    time:'14:15 - 17:30',
    tc:'2',
    teacher:'Hà Đặng Cao Tùng',
    classroom:'A3-301',
    startDate: createFixedWeekDate(4, 14,15),
    endDate: createFixedWeekDate(4, 17,30),
  },
  {
    id: 4,
    description: 'Quản trị mạng',
    time:'8:00 - 12:00',
    tc:'2',
    teacher:'Nguyễn Chí Chung',
    classroom:'A3-303',
    startDate: createFixedWeekDate(5, 8),
    endDate: createFixedWeekDate(5, 12),
  },
];

// For debugging purposes
const showFixedComponent = false;
const MyEventComponent = ({ event, position }) => (
  <Icon
    name={event.iconName}
    type={event.iconType}
    color={event.color}
    size={position.height}
  />
);

class ScheduleView extends React.Component {
  state = {
    events:sampleFixedEvents ,
    selectedDate: new Date(),
  };

  onEventPress = ({description, time,tc,teacher,classroom}) => {
    Alert.alert(
      `Môn ${description} `,
      `Số tín chỉ:${tc}\nThời gian:${time}\nGiáo viên : ${teacher}\nPhòng học:${classroom}`
    );
  };
  

  render() {
    const {events, selectedDate} = this.state;
    addLocale('vi', {
    weekdaysShort: 'C.Nhật_T.Hai_T.Ba_T.Tư_T.Năm_T.Sáu_T.Bảy'.split('_'),
  });
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <HeaderTitleCenter
          title={'Lịch học kì II 2021-2022'}
          isBack='true'
        />
        <ImageBackground source={R.images.bgBody} style={styles.container}>
          <WeekView
            
            fixedHorizontally={true}
            // EventComponent={MyEventComponent}
            events={sampleFixedEvents}
            onEventPress={this.onEventPress}
            // Recommended props:
            showTitle={false} // if true, shows this month and year
            numberOfDays={7}
            // display short name days, e.g. Mon, Tue, etc
            // ... other props
            locale='vi'
            formatDateHeader="ddd"
            startHour={7}
            hoursInDisplay={15}
            headerStyle={styles.header}
            headerTextStyle={styles.headerText}
            hourTextStyle={styles.hourText}
            eventContainerStyle={styles.eventContainer}
            gridColumnStyle={styles.gridColumn}
            gridRowStyle={styles.gridRow}
          />
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0d4293',
    borderColor: R.colors.lightBlue2,
    borderWidth:1,
    shadowOpacity:0.2,
    shadowRadius:2,
    borderColor:'#ccc',
  },
  headerText: {
    color: 'white',
    fontSize:13,
    fontWeight:'500'
  },
  hourText: {
    color: R.colors.colorBtnLogin,
    fontSize:15,
    fontWeight:'500'
  },
  eventContainer: {
    backgroundColor:'#0d4293',
    borderWidth:1,
    shadowOpacity:0.2,
    shadowRadius:2,
    borderColor:'#ccc',
  },
  gridRow: {
    opacity:0
  },
  gridColumn: {
    borderLeftWidth: 1,
    borderColor: '#ddd',
  },
});

export default ScheduleView;
