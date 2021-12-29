import React from "react";
import { View, Text, TextInput } from "react-native";
import R from "../../assets/R";
import { getFontXD, HEIGHTXD, WIDTHXD } from "../../Config/Functions";
import { OutlinedTextField } from "react-native-material-textfield";

const InputComponent = (props) => {
  const { title, onChangeText, maxLength } = props;

  return (
    <View>
      <OutlinedTextField
        label={title}
        tintColor={R.colors.color777}
        containerStyle={{ marginVertical: WIDTHXD(30) }}
        inputContainerStyle={{ height: HEIGHTXD(130) }}
        fontSize={getFontXD(32)}
        labelFontSize={getFontXD(32)}
        activeLineWidth={0.5}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

export default React.memo(InputComponent);
