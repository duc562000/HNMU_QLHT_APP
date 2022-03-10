import React, { Component } from 'react';
import {
    FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput,
    ImageBackground
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from '../../components/Button';
import FlatListDataNote from './FlatListDataNote';
import R from '../../assets/R';
import moment from "moment";

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            time:'00:00'
        }
    }
    
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    width: screen.width - 80,
                    height: 280,
                    
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <ImageBackground borderRadius={15} source={R.images.bgLogo} style={{width:'100%',height:'100%'}}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>Thêm ghi chú mới</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: '#aaa',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderWidth:1,
                        borderRadius:5,
                        padding:10,
                        backgroundColor:'#fff'
                    }}           
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Nhập ghi chú mới"
                    value={this.state.name}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        borderColor: '#aaa',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderWidth:1,
                        borderRadius:5,
                        padding:10,
                        backgroundColor:'#fff'
                    }}
                    keyboardType={"numeric"} 
                    onChangeText={(time) => this.setState({time})}
                    placeholder="Thời gian thực hiện"
                    value={this.state.time}
                />
                <View style={{alignItems:'center',paddingVertical:15}}>
                <Button
                    widthBtn={150}
                    title={'Lưu ghi chú'}
                    onPress={() => {
                        if (this.state.name.length == 0 ) {
                            alert("Vui lòng nhập ghi chú muốn thêm !");
                            return;
                        }       
                        const newKey = this.generateKey(24);
                        const newFood = {
                            id: newKey,
                            name: this.state.name,
                            time: this.state.time
                        };    
                        FlatListDataNote.push(newFood);    
                        this.props.parentFlatList.refreshFlatListData(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}>
                </Button>
                </View>
                </ImageBackground>
            </Modal>
        );
    }
}