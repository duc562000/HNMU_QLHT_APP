import I18n from 'react-native-i18n';
import {I18nManager} from 'react-native';

import en from './locales/en';
import vi from './locales/vn';

I18n.translations = {
  vi,
  en,
};
I18n.fallbacks = true;

export default I18n;
export function setLocation(i18n, location) {
  I18nManager.allowRTL(false);
  const defaultLanguage = {languageTag: location, isRTL: false};
  const {languageTag, isRTL} = defaultLanguage;
  i18n.locale = languageTag;
  return i18n;
}
