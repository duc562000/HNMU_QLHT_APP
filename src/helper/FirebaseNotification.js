/* eslint-disable no-console */
import React, { useEffect } from "react";
import { Platform, View, Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-community/async-storage";
import KEY from "../assets/AsynStorage";

const FirebaseNotification = (props) => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });
  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log("On notifi open app-----", remoteMessage);
  });
  useEffect(() => {
    getFcmToken();
  }, []);

  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem(KEY.FIREBASE);
    console.log("fcmToken save", fcmToken);
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      console.log("fcmToken create", fcmToken);
      if (fcmToken) {
        AsyncStorage.setItem(KEY.FIREBASE, fcmToken);
      }
    }
  };
  return <View />;
};

export default FirebaseNotification;
