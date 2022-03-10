import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import R from "../../assets/R";
import { getFontXD, HEIGHTXD, WIDTHXD } from "../../Config/Functions";
import Modal from "react-native-modal";
import ImagePicker from "react-native-image-crop-picker";
import i18n from "../../helper/i18/i18n";
import { connect } from "react-redux";
import { hideLoading, showLoading } from "../../actions/loadingAction";
import { uploadFile } from "../../apis/Functions/config";
import { showAlert, TYPE } from "../DropdownAlert";
import { saveUserToRedux } from "../../actions/users";
import { ASYNC_STORE_KEY } from "../../Config/constants";
import AsyncStorage from "@react-native-community/async-storage";
import PickerImg from "./PickerImg";
import { changeAvatart } from "../../apis/Functions/users";
const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

const PickerAvatar = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [imgAvatar, setImgAvatar] = useState(props.userInfo?.avatar);
  const [isUploadAvatar, setIsUploadAvatar] = useState(false);

  const uploadAvatar = async (photo) => {
    setIsUploadAvatar(true);
    const data = new FormData();
    let fileName = photo.filename;
    if (!fileName || fileName === undefined) {
      let pathArray = photo.path.split("/");
      fileName = pathArray[pathArray.length - 1];
    }
    data.append("files", {
      name: fileName.replace(/HEIC/g, "jpg"),
      type: photo.mime,
      size: photo.size,
      uri: photo.path,
    });

    const response = await uploadFile(data);

    if (response.status === 200) {
      if (response.data.code === "OK" && response.data.data) {
        const res = await changeAvatart({ avatar: response.data.data[0]?.url });
        if (res.data.code == 200) {
          setImgAvatar(response.data.data[0].url);
          showAlert(
            TYPE.SUCCESS,
            i18n.t("Notification"),
            i18n.t("ChangeAvatartSuccess")
          );
        } else {
          showAlert(
            TYPE.ERROR,
            i18n.t("Notification"),
            i18n.t("ChangeAvatartFaild")
          );
        }

        //call api update
      } else {
        showAlert(
          TYPE.ERROR,
          i18n.t("Notification"),
          response.data.error
            ? i18n.t(response.data.error)
            : i18n.t("CallAPIError")
        );
      }
    } else {
      showAlert(TYPE.ERROR, i18n.t("Notification"), i18n.t("CallAPIError"));
    }
    setIsUploadAvatar(false);
  };

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.containerImg}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imgAvatar ? (
            <Image source={{ uri: imgAvatar }} style={styles.imgAvatar} />
          ) : (
            <Image source={R.images.icAccount} style={styles.imgAvatar} />
          )}
          {isUploadAvatar && (
            <ActivityIndicator
              color={"gray"}
              size={"small"}
              style={{
                position: "absolute",
              }}
            />
          )}
        </View>
        <View style={styles.iconPicker}>
          <Image
            style={{ width: 16, height: 16, tintColor: R.colors.white, }}
            source={R.images.iconCamera}
          />
        </View>
      </View>
      <PickerImg
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        cropping={true}
        onClickImage={(image) => {
          uploadAvatar(image);
        }}
      />
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

  imgAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: R.colors.main,
    backgroundColor: R.colors.gray1,
  },
  containerImg: {
    width: 75,
    height: 75,
  },
  iconPicker: {
    width: 24,
    height: 24,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 3,
    bottom:0,
    backgroundColor: R.colors.brown,
    borderRadius: 12,
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
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 0.5,
    backgroundColor: R.colors.gray1,
    width: "100%",
    marginTop: 5,
  },
  imgIcon: {
    width: 40,
    height: 40,
  },
  txtTitleBtn: {
    textAlign: "center",
    fontSize: 14,
    color: R.colors.black,
  },
});

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};
export default connect(mapStateToProps, {
  showLoading,
  hideLoading,
  saveUserToRedux,
})(PickerAvatar);
