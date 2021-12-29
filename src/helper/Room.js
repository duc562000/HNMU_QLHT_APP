import { concat } from "lodash";
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import io from "socket.io-client";

class SocketIO extends Component {
  constructor(props) {
    super(props);
    this.socket = io("http://192.168.0.103:9000");
    this.state = {
      isRegistor: true,
      room: "",
      text: "",
      listRooms: [],
      name: "",
      user: "",
      ListMessage: [],
      currentRoom: "",
    };
  }

  componentDidMount() {
    this.socket.on("server-send-rooms", (data) => {
      this.setState({
        listRooms: data,
      });
    });

    this.socket.on("server-send-room-socket", (data) => {
      this.setState({
        currentRoom: data,
      });
    });

    this.socket.on("server-send-message", (data) => {
      const newList = this.state.ListMessage.concat(data);
      this.setState({
        ListMessage: newList,
      });
    });
  }
  onSend = () => {
    this.socket.emit("client-send-message", this.state.text);
  };

  onInitRoom = () => {
    this.socket.emit("create-room", this.state.room);
  };

  render() {
    const { isRegistor, currentRoom, listRooms, user, ListMessage } =
      this.state;
    return (
      <View style={{ flex: 1, marginTop: 50, paddingHorizontal: 20 }}>
        <View style={styles.footer}>
          <TextInput
            onChangeText={(val) => this.setState({ room: val })}
            style={styles.txtInput}
          />
          <TouchableOpacity
            onPress={() => this.onInitRoom()}
            style={styles.btn}
          >
            <Text>Tạo room</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.txtRoom}>{currentRoom}</Text>

        <View style={styles.row}>
          <View style={styles.wrapLeft}>
            {listRooms.map((e) => (
              <View style={{ marginTop: 10 }}>
                <Text>{e}</Text>
              </View>
            ))}
          </View>

          <View style={styles.wrapChat}>
            {ListMessage.map((e) => (
              <View style={{ marginTop: 10 }}>
                <Text>{e}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            onChangeText={(val) => this.setState({ text: val })}
            style={styles.txtInput}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrap: {
    flexDirection: "row",
  },
  item: {
    borderWidth: 0.6,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 5,
    height: 40,
    justifyContent: "center",
  },
  wrapChat: {
    borderWidth: 0.6,

    marginVertical: 20,
    borderRadius: 10,
    flex: 2,
  },

  wrapLeft: {
    borderWidth: 0.6,

    marginVertical: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    justifyContent: "space-between",
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
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    height: 400,
  },
  txtRoom: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});

export default SocketIO;
