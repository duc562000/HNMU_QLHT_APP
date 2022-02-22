import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import R from "../../assets/R";
import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import Icon from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";

const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

const PickerImg = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imgAvatart, setImgAvatart] = useState();
  const onchoosGalery = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      multiple: false,
      cropping: true,
      width: 300,
      height: 300,
    }).then((image) => {
      setModalVisible(false);
      setImgAvatart(image.path);
    });
  };

  const onCapture = () => {
    ImagePicker.openCamera({
      mediaType: "photo",
      multiple: false,
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      setModalVisible(false);
      setImgAvatart(image.path);
    });
  };
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.containerImg}>
        {imgAvatart ? (
          <Image source={{ uri: imgAvatart }} style={styles.imgAvatar} />
        ) : (
          <Image
            source={{ uri: props.avatartDefault }}
            style={styles.imgAvatar}
          />
        )}
        <View style={styles.iconPicker}>
          <Image
            style={{ width: 25, height: 25 }}
            source={R.images.iconCamera}
          />
        </View>
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
          <Text
            style={{
              textAlign: "center",
              fontSize: getFontXD(42),
              fontWeight: "bold",
              color: "#1473E6",
            }}
          >
            Chọn nguồn lấy ảnh
          </Text>

          <View style={styles.line} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.selectionImg} onPress={onCapture}>
              <Image style={styles.imgIcon} source={R.images.iconCamera} />
              <Text style={styles.txtTitleBtn}>Chụp ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectionImg}
              onPress={onchoosGalery}
            >
              <Image style={styles.imgIcon} source={R.images.iconImg} />
              <Text style={styles.txtTitleBtn}>Thư viện ảnh</Text>
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
    borderRadius: 10,
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
  imgAvatar: {
    width: WIDTHXD(240),
    height: WIDTHXD(240),
    borderRadius: WIDTHXD(130),
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor:'#fff'
  },
  containerImg: {
    width: WIDTHXD(240),
    height: WIDTHXD(240),
  },
  iconPicker: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default PickerImg;
