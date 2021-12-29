import React from "react";
import {View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import Modal from 'react-native-modal';
import R from "../../assets/R";
import {getFontXD, HEIGHTXD, WIDTHXD, WIDTHXDICON} from "../../Config/Functions";
import i18n from '../../helper/i18/i18n'

const PopupConfirm = (props) => {
    return (
        <Modal
            isVisible={props.isModalVisible}
            transparent={true}
            backdropOpacity={0.5}>
            <TouchableWithoutFeedback
                onPress={() => {
                    props.setModalVisible(false)
                }}
            >
                <View
                    style={styles.opacity}
                >
                    <TouchableWithoutFeedback>
                        <View style={styles.contain}>
                            <Text style={styles.txtTitle}>{props.title}</Text>
                            <Text style={styles.txtContent}>{props.content}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                    style={[styles.button, {backgroundColor: R.colors.gray1, marginRight: WIDTHXD(20)}]}
                                    onPress={() => {
                                        props.setModalVisible(false)
                                    }}>
                                    <Text
                                        style={styles.txtContent}>{props.negativeText ? props.negativeText : i18n.t('Cancel')}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, {marginLeft: WIDTHXD(20)}]}
                                                  onPress={() => {
                                                      props.onAgreePress()
                                                      props.setModalVisible(false)
                                                  }}>
                                    <Text
                                        style={[styles.txtContent, {color: R.colors.white}]}>{props.positiveText ? props.positiveText : i18n.t('Agree')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = StyleSheet.create({
    opacity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contain: {
        backgroundColor: R.colors.white,
        borderRadius: WIDTHXD(20),
        paddingHorizontal: WIDTHXD(40),
        paddingVertical: WIDTHXD(40),
    },
    txtTitle: {
        fontSize: getFontXD(42),
        color: R.colors.brown,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: HEIGHTXD(40)
    },
    txtContent: {
        color: R.colors.black,
        textAlign: 'center',
        fontSize: getFontXD(42),
    },
    button: {
        flex: 1,
        height: HEIGHTXD(100),
        color: R.colors.white,
        marginTop: HEIGHTXD(60),
        marginBottom: HEIGHTXD(20),
        backgroundColor: R.colors.brown,
        borderRadius: WIDTHXD(15),
        justifyContent: 'center'

    }
})
export default PopupConfirm
