import {Alert} from 'react-native';
import I18n from '../helper/i18/i18n';

export const NotificationAlert = (string) => {
  Alert.alert(I18n.t('Notification'), string);
};

export const confirmAlert = (content, callback) => {
  Alert.alert(
    I18n.t('Notification'),
    content,
    [
      {
        text: I18n.t('Cancel'),
        style: 'cancel',
      },
      {
        text: I18n.t('Ok'),
        onPress: () => {
          callback();
        },
      },
    ],
    {cancelable: false},
  );
};
