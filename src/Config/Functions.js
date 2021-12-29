import React from 'react';
import {
  Dimensions,
  Platform,
  Alert,
  Text,
  PermissionsAndroid,
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import I18n from '../helper/i18/i18n';
import AppText from '../components/AppText';
import AsyncStorage from '@react-native-community/async-storage';
import {DETAILNEW, NOTIFICATION, LOGINSCREEN} from '../routers/ScreenNames';
import R from '../assets/R';
import KEY from '../assets/AsynStorage';

export const convertScreen = (name) => {
  switch (name) {
    case 'CUSTOMER_NEWS':
      return DETAILNEW;
    default:
      return DETAILNEW;
  }
};

export const logout = (navigation) => {
  AsyncStorage.removeItem(KEY.ACCOUNT);
  navigation.reset({
    index: 1,
    routes: [{name: LOGINSCREEN}],
  });
};

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const renderStatus = (status) => {
  switch (status) {
    case 2:
      return (
        <AppText
          i18nKey={'WaitVerification'}
          style={{
            color: '#F99D1D',
            fontSize: getFontXD(42),
            fontWeight: 'bold',
          }}
        />
      );
    case 3:
      return (
        <AppText
          i18nKey={'Verified'}
          style={{
            color: '#17B217',
            fontWeight: 'bold',
            fontSize: getFontXD(42),
          }}
        />
      );
    case 5:
      return (
        <AppText
          i18nKey={'Request_Open_Account_CQG'}
          style={{
            color: '#F99D1D',
            fontWeight: 'bold',
            fontSize: getFontXD(42),
          }}
        />
      );
    case 6:
      return (
        <AppText
          i18nKey={'EnableCQG'}
          style={{
            color: R.colors.main,
            fontWeight: 'bold',
            fontSize: getFontXD(42),
          }}
        />
      );
    default:
      return (
        <AppText
          i18nKey={'NotVerified'}
          style={{
            color: '#929292',
            fontWeight: 'bold',
            fontSize: getFontXD(42),
          }}
        />
      );
  }
};

export const NotificationAlert = (string) => {
  Alert.alert(I18n.t('Notification'), string);
};

export const confirmAlert = (title, callback) => {
  Alert.alert(
    I18n.t('Notification'),
    title,
    [
      {
        text: I18n.t('Cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t(Ok),
        onPress: () => {
          callback();
        },
      },
    ],
    {cancelable: false},
  );
};

const {width, height} = Dimensions.get('window');
export const getWidth = () => width;
export const getHeight = () => height;

// Get size for xd
export const WIDTHXD = (w) => width * (w / 1125);
export const HEIGHTXD = (h) => height * (h / 2436);
export const getLineHeightXD = (f) => f / 3 + 2;
export const getFontXD = (f) => f / 3 + 2;
// Get size for figmar
export const WIDTH = (w) => width * (w / 360);
export const HEIGHT = (h) => height * (h / 640);
export const getLineHeight = (f) => f;
export const getFont = (f) => f - 1;
export const WIDTHXDICON = (w) => width * (w / 1125);

export const validatePhone = (str) => {
  let re = /^[0-9+]{9,11}$/;
  return re.test(str);
};

// convert number 5000000=> 5.000.000
export const numberWithCommas = (x, c = '.') =>
  Math.round(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, c ? c : '.');

export const isIos = Platform.OS === 'ios';

export const Gender = {
  male: 0,
  female: 1,
};
export const converType = (type) => {
  if (type == 'DEPOSIT') return I18n.t('Deposit');
  return I18n.t('Withdraw');
};
export const converStatus = (status) => {
  switch (status) {
    case 0:
      return I18n.t('Waiting_for_Progress');
    case 1:
      return I18n.t('Success');
    case 2:
      return I18n.t('Cancel');
  }
};

export function numberFormat(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
export const toPriceVnd = (str) => {
  if (str) {
    let headStringPrice = `${str
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    return headStringPrice;
  } else {
    return '';
  }
};

// cắt chuỗi dạng something...
export const ellipsis = (str = '', max = 30) =>
  str.length > max ? `${str.substring(0, max)}...` : str;

// tính chiều rộng của item dưới dạng flatlist
export const itemWidth = (numColumns, padding) => {
  let totalPadding = padding * (numColumns + 1);
  let w = (width - totalPadding) / numColumns;
  return w;
};

// chuyển string thành dạng viết hoa
export const toUpperCase = (str) => (str ? str.toUpperCase() : '');

export const sortType = {
  sortDefault: 1,
  latestNews: 2,
  priceUp: 3,
  priceDown: 4,
};

// delete item from array
export const removeItemFromArr2 = (items, index) => {
  let fill = items.filter((e, i) => i !== index);
  return fill;
};

export const removeItemFromArr = (items, index) => {
  items.splice(index, 1);
  return items;
};

// sum field of array object
export const totalByValue = (data, field) =>
  data.length === 0
    ? 0
    : data.map((item) => item[field]).reduce((prev, next) => prev + next);

// show notification
export const popupOk = (title, msg, onPress = null) => {
  Alert.alert(
    title,
    msg,
    [{text: 'Ok', style: 'ok', onPress: onPress || (() => null)}],
    {cancelable: false},
  );
};

export const popupCancel = (title, msg, onPress = null) => {
  Alert.alert(
    title,
    msg,
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Ok', style: 'ok', onPress: onPress || (() => null)},
    ],
    {cancelable: false},
  );
};

export const cutStringBetweenCharacters = (str, char1, char2, addFirst) => {
  let re = `\\${char1}([^${char2}]+)\\${char2}`;
  let reg = new RegExp(re);
  let s = reg.exec(str) ? reg.exec(str)[1] : '';
  return addFirst ? char1 + s : s;
};
export const mark = (str, char1, char2, tag, endTag) => {
  let re = `\\${char1}(.*?)\\${char2}`;
  let reg = new RegExp(re, 'gi');
  return str.replace(reg, `<${tag}>$1</${endTag || tag}>12`);
};

export const cutStringBetweenCharacters2 = (str, char1, char2, addFirst) => {
  let s = str.split(char1).pop().split(char2)[0];
  return addFirst ? char1 + s : s;
};

export const replaceStrByIndex = (str, index, newStr) =>
  str.substr(0, index) + newStr + str.substr(index + 1);

global.langCode = 'vi';

export const getLangCode = () => global.langCode;
export const setLangCode = (langCode) => {
  global.langCode = langCode;
};

export const formatDateTime = (time) =>
  moment(time, 'DD/MM/YYYY').locale('vi').format('dddd (DD/MM/YYYY)');

export const VideoMimeType = {
  flv: 'video/x-flv',
  mp4: 'video/mp4',
  m3u8: 'application/x-mpegURL',
  ts: 'video/MP2T',
  '3gp': 'video/3gpp',
  mov: 'video/quicktime',
  avi: 'video/x-msvideo',
  wmv: 'video/x-ms-wmv',
};

export const StringFromLastCharacter = (str, char) =>
  str.substring(str.lastIndexOf(char) + 1);

export const toArrayBySeparators = (str, separators) => {
  /**
   * example: txt = "aaaa55bbb33cccc" => ["aaaa", "55", "bbb", "33", "cccc"]
   * toArrayBySeparators(txt, [55,33])
   */
  let reg = new RegExp(`(${separators.join('|')})`);
  return str
    .split(reg)
    .filter((x) => x.length > 0)
    .map((x) => x);
};

export const getRange = (startDate, endDate, type) => {
  let fromDate = moment(startDate);
  let toDate = moment(endDate);
  let range = [];
  let range2 = [];
  // for (let i = 0; i < diff; i++) {
  //   console.log('diff: ', diff);
  //   range.push(moment(startDate).add(i, type))
  // }
  while (toDate > fromDate || fromDate.format('M') === toDate.format('M')) {
    range.push(fromDate);
    range2.push(fromDate.format('DD/MM'));
    fromDate.add(1, type);
  }
  return range2;
};

export const getFirstAndLastWords = (text) => {
  let t = text.split(' ');
  return `${t[0]} ${t[t.length - 1]}`;
};

export const shortFullname = (text) => {
  let arr = text.split(' ');
  let name = '';
  arr.forEach((e, i) => {
    if (i === 0) {
      name += `${e} `;
    } else if (i === arr.length - 1) {
      name += arr.length === 2 ? e : ` ${e}`;
    } else {
      name += `${e.charAt(0)}`;
    }
  });
  return name;
};

export const convertTimeApi = (date) => {
  const time = moment(date).format('YYYY-MM-DD');
  return time;
};

export const convertDate = (date) => {
  const time = moment(date).format('DD/MM/YYYY');
  return time;
};

export const convertDateTime = (date) => {
  const time = moment(date).format('hh:mm DD/MM/YYYY');
  return time;
};

export const convertDateTimeNow = () => {
  const time = moment().format('hh:mm DD/MM/YYYY');
  return time;
};

export const convertTime = (date) => {
  const temp = new Date(moment(date, 'DD/MM/YYYY'));
  const time = moment(temp).format('YYYY-MM-DD');
  return time;
};

export const getTimeDDMM = (time) => {
  let t1 = new Date(moment(time, 'DD/MM/YYYY').format('MM/DD/YYYY')).getTime();
  return t1;
};

export const converStringToDate = (time) => {
  let t1 = new Date(moment(time, 'YYYY-MM-DD').format('MM/DD/YYYY')).getTime();
  const strDate = convertDate(t1);
  return strDate;
};

export const sortDataByTime = (data) => {
  data.sort((a, b) => {
    let t1 = moment(a.time, 'DD-MM-YYYY').format('MM/YYYY');
    let t2 = moment(b.time, 'DD-MM-YYYY').format('MM/YYYY');
    if (t1 > t2) return -1;
    else {
      if (t1 < t2) return 1;
      else return 0;
    }
  });
  return data;
};

export const checkDifferMonth = (t1, t2) => t1 !== t2;
export const mapTimeVNToWorld = (data) => {
  if (!data) return data;
  // data 07/05/2019
  let str = data && data.split('/');
  if (str.length < 2) return data;
  return `${str[1]}/${str[0]}/${str[2]}`;
};

export const checkFormatWhiteSpace = (str) => {
  if (!str.replace(/\s/g, '').length) return true;
  return false;
};

// check 1 mảng dạng [a,b,c] có phần tử nào null,undefined,empty ko.
// nếu có trả về index phần từ đầu tiên ko thì return true
export const checkFormatArray = (array) => {
  let i = -1;
  if (!_.isEmpty(array)) {
    for (let j = 0; j < array.length; j++) {
      if (_.isUndefined(array[j]) || _.isNull(array[j]) || array[j] === '') {
        i = j;
        break;
      }
    }
  }
  if (i === -1) {
    return true;
  } else {
    return i;
  }
};

export const checkFormatArrayWhiteSpace = (array) => {
  let i = -1;
  if (!_.isEmpty(array)) {
    for (let j = 0; j < array.length; j++) {
      if (checkFormatWhiteSpace(array[j])) {
        i = j;
        break;
      }
    }
  }
  if (i === -1) {
    return true;
  } else {
    return i;
  }
};

// check 1 phần từ có null, undefined hay empty ko
export const checkFormatItem = (item) => {
  let i = -1;
  if (
    _.isUndefined(item) ||
    _.isNull(item) ||
    item === '' ||
    item === 'NaN' ||
    item === 0
  ) {
    i = 0;
  }
  if (i === -1) {
    return true;
  } else {
    return i;
  }
};
export const convertDataStatement = (data) => {
  let dataTmp = data;
  data.map((item, index) => {
    let date = mapTimeVNToWorld(item.transDate);
    let month = moment(date).format('M');
    let year = moment(date).format('YYYY');
    let isShowMonth = false;
    if (index === 0) {
      isShowMonth = true;
    } else if (data[index - 1]) {
      if (
        moment(mapTimeVNToWorld(data[index - 1].transDate)).format('YYYY') !==
        year
      ) {
        isShowMonth = true;
      } else if (
        moment(mapTimeVNToWorld(data[index - 1].transDate)).format('M') !==
        month
      ) {
        isShowMonth = true;
      }
    }

    dataTmp[index] = {...data[index], isShowMonth};
  });
  return dataTmp;
};

export const convertTypeFile = (name) => {
  if (name) {
    const fileNameTmp = name.toLowerCase();
    if (fileNameTmp.endsWith('.doc') || fileNameTmp.endsWith('.dox')) {
      return 0;
    }
    if (fileNameTmp.endsWith('.xls') || fileNameTmp.endsWith('.xlsx')) {
      return 1;
    }
    if (fileNameTmp.endsWith('.pdf')) {
      return 2;
    }
    if (
      fileNameTmp.endsWith('.heic') ||
      fileNameTmp.endsWith('.jpeg') ||
      fileNameTmp.endsWith('.jpg') ||
      fileNameTmp.endsWith('.png') ||
      fileNameTmp.endsWith('.bmp')
    ) {
      return 3;
    }
  }
  return 0;
};

export const getStartDateOfQuater = (quarter) => {
  return moment().quarter(quarter).startOf('quarter').format('YYYY-MM-DD');
};
export const getEndDateOfQuater = (quarter) => {
  return moment().quarter(quarter).endOf('quarter').format('YYYY-MM-DD');
};

export const changePositionElement = (element, array) => {
  let restArray = array.filter((e) => e != element);
  restArray.splice(0, 0, element);
  return restArray;
};

export const getMimeType = (fileExt) => {
  switch (fileExt) {
    case 'doc':
      return 'application/msword';
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case 'ppt':
      return 'application/vnd.ms-powerpoint';
    case 'pptx':
      return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    case 'xls':
      return 'application/vnd.ms-excel';
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    case 'pdf':
      return 'application/pdf';
    case 'png':
      return 'image/png';
    case 'bmp':
      return 'application/x-MS-bmp';
    case 'gif':
      return 'image/gif';
    case 'jpg':
      return 'image/jpeg';
    case 'jpeg':
      return 'image/jpeg';
    case 'avi':
      return 'video/x-msvideo';
    case 'aac':
      return 'audio/x-aac';
    case 'mp3':
      return 'audio/mpeg';
    case 'mp4':
      return 'video/mp4';
    case 'apk':
      return 'application/vnd.Android.package-archive';
    case 'txt':
    case 'log':
    case 'h':
    case 'cpp':
    case 'js':
    case 'html':
      return 'text/plain';
    default:
      return '*/*';
  }
};
