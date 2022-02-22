import { tr } from "date-fns/locale";
import React,{useEffect, useState,Component} from "react";
import { View, Text,SafeAreaView,ActivityIndicator,FlatList,StyleSheet ,TouchableOpacity,Alert,Linking} from "react-native";
import Header from "../../components/Header/Header";
import FlatlistDataNoti from "./FlatlistDataNoti";
import Swipeout from "react-native-swipeout";


class FlatlistItemNoti extends Component  {
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

    changeColor() {
      if(!this.state.pressed){
        this.setState({ pressed: true,backgroundColor: '#ace8ff'});
      } else {
        null
      }
    }
    link = () => {
      Linking.openURL(this.props.item.url)
    }
    functionCombined() {
      this.changeColor();
      this.link()
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
                FlatlistDataNoti.splice(this.props.index, 1);
                this.props.parentFlastList.refreshFlastListData(this.state.activeRowId)
                  // const deletingRow = this.state.activeRowId;
                  // Alert.alert(
                  //     'Alert',
                  //     'Bạn có muốn xóa thông báo?',
                  //     [
                  //         {text:"No" ,onPress :() => console.log('Cancel Passed'), style: 'cancel'},
                  //         {text:"Yes", onPress :() =>{
                  //             FlatlistDataNoti.splice(this.props.index, 1);
                  //             this.props.parentFlastList.refreshFlastListData(deletingRow)
                  //         }},
                  //     ],
                  //     {cancelable:true}
                  // );
              },
              text:'Gỡ', type:'delete'
          }
      ],
      rowId : this.props.index,
      sectionId: 1,
    };
    return(
    <Swipeout {...swipeSettings}>
      <View style={{flex:1}}>
        <View style={[styles.styleNoti,
          {backgroundColor: this.props.item.isSeen ? '#ace8ff' : '#a5caf9' }
          ]}>
          <TouchableOpacity
            // style={[styles.btnTab && styles.btnTabActive]}
            style={{backgroundColor:this.state.backgroundColor}}
            onPress={()=>this.functionCombined()}
            
          >
            <Text style={styles.textNotiName}>{this.props.item.name}</Text>
            <Text style={styles.textNotitime}>{this.props.item.time}</Text>
          </TouchableOpacity>
        </View>
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
      }

    refreshFlastListData = (deletedId) =>
            {
                this.setState((prevState) => {
                    return{
                        deletedRowId : deletedId
                    };
                });
                
            }
    render(){
      return(
        <View style={{ flex: 1,backgroundColor:'#fff'}}>
          <Header title={"Thông báo"} icons={'bell'} />
          

          {/* {isLoading ? (
              <View style={styles.center}>
                <ActivityIndicator size="large" color="#e74c3c" />
              </View>
              ) : ( */}
        
            <FlatList
            data={FlatlistDataNoti}
            renderItem={({item,index})=>{
              return(
                <FlatlistItemNoti
                  item={item}
                  index={index}  
                  parentFlastList={this}
                >
                </FlatlistItemNoti>
                
              );
            }} 
        
            
            // showsVerticalScrollIndicator={false}
            // keyExtractor={keyExtractor}
            // onEndReached={() => setPage((page) => page + 1)}
          />
        
          
    </View>
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
  borderButtom:{
    height:2,
    width:'100%',
    backgroundColor:'tomato',
    marginTop:20,
    marginBottom:20,
  },
  styleNoti :{
    flex:1,
    borderBottomColor:'#2c3092',
    borderWidth:0.2
  },
  textNotiName:{
    color:'#000',
    fontSize:18,
    fontWeight:'bold',
    margin:10
  },
  textNotitime:{
    textAlign:'right',
    bottom:0,
    margin:10,
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
