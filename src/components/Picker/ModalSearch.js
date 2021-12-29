import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  HEIGHT,
  WIDTH,
  WIDTHXD,
  getFontXD,
  HEIGHTXD,
  WIDTHXDICON,
} from '../../Config/Functions';
import R from '../../assets/R';
import I18n from '../../helper/i18/i18n';
import AppText from '../AppText';


/**
 * Displays a popup search with a list of data that returns the value of the selected item
 *@param title title of popup search(string)
 *@param iconStyle style of icon search(PropsStyle)
 *@callback onValueChange call when you choice one of list item with param name and item
 *@method setModalVisible to set show and hide this popup(param true to show and false to hide)
 *@method changeName to find data with query (auto searh after 500ms)
 */
class ModalSearch extends Component {
  state = {
    modalVisible: false,
    query: '',
    name: '',
    typing: false,
    typingTimeout: 0,
    reRender: false,
    selectedIndex: -1,
  };

  listSearch = [];

  /**
   * This Function to open, close modal
   */
  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  componentDidMount() {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data !== this.props.data &&
      (nextProps.data.length > 0 || nextProps.isNeedClearData)
    ) {
      this.listSearch = nextProps.data;
      this.setState({reRender: this.state.reRender});
    }
  }

  /**
   * This Function to load data with param search
   */
  changeName = (event) => {
    this.setState({name: event, selectedIndex: -1});
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    console.log(event);
    this.setState({
      name: event,
      query: event,
      typing: false,
      typingTimeout: setTimeout(async () => {
        const {findData} = this.props;
        this.listSearch = findData ? await findData(event) : [];
        this.setState({reRender: !this.state.reRender});
      }, 500),
    });
  };

  /**
   * This Function to search with query
   * @param query value of input text
   */

  /**
   * This Function to load data first
   */
  loadData = async () => {
    const {findData} = this.props;
    this.listSearch = findData ? await findData(' ') : [];
  };

  render() {
    const {title, iconStyle, onValueChange} = this.props;
    const {query} = this.state;
    return (
      <Modal
        onRequestClose={() => {
          this.setModalVisible(false);
        }}
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setModalVisible(false);
          }}>
          <View style={styles.opacity}>
            <TouchableWithoutFeedback>
              <View style={styles.modal}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                  style={[styles.iconCloseStyle]}
                  hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
                  <AntDesign name="close" size={WIDTHXD(50)} color="#000" />
                </TouchableOpacity>
                <View style={styles.container}>
                  <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{
                      // width: WIDTHXD(870),
                      paddingRight: WIDTHXD(100),
                      height: HEIGHTXD(99),
                    }}
                    ref={(ref) => (this.refList = ref)}
                    inputContainerStyle={styles.inputBox}
                    placeholderTextColor="gray"
                    containerStyle={styles.autocompleteContainer}
                    data={this.listSearch}
                    keyExtractor={(item, index) => index.toString()}
                    defaultValue={query}
                    listStyle={styles.listStyle}
                    renderTextInput={(iProps) => (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <AntDesign
                          name="search1"
                          size={WIDTHXDICON(50)}
                          color="#77869E"
                        />
                        <TextInput
                          value={this.state.name}
                          onChangeText={(e) => this.changeName(e)}
                          {...iProps}
                          placeholderTextColor="#BAC7D3"
                          style={{
                            fontSize: getFontXD(36),
                            marginLeft: WIDTHXD(21.7),
                            color: '#000',
                            flex: 1,
                            height: '100%',
                          }}
                        />
                      </View>
                    )}
                    // onChangeText={text => { this.changeName(text) }}
                    placeholder={'Tim kiem'}
                    listContainerStyle={{
                      marginTop: HEIGHTXD(37),
                    }}
                    renderItem={({item, index}) => {
                      let evenRow =
                        index ===
                        (this.listSearch && this.listSearch.length - 1);
                      let highlighted = this.state.selectedIndex === index;
                      return (
                        <TouchableOpacity
                          key={index.toString()}
                          style={[
                            styles.itemStyle,
                            highlighted && {backgroundColor: '#e3e8f2'},
                          ]}
                          onPress={() => {
                            onValueChange &&
                              onValueChange(
                                item.text ? `${item.text}` : `${item.name}`,
                                item,
                              );
                            this.setState({
                              query: item.text ? item.text : item.name,
                              selectedIndex: index,
                            });
                            this.setModalVisible(false);
                          }}>
                          <Text style={styles.itemText}>
                            {item.text
                              ? item.text && `${item.text}`
                              : item.name && `${item.name}`}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                    flatListProps={{
                      ItemSeparatorComponent: () => (
                        <View
                          style={{
                            width: '100%',
                            height: 0.5,
                            backgroundColor: R.colors.borderD4,
                          }}
                        />
                      ),
                      ListEmptyComponent: () => (
                        <AppText style={styles.itemText} i18nKey={('NoData')}/>
                      ),
                    }}
                  />
                  {this.state.name.length !== 0 && (
                    <TouchableOpacity
                      onPress={() => {
                        this.changeName('');
                      }}
                      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                      style={[
                        styles.iconStyle,
                        iconStyle !== null && iconStyle,
                      ]}>
                      <AntDesign
                        name="close"
                        size={WIDTHXD(40)}
                        color="#BAC7D3"
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default ModalSearch;
const styles = StyleSheet.create({
  opacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.7)',
  },
  modal: {
    backgroundColor: 'white',
    width: WIDTHXD(1004),
    borderRadius: WIDTHXD(30),
    height: HEIGHTXD(1570),
    paddingTop: HEIGHTXD(50),
    paddingBottom: HEIGHTXD(54),
    alignItems: 'center',
    paddingHorizontal: WIDTHXD(45),
  },
  title: {
    color: R.colors.indigo701,
    fontSize: getFontXD(54),
    marginBottom: HEIGHTXD(75),
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTHXD(914),
  },
  autocompleteContainer: {
    zIndex: 1,
    width: WIDTHXD(914),
  },
  itemText: {
    fontSize: getFontXD(42),
  },
  inputBox: {
    width: WIDTHXD(914),
    borderRadius: WIDTHXD(20),
    height: HEIGHTXD(99),
    paddingHorizontal: WIDTHXD(30),
    paddingRight: WIDTHXD(100),
    justifyContent: 'space-between',
    borderWidth: 0.3,
    borderColor: R.colors.borderD4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    position: 'absolute',
    right: WIDTHXD(20),
    zIndex: 1,
    height: HEIGHTXD(99),
    width: WIDTHXD(60),
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  listStyle: {
    width: WIDTHXD(914),
    marginLeft: 0,
    // marginTop: 1,
    // borderWidth: WIDTHXD(13),
    borderColor: R.colors.borderD4,
    borderRadius: WIDTHXD(20),
    borderWidth: 0.3,
    borderTopWidth: 0.3,
    height: HEIGHTXD(1150),
  },
  itemStyle: {
    paddingVertical: HEIGHT(6),
    paddingHorizontal: WIDTH(10),
    minHeight: HEIGHTXD(100),
    // borderBottomWidth: 0.3,
    // borderBottomColor: R.colors.iconGray
  },
  iconCloseStyle: {
    position: 'absolute',
    right: WIDTHXD(72),
    zIndex: 1,
    top: HEIGHTXD(67.5),
  },
});
