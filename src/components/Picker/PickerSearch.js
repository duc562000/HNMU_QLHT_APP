// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import R from '../../assets/R';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../Config/Functions';
import ModalSearch from './ModalSearch';

/**
 * This Function to show piker search with list date (for example [{name:'Picker1'},{name:'Picker2}])
 * This show view with input when touch it show a modal search
 * @callback onValueChange return value of item you choice
 * @param title title of popup search
 * @param containerStyle custom containerStyle of view
 * @param data style value of date
 * @param width width of picker
 * @param date value of date you choice
 * @param value value of date you choice
 * @param searchPickerStyle custom searchPickerStyle of TouchableOpacity
 * @param placeholder value of placeholder
 * @param textStyle custom text in Text
 * other you can make minDate,maxDate... with props of libary react-native-datepicker
 */
class PickerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      item: null,
      reRender: false,
    };
  }

  componentDidMount = async () => {
    const {value} = this.props;
    if (value) {
      this.setState({value});
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data !== this.props.data &&
      (nextProps.data.length > 0 || nextProps.isNeedClearData)
    ) {
      this.setState({reRender: this.state.reRender});
    }
  }

  onChangeText = (text) => {
    this.ModalSearch && this.ModalSearch.changeName(text);
  };

  render() {
    const {value, item} = this.state;
    const {
      textStyle,
      containerStyle,
      placeholder,
      width,
      data,
      title,
      onValueChange,
      findData,
      disabled,
      height,
      tempDisabled,
      onShowPorm,
      style,
    } = this.props;
    const choosed =
      this.props.value && this.props.value != '' && this.props.value !== null
        ? true
        : false;

    return (
      <View style={[styles.container, style ? style : {}]}>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            tempDisabled
              ? onShowPorm && onShowPorm()
              : this.ModalSearch.setModalVisible(true);
          }}
          style={[
            styles.searchPicker,
            containerStyle !== null && containerStyle,
            width && {width},
            height && {height},
          ]}>
          {value === '' && this.props.value && this.props.value === '' ? (
            <Text>{placeholder !== null && placeholder}</Text>
          ) : (
            <Text
              numberOfLines={1}
              style={[
                styles.textStyle,
                textStyle !== null && textStyle,
                width && {width: width - WIDTHXD(150)},
              ]}>
              {this.props.value !== null && this.props.value}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => {
              this.setState({value: '', item: null});
              onValueChange && onValueChange('', null);
            }}
            hitSlop={{left: 20, top: 20, right: 20, bottom: 20}}
            disabled={!choosed || disabled}>
            <AntDesign
              name={!choosed || disabled ? 'search1' : 'close'}
              size={WIDTHXD(43)}
              color={R.colors.iconGray}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <ModalSearch
          ref={(ref) => {
            this.ModalSearch = ref;
          }}
          data={data}
          isNeedClearData={this.props.isNeedClearData}
          findData={findData !== null && findData}
          onValueChange={(Value, item) => {
            this.setState({value: Value, item: item});
            onValueChange && onValueChange(item.value, item);
          }}
          title={title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: HEIGHTXD(8),
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTHXD(960),
  },
  searchPicker: {
    width: WIDTHXD(960),
    borderRadius: HEIGHTXD(20),
    paddingHorizontal: WIDTHXD(36),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHTXD(99),
    borderWidth: 0.3,
    borderColor: R.colors.iconGray,
    color: R.colors.black0,
  },
  textStyle: {
    fontFamily: R.fonts.RobotoRegular,
    width: WIDTHXD(800),
    fontSize: getFontXD(42),
  },
});

export default PickerSearch;
