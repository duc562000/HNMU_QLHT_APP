import { tr } from "date-fns/locale";
import React,{useEffect, useState,Component} from "react";
import { View, Text,SafeAreaView,ActivityIndicator,FlatList,StyleSheet ,TouchableOpacity,Alert,Linking,Image, ImageBackground} from "react-native";
import Header from "../../components/Header/Header";
import FlatlistDataNoti from "./FlatlistDataNoti";
import Swipeout from "react-native-swipeout";
import RenderItem from "./renderItem";
import R from "../../assets/R";
import HeaderTitleLeft from "../../components/Header/HederTitleLeft";
import { LOGINSCREEN, NOTIFICATION_DETAILS } from "../../routers/ScreenNames";


const NotificationView = (props) => {
      const [isLoading, setLoading] = useState(true);
      const [articles, setArticles] = useState([]);
      const renderArticle = ({ item }) => <RenderItem item={item} />;
      useEffect(() => {
        const fetchData = async() =>{
          setTimeout(() => {
            setArticles(FlatlistDataNoti);
            setLoading(false);
          },2000)
        };
        fetchData();
      },[]);
      return(
        <ImageBackground source={R.images.bgBody} style={{ flex: 1}}>
          <HeaderTitleLeft title={"THÔNG BÁO"} />
          
          {isLoading ? (
              <View style={styles.center}>
                <ActivityIndicator size="large" color="#2c3092" />
              </View>
              ) : ( 

          <FlatList
            data={articles}
            renderItem={renderArticle}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            />
              )}
    </ImageBackground>
      );
    }

export default NotificationView;




  
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
  smallNews:{
    alignItems:'center',
},
smallNewsImg:{
    height:85,
    maxWidth:'39%',
    resizeMode: 'stretch'
},
txtsmallNews:{
    fontSize:15,
    marginBottom:8,
    width:205,    
},
timesmallNews:{
    fontSize:13,
}
});




// class FlatlistItemNoti extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//         activeRowId : null
//     };
// }

//     state={
//       backgroundColor: '#a5caf9',
//       pressed: false,
//     };

//     changeColor() {
//       if(!this.state.pressed){
//         this.setState({ pressed: true,backgroundColor: '#ace8ff'});
//       } else {
//         null
//       }
//     }
//     link = () => {
//       Linking.openURL(this.props.item.url)
//     }
//     functionCombined() {
//       this.changeColor();
//       this.link()
//   } 
  
  

//   render() {
    
    
    
//     // const [color,setColor] = useState('');
//     const swipeSettings = {
//       autoClose: true,
//       onClose : () => {
//           if(this.state.activeRowId != null){
//               this.setState({activeRowID:null});
//           }
//       },
//       onOpen : () => {
//           this.setState({activeRowId: this.props.item.id});
//       },
//       right : [
//           {
//               onPress: () => {
//                 FlatlistDataNoti.splice(this.props.index, 1);
//                 this.props.parentFlastList.refreshFlastListData(this.state.activeRowId)
//                   // const deletingRow = this.state.activeRowId;
//                   // Alert.alert(
//                   //     'Alert',
//                   //     'Bạn có muốn xóa thông báo?',
//                   //     [
//                   //         {text:"No" ,onPress :() => console.log('Cancel Passed'), style: 'cancel'},
//                   //         {text:"Yes", onPress :() =>{
//                   //             FlatlistDataNoti.splice(this.props.index, 1);
//                   //             this.props.parentFlastList.refreshFlastListData(deletingRow)
//                   //         }},
//                   //     ],
//                   //     {cancelable:true}
//                   // );
//               },
//               text:'Gỡ', type:'delete'
//           }
//       ],
//       rowId : this.props.index,
//       sectionId: 1,
//     };
//     // const renderArticle = ({ item }) => <RenderItem item={item} />;
//     // const navigation = useNavigation();
//     return(
//     <Swipeout {...swipeSettings}>
//       <View style={{flex:1}}>
//         <View style={[styles.styleNoti,
//           {backgroundColor: this.props.item.isSeen ? '#a5caf9' : R.colors.lightBlue2 }
//           ]}>
//           <TouchableOpacity
//             // style={[styles.btnTab && styles.btnTabActive]}
//             style={{backgroundColor:this.state.backgroundColor}}
//             onPress={()=>this.functionCombined()}
            
//           >
//             <RenderItem/>
//           </TouchableOpacity>
//         </View>
//       </View>

//     </Swipeout>
    
    
//     );
//   }
// }