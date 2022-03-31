import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AccountView from './AccountView';

const Account = (props) => {
  const item = props.route.params.item
  return <AccountView 
      item ={item}
  />;
};

export default Account;
