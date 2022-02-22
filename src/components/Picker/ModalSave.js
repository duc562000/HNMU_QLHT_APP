import React,{ Component } from "react";
import { Text } from "react-native-elements";
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View,TextInput,StyleSheet } from "react-native";
import Modal from "react-native-modalbox";


export default class ModalSave extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFoodName:'',
            newFoodDecription:'',
        };
        
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    
    render(){
        return(
          <>
          <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={true}
                backdrop={true}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Bạn có muốn lưu thay đổi ?</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                      <Button
                        backgroundColor={"#2c3092"}
                        title={("Đồng ý")}
                        onPress={handleClose}
                      />
                      <Button
                        backgroundColor={"red"}
                        title={("Thoát")}
                        onPress={handleClose}
                      />
                    </View>  
                    
                  </View>
                </View>
              </Modal>
            </View>
          </>
        );
    }
}


  const styles = StyleSheet.create({
    
    imgIcon: {
      width: 30,
      height: 30,
    },
    wrapContent: {
      paddingLeft: 15,
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 40,
    },
    txtInfo : {
      fontSize: 50,
      fontWeight:'bold',
      color:'black',
      marginTop:15
    },
    txtDoipass: {
      fontSize: 35,
      color: '#2c3092',
      fontWeight: "bold",
      textDecorationLine:'underline'
    },
    centeredView: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    },
    modalView: {
      padding:20,
      backgroundColor: "white",
      borderRadius: 20,
      width:300,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 1,
      textAlign: "center",
      
    },
    displayblock : {
      display:'flex'
    },
    
    displaynone : {
      display:'none'
    },
  });
