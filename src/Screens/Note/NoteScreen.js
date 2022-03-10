import { tr } from "date-fns/locale";
import React,{useEffect, useState,Component} from "react";
import { View, Text,SafeAreaView,ActivityIndicator,FlatList,StyleSheet ,TouchableOpacity,Alert,Linking, ImageBackground} from "react-native";
import Header from "../../components/Header/Header";
import FlatlistDataNote from "./FlatListDataNote";
import Swipeout from "react-native-swipeout";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import R from "../../assets/R";


class NoteScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
        activeRowId : null
    };
}
    state={
      backgroundColor: '#a5caf9',
      pressed: false,
    };

    // changeColor() {
    //   if(!this.state.pressed){
    //     this.setState({ pressed: true,backgroundColor: '#ace8ff'});
    //   } else {
    //     null
    //   }
    // }
    // link = () => {
    //   Linking.openURL(this.props.item.url)
    // }
    functionCombined() {
      // this.changeColor();
      // this.link()
  } 
  refreshFlatListItem = () => {
    this.setState((prevState) => {
        return {
            numberOfRefresh: prevState.numberOfRefresh + 1
        };
    });        
}

  render() {

    
    
    // const [color,setColor] = useState('');
    const swipeSettings = {
      autoClose: true,
      onClose : () => {
          if(this.state.activeRowId != null){
              this.setState({activeRowID:null});
          }
      },
      onOpen : () => {
          this.setState({activeRowId: this.props.item.id});
      },
      
      right : [
        { 
            onPress: () => {                            
                // alert("Update");
                this.props.parentFlatList.refs.editModal.showEditModal(FlatlistDataNote[this.props.index], this);
            }, 
            text: 'Sửa', type: 'primary' ,backgroundColor:R.colors.colorBtnLogin
        },
          {
              onPress: () => {
                FlatlistDataNote.splice(this.props.index, 1);
                this.props.parentFlatList.refreshFlatListData(this.state.activeRowId)
                
              },
              text:'Xóa', type:'delete'
          }
      ],
      rowId : this.props.index,
      sectionId: 1,
    };
    return(
    <Swipeout {...swipeSettings}>
      <View style={{flex:1}}>
        <ImageBackground source={R.images.bgLogo} style={[styles.styleNoti,
          ]}>
            <TouchableOpacity
              style={{paddingVertical:20}}
              onPress={()=>this.props.parentFlatList.refs.editModal.showEditModal(FlatlistDataNote[this.props.index], this)}
              
            >
              <Text style={styles.textNotiName}>{this.props.item.name}</Text>
              <Text style={styles.textNotitime}>{this.props.item.time}</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>

    </Swipeout>
    
    
    );
  }
}

export default class NotificationView extends Component {
      constructor(props) {
        super(props);
        this.state = ({
            deletedRowId : null
      
        });
        this._onPressAdd = this._onPressAdd.bind(this);
      }

    refreshFlatListData = (activeId) =>
            {
                this.setState((prevState) => {
                    return{
                        deletedRowId : activeId
                    };
                });
                this.refs.FlatList.scrollToEnd();
            }
    _onPressAdd(){
        // alert('hi')
        this.refs.addModal.showAddModal();
    }
    render(){
      return(
        <ImageBackground source={R.images.bgBody} style={{ flex: 1}}>
          <Header title={"Ghi chú"} isBack={true} />
            <View style={{position:'absolute',right:15,top:60}}>
                <TouchableOpacity onPress={this._onPressAdd}>
                    <FontAwesome5 name="plus-circle" size={25} color={R.colors.white} />
                </TouchableOpacity>
            </View>
            
              <FlatList
              ref={'FlatList'}
              data={FlatlistDataNote}
              renderItem={({item,index})=>{
                return(
                  <>
                  <View style={{paddingVertical:2,
                                borderWidth:0.2,
                                shadowOpacity:0.2,
                                shadowRadius:0.3,
                                borderColor:'#ccc',
                                
                  }}>
                      <NoteScreen
                        item={item}
                        index={index}  
                        parentFlatList={this}
                      >
                      </NoteScreen>
                  </View>
                  </>
                );
              }} 
              />
            
          
        <AddModal ref={'addModal'} parentFlatList={this}>

        </AddModal>
        <EditModal ref={'editModal'} parentFlatList={this}>

        </EditModal>
    </ImageBackground>
      );
    }
}






  
const styles = StyleSheet.create({
  container: {
    
    margin:20,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText:{
    fontSize:30,
    color:'tomato',
    fontWeight:'bold',
    marginBottom:20
  },
  post:{
    
  },
  imgNews:{
    width:160,
    height:100,
    marginRight:20
  },
  titleText:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
    height:70
  },
  textTime:{
    color:'#aaa'
  },
  
  styleNoti :{
    borderWidth:0.2,
    borderColor:'#aaa'
  },
  textNotiName:{
    color:R.colors.colorBtnLogin,
    fontSize:18,
    fontWeight:'500',
    paddingHorizontal:10,
  },
  textNotitime:{
    color:'#000',
    fontSize:15,
    paddingHorizontal:10,
  },
  btnTab:{
    // width:Dimensions.get('window').width / 3.5,
    backgroundColor:'#fff'
  },
  textTab:{
    color:'#2c3092',
    fontSize:16,
    fontWeight:'bold'
    
  },
  btnTabActive :{
    backgroundColor:'#2c3092',
  },
});
// backgroundColor:'#ace8ff',