import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput,ImageBackground
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from '../../components/Button';
import FlatlistDataNote from './FlatListDataNote';
import R from '../../assets/R';


var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            time: ''
        };
    }
    showEditModal = (editingFood, flatlistItem) => {     
        // console.log(`editingFood = ${JSON.stringify(editingFood)}`);           
        this.setState({
            id: editingFood.id,
            name: editingFood.name,
            time: editingFood.time,
            flatlistItem: flatlistItem
        });
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
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
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
                }}>Sửa ghi chú</Text>
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
                    placeholder="Nhập ghi chú"
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
                    onChangeText={(text) => this.setState({ time: text })}
                    placeholder="Nhập thời gian thực hiện"
                    value={this.state.time}
                />
                <View style={{alignItems:'center',paddingVertical:15}}>
                <Button
                    widthBtn={150}
                    title={'Sửa ghi chú'}
                    onPress={() => {
                         if (this.state.name.length == 0 || this.state.time.length == 0) {
                            alert("Vui lòng nhập nội dung cần sửa !");
                            return;
                        }       
                        //Update existing Food
                        var foundIndex = FlatlistDataNote.findIndex(item => this.state.id == item.id);
                        if (foundIndex < 0) {
                            return; //not found
                        }
                        FlatlistDataNote[foundIndex].name = this.state.name;
                        FlatlistDataNote[foundIndex].time = this.state.time;
                        //Refresh flatlist item
                        this.state.flatlistItem.refreshFlatListItem();
                        this.refs.myModal.close();                                                                       
                    }}>
                </Button>
                </View>
            </ImageBackground>
            </Modal>
        );
    }
}