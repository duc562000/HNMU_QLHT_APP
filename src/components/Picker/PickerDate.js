import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import DatePicker from "react-native-datepicker";
import {
  WIDTHXD,
  HEIGHTXD,
  getFontXD,
  WIDTHXDICON,
} from "../../Config/Functions";
import R from "../../assets/R";
import Icon from "react-native-vector-icons/AntDesign";

/**
 * This Function to choice date
 * @callback onValueChange value of date you choice
 * @param value value of date you choice
 * @param containerStyle custom containerStyle of view
 * @param textStyle style value of date
 * @param placeholder value of placeholder
 * @param width width of datePicker
 * @param date value of date you choice
 * @param enableEdit status allow edit
 * other you can make minDate,maxDate... with props of libary react-native-datepicker
 */
class PickerDate extends Component {
  state = {
    date: new Date(),
  };

  /**
   * This Function to set date
   * @param date value of date you choice
   */
  onChangeDate = (date) => {
    this.setState({ date });
  };

  render() {
    const {
      valueString,
      onValueChange,
      value,
      containerStyle,
      textStyle,
      placeholder,
      width,
      disabled,
      title,
    } = this.props;
    return (
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: getFontXD(42),
            color: R.colors.color777,
            marginBottom: 5,
          }}
        >
          {title}
        </Text>
        <View
          style={[
            styles.inputBox,
            containerStyle !== null && containerStyle,
            width && { width },
          ]}
        >
          {disabled ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  ...styles.textDate,
                  ...textStyle,
                  paddingVertical: 0,
                  marginRight: WIDTHXD(15),
                }}
              >
                {valueString}
              </Text>

              <Icon name={"calendar"} size={22} color={"#929292"} />
            </View>
          ) : (
            <DatePicker
              confirmBtnText={"OK"}
              cancelBtnText={"Cancel"}
              locale="vi"
              style={[
                { paddingHorizontal: 0, borderWidth: 0, width: WIDTHXD(960) },
                width && { width: width - WIDTHXD(30) },
              ]}
              date={value}
              mode="date"
              placeholder={placeholder !== null && placeholder}
              format="DD/MM/YYYY" // you can change format of date in date picker
              git
              iconComponent={
                <Icon name={"calendar"} size={22} color={"#929292"} />
              } // to custom icon
              customStyles={{
                dateInput: {
                  flex: 5,
                  marginLeft: WIDTHXD(0),
                  borderWidth: 0,
                  color: R.colors.black0,
                },
                dateText: {
                  ...styles.textDate,
                },
              }}
              onDateChange={(date) => {
                this.onChangeDate(date);
                onValueChange && onValueChange(date); // return value of date, Fuction from parent
              }}
              {...this.props}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    borderRadius: WIDTHXD(20),

    height: HEIGHTXD(120),
    borderWidth: 0.3,
    borderColor: R.colors.borderGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: HEIGHTXD(17),
    backgroundColor: "white",
  },
  textDate: {
    fontSize: getFontXD(42),
    color: R.colors.black0,
    alignSelf: "flex-start",
    paddingLeft: WIDTHXD(16),
    paddingVertical: HEIGHTXD(25),
  },
});

export default React.memo(PickerDate);
