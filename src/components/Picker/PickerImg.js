import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import R from "../../assets/R";
import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";

import ImagePicker from "react-native-image-crop-picker";
import AppText from "../AppText";
const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

const PickerImg = (props) => {
  const { title, height, width, onClickImage } = props;

  const [imgPicker, setImgPicker] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [urlImg, setUrlImg] = useState("");
  // const [imgPicker, setImgPicker] = useState('');

  const onchoosGalery = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      multiple: true,
    }).then((images) => {
      setModalVisible(false);

      const temp = images.map((e) => e.path);
      onClickImage(temp);
    });
  };

  const onCapture = () => {
    ImagePicker.openCamera({
      mediaType: "photo",
      width: 300,
      height: 400,
    }).then((image) => {
      setModalVisible(false);

      onClickImage(image[0].path);
    });
  };

  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={{ marginTop: 10, width: WIDTHXD(480) }}
    >
      <Text style={styles.txt}>{title}</Text>
      <View style={styles.container}>
        <Icon name={"plus"} size={40} color={"#DBDBDB"} />
      </View>

      <Modal
        isVisible={isModalVisible}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={["up", "left", "right", "down"]}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1 }}></View>
        </TouchableWithoutFeedback>

        <View style={styles.containerSelect}>
          <AppText
            i18nKey={"Select_source_image"}
            style={{
              textAlign: "center",
              fontSize: getFontXD(42),
              fontWeight: "bold",
              color: "#1473E6",
            }}
          />

          <View style={styles.line} />
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.selectionImg} onPress={onCapture}>
              <Image style={styles.imgIcon} source={R.images.iconCamera} />

              <AppText i18nKey={"Take_photo"} style={styles.txtTitleBtn} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectionImg}
              onPress={onchoosGalery}
            >
              <Image style={styles.imgIcon} source={R.images.iconImg} />

              <AppText i18nKey={"Photo_library"} style={styles.txtTitleBtn} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTHXD(350),
    height: HEIGHTXD(280),
    backgroundColor: R.colors.white,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DBDBDB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: getFontXD(42),
    color: R.colors.color777,
    marginBottom: 5,
    paddingLeft: 10,
  },
  selectionImg: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerSelect: {
    height: HEIGHTXD(520),
    backgroundColor: "white",
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#929292",
    width: "100%",
    marginTop: 5,
  },
  imgIcon: {
    width: 40,
    height: 40,
  },
  txtTitleBtn: {
    textAlign: "center",
    fontSize: getFontXD(42),
    color: "#1473E6",
  },
});

export default React.memo(PickerImg);
