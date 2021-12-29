import {concat} from 'lodash';
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import io from 'socket.io-client';

class SocketIO extends Component {
  constructor(props) {
    super(props);
    this.socket = io('http://192.168.0.103:9000');
    this.state = {
      isRegistor: true,
      room: '',
      text: '',
      listUser: [],
      name: '',
      user: '',
      ListMessage: [],
    };
  }

  componentDidMount() {
    this.socket.on('server-send-color', (msg) => {
      this.setState({bgColor: msg});
    });
    this.socket.on('server-send-register-faild', () => {
      Alert.alert('Đăng ký thất bại', 'Username đã tồn tại!');
    });
    this.socket.on('server-send-register-success', (data) => {
      this.setState({
        isRegistor: false,
        user: data,
      });
    });

    this.socket.on('server-send-list-user', (data) => {
      this.setState({
        listUser: data,
      });
    });

    this.socket.on('server-send-message', (data) => {
      const newData = this.state.ListMessage.concat(data);
      this.setState({
        ListMessage: newData,
      });
    });
  }

  onSend = () => {
    this.socket.emit('client-send-message', this.state.text);
  };

  onRegister = () => {
    this.socket.emit('client-send-register', this.state.name);
  };

  onLogout = () => {
    this.socket.emit('client-send-logout');
    this.setState({
      isRegistor: true,
      listUser: [],
      user: '',
    });
  };

  onFocus = () => {
    console.log('Bat dau');
  };

  onInitRoom = () => {
    console.log('room', this.state.room);
    this.socket.emit('create-room', this.state.room);
  };

  render() {
    const {isRegistor, listUser, user, ListMessage} = this.state;
    if (isRegistor)
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            autoCapitalize={'none'}
            style={{
              width: 200,
              height: 50,
              borderWidth: 0.6,
              borderRadius: 10,
              paddingHorizontal: 10,
              fontSize: 20,
            }}
            onChangeText={(val) => this.setState({room: val})}
          />
          <TouchableOpacity
            onPress={() => this.onInitRoom()}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              backgroundColor: 'pink',
              marginTop: 20,
            }}>
            <Text>Tạo room</Text>
          </TouchableOpacity>

          <View style={{height: 100}} />

          <TextInput
            autoCapitalize={'none'}
            style={{
              width: 200,
              height: 50,
              borderWidth: 0.6,
              borderRadius: 10,
              paddingHorizontal: 10,
              fontSize: 20,
            }}
            onChangeText={(val) => this.setState({name: val})}
          />
          <TouchableOpacity
            onPress={() => this.onRegister()}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              backgroundColor: 'pink',
              marginTop: 20,
            }}>
            <Text>Dăng ký</Text>
          </TouchableOpacity>
        </View>
      );

    return (
      <View style={{flex: 1, marginTop: 50, paddingHorizontal: 20}}>
        <View style={styles.wrapTop}>
          <Text style={{fontSize: 20}}>Hello {user}</Text>
          <TouchableOpacity onPress={() => this.onLogout()}>
            <Text style={{fontSize: 20, color: 'red'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 60}}>
          <ScrollView horizontal>
            {listUser.map((e) => (
              <View style={styles.item}>
                <Text style={{fontSize: 20}}>{e}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.wrapChat}>
          {ListMessage.map((e) => (
            <View style={{marginTop: 10}}>
              <Text>{e.message}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <TextInput
            onChangeText={(val) => this.setState({text: val})}
            style={styles.txtInput}
            onFocus={() => this.onFocus()}
            onEndEditing={() => {
              console.log('ket thu');
            }}
          />
          <TouchableOpacity onPress={() => this.onSend()} style={styles.btn}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapTop: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 0.6,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 5,
    height: 40,
    justifyContent: 'center',
  },
  wrapChat: {
    borderWidth: 0.6,
    height: 400,
    marginVertical: 20,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  txtInput: {
    flex: 1,
    borderWidth: 0.6,
    borderRadius: 10,
    marginRight: 10,
    height: 40,
  },
  btn: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default SocketIO;
