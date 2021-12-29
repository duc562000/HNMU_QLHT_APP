import React from "react";
import { View, Text } from "react-native";

import PickerAvatart from "../../components/Picker/PickerAvatart";
import R from "../../assets/R";
const NotificationView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <PickerAvatart />
    </View>
  );
};

export default NotificationView;
