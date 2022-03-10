import React, { Fragment, useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";

import Login from "../Screens/Authen/Login";

import * as ScreenName from "./ScreenNames";
import News from "../Screens/News/News";
import Schedule from "../Screens/Schedule/Schedule";
import TestSchedule from "../Screens/TestSchedule/TestSchedule";
import StudyResult from "../Screens/StudyResult/StudyResult";
import Tuition from "../Screens/Tuition/Tuition";
import Reviews from "../Screens/Reviews/Reviews";
import Account from "../Screens/Account/Account";
import SurveyStep1 from "../Screens/Survey/SurveyStep1";
import SurveyScreen from "../Screens/Survey/SurveyScreen";
import NotificationDetails from "../Screens/notification/NotifitionDetails";
import TuitionDetail from "../Screens/Tuition/TuitionDetail";
import EvaluteTeaching from "../Screens/Reviews/EvaluteTeaching";
import NoteScreen from "../Screens/Note/NoteScreen";
import StudyResultDetail from "../Screens/StudyResult/StudyResultDetail";
import Contact from '../Screens/Contact/Contact'
import AdMissionWebview from "../Screens/AdMissions/AdMissionWebview";
import EvaluteUser from "../Screens/Reviews/EvaluteUser";
import Notification from "../Screens/notification/Notification";

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={"none"}
      initialRouteName={ScreenName.LOGINSCREEN}
    >
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.SURVEYSTEP1} component={SurveyStep1} />
      <Stack.Screen name={ScreenName.SURVEYSCREEN} component={SurveyScreen} />
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.NOTIFICATION_DETAILS} component={NotificationDetails} />
      <Stack.Screen name={ScreenName.NEWSCREEN} component={News} />
      <Stack.Screen name={ScreenName.SCHEDULESCREEN} component={Schedule} />
      <Stack.Screen name={ScreenName.NOTIFICATION_SCREEN} component={Notification} />
      <Stack.Screen name={ScreenName.TESTSCHEDULE} component={TestSchedule} />
      <Stack.Screen name={ScreenName.STUDYRESULT} component={StudyResult} />
      <Stack.Screen name={ScreenName.TUITION} component={Tuition} />
      <Stack.Screen name={ScreenName.TUITION_DETAILS} component={TuitionDetail} />
      <Stack.Screen name={ScreenName.EVALUTE_TEACHING} component={EvaluteTeaching} />
      <Stack.Screen name={ScreenName.EVALUTE_USER} component={EvaluteUser} />
      <Stack.Screen name={ScreenName.REVIEWS} component={Reviews} />
      <Stack.Screen name={ScreenName.ACCOUNT} component={Account} />
      <Stack.Screen name={ScreenName.STUDYRESULT_DETAIL} component={StudyResultDetail} />
      <Stack.Screen name={ScreenName.NOTE_SCREEN} component={NoteScreen} />
      <Stack.Screen name={ScreenName.CONTACT} component={Contact} />
      <Stack.Screen name={ScreenName.ADMISSONS_WEBVIEW} component={AdMissionWebview} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
