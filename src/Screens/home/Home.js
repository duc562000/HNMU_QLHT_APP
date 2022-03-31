import React, {Component} from 'react';
import {View, Text} from 'react-native';

import HomeView from './HomeView';

const Home = (props) => {
  const item = props.route.params.item
  return <HomeView 
            item = {item}
        />;
};

export default Home;
