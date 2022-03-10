import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,ImageBackground,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {useNavigation} from '@react-navigation/native';
import Feather  from "react-native-vector-icons/Feather";
import { TUITION_DETAILS } from "../../routers/ScreenNames";
import AntDesign  from "react-native-vector-icons/AntDesign";

export default function SubjectList({ item }) {
    const navigate = useNavigation();
    const [isPress, setIsPress] = useState(false);
    return (
            <View style={{padding:10,marginTop:15}}>
                        <View style={styles.table}>
                            <TouchableOpacity
                                onPress={() => {setIsPress(!isPress)}}
                            >
                                <Text style={styles.txtsubjects}>{item.subject}</Text>
                                <AntDesign  style={{position:'absolute',right:0,top:2}}
                                            name={isPress ? 'up' :"down"} 
                                            size={20} 
                                            color={R.colors.black} />
                            </TouchableOpacity>
                            <View style={[styles.line]}/>
                            <View style={{display:isPress ? 'flex' :'none'}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitleSubject}>Số tín chỉ</Text>
                                    <Text style={styles.txtTitleSubjectPoint}>{item.tc}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitleSubject}>Điểm chuyên cần</Text>
                                    <Text style={styles.txtTitleSubjectPoint}>{item.cc}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitleSubject}>Điểm kiểm tra</Text>
                                    <Text style={styles.txtTitleSubjectPoint}>{item.kt}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitleSubject}>Điểm thi</Text>
                                    <Text style={styles.txtTitleSubjectPoint}>{item.dthi}</Text>
                                </View>
                                <View style={styles.line}/>
                            </View>
                            <Text style={styles.txtTitleSubject}>Điểm tổng kết</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                                <View>
                                    <Text style={styles.txtTitleSubject}>Điểm số</Text>
                                    <Text style={styles.txtFinalScore}>{item.dso}</Text>
                                </View>
                                <View>
                                    <Text style={styles.txtTitleSubject}>Điểm chữ</Text>
                                    <Text style={styles.txtFinalScore}>{item.dtext}</Text>
                                </View>
                            </View>
                        </View>
            </View>
    );
}

const styles = StyleSheet.create({
    table:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        shadowOpacity:0.3,
        shadowRadius:2,
        borderColor:'#ccc',
        elevation:1,
    },
    txtsubjects:{
        color:R.colors.black,
        fontSize:18,
        fontWeight:'600',
        paddingBottom:8
    },
    txtTitleSubject:{
        color:R.colors.blacklight,
        fontSize:15,
        paddingVertical:2
    },
    txtTitleSubjectPoint:{
        color:R.colors.black,
        fontSize:16,
        paddingVertical:1,
        fontWeight:'500',
    },
    txtTitleSubjectPoint:{
        color:R.colors.black,
        fontSize:16,
        paddingVertical:1,
        fontWeight:'500',
    },
    txtFinalScore:{
        color:R.colors.red,
        fontSize:20,
        textAlign:'center',
        fontWeight:'600',
    },
    line:{
        height:1,
        backgroundColor:'#ccc',
        marginVertical:5
    }
});