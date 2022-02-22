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
import Resultki1 from "../Screens/StudyResult/ResultKy1";
import Resultki2 from "../Screens/StudyResult/ResultKy2";

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
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.NEWSCREEN} component={News} />
      <Stack.Screen name={ScreenName.SCHEDULESCREEN} component={Schedule} />
      <Stack.Screen name={ScreenName.TESTSCHEDULE} component={TestSchedule} />
      <Stack.Screen name={ScreenName.STUDYRESULT} component={StudyResult} />
      <Stack.Screen name={ScreenName.TUITION} component={Tuition} />
      <Stack.Screen name={ScreenName.REVIEWS} component={Reviews} />
      <Stack.Screen name={ScreenName.ACCOUNT} component={Account} />
      <Stack.Screen name={ScreenName.RESULTKY1} component={Resultki1} />
      <Stack.Screen name={ScreenName.RESULTKY2} component={Resultki2} />

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
