import React,{useState,useEffect} from "react";
import { View, Text,TextInput, StyleSheet,TouchableOpacity,FlatList,ScrollView,Dimensions,Modal, ImageBackground,Alert,Picker } from "react-native";
import Header from "../../components/Header/Header";
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN, STUDYRESULT, TESTSCHEDULE, TUITION,RESULTKY1, RESULTKY2 } from "../../routers/ScreenNames";
import HeaderTitleCenter from "../../components/Header/Header";
import R from "../../assets/R";
import AntDesign  from "react-native-vector-icons/AntDesign";
import SubjectList from "./SubjectList";
import { pointDataList, ScoreSubjectDataKi1 } from "./PointData";




const StudyResultDetail = ({route},props) => {
    const renderSubjectList = ({ item }) => <SubjectList item={item} />;
    const { value,
            label,
            year,
            TBCh10,
            xlhth4,
            xlhth10,
            tcht,
            tctl,ListPoint
        } = route.params.selectedOnDetails
    const [isPress, setIsPress] = useState(false);
    const [search, setSearch ] = useState('');
    const [filterData,setfilterData] = useState([]);
    const [masterData,setmasterData] = useState ([]);
    useEffect(() => {
            const fetchData = async() =>{
            setfilterData(ListPoint)
            setmasterData(ListPoint)
            };
            fetchData();
        },[]);

    const serachFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemData = item.subject ? item.subject.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1 ;
            })
            setfilterData(newData);
            setSearch(text)
        } else {
            setfilterData(masterData);
            setSearch(text);
        }
    }

    return(
        <View style={{flex:1}}>
            <HeaderTitleCenter
            title={'Danh sách điểm'}
            isBack={true}
            />
            <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%',paddingBottom:100}}>
                    <ImageBackground source={R.images.bgLogo} borderRadius={5} style={{width:'100%'}}>
                        <TouchableOpacity
                            onPress={() => {setIsPress(!isPress)}}
                        >
                            <View style={[styles.hockyYear,{backgroundColor:isPress ? R.colors.lightBlue:null}]}>
                                <AntDesign name="calendar" size={22} color={isPress?'#fff':R.colors.colorBtnLogin} />
                                <Text style={[styles.TxthockyYear,{color:isPress?'#fff':R.colors.colorBtnLogin}]}>{label} {year}</Text>
                                <AntDesign  style={{left:80}}
                                            name={isPress ? 'up' :"down"} 
                                            size={20} 
                                            color={isPress?'#fff':R.colors.colorBtnLogin} />
                            </View>
                        </TouchableOpacity>
                        <View style={{display:isPress ? 'flex' :'none'}}>
                            <View style={{paddingHorizontal:10,}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.txtTitle}>Số tín chỉ học tập : </Text>
                                        <Text style={styles.txtPoint}>{tcht}</Text>
                                    </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitle}>Số tín chỉ tích lũy :</Text>
                                    <Text style={styles.txtPoint}>{tctl}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitle}>Điểm trung bình hệ số 4 :</Text>
                                    <Text style={styles.txtPoint}>{value}</Text>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={styles.txtTitle}>Điểm trung bình hệ số 10 :</Text>
                                    <Text style={styles.txtPoint}>{TBCh10}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:10}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={styles.txtTitle}>Xếp loại hệ số 4</Text>
                                        <Text style={styles.txtPoint}>{xlhth4}</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={styles.txtTitle}>Xếp loại hệ số 10</Text>
                                        <Text style={styles.txtPoint}>{xlhth10}</Text>
                                    </View>
                            </View>
                        </View>
                    </ImageBackground>
                    
                    <FlatList
                        data={filterData}
                        renderItem={renderSubjectList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={
                        <TextInput
                            value={search}
                            placeholder='Tìm kiếm môn học'
                            onChangeText={(text) => serachFilter(text)}
                            style={{
                                marginTop:20,
                                marginHorizontal:10,
                                borderRadius:5,
                                padding:10,
                                backgroundColor:'#fff' ,
                                borderWidth:0.5,
                                shadowOpacity:0.3,
                                shadowRadius:2,
                                borderColor:'#ccc',
                                elevation:1,
                                height:39
                            }}
                        >
                            
                        </TextInput>
                        }
                    />
                    
            </ImageBackground>
            
        </View>
    );
}


const styles = StyleSheet.create({
    hockyYear:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
    },
    TxthockyYear:{
        color:R.colors.colorBtnLogin,
        fontWeight:'500',
        paddingLeft:10,
        fontSize:15
    },
    txtTitle:{
        fontSize:16,
        paddingVertical:5,
        color:R.colors.colorBtnLogin
    },
    txtPoint:{
        fontSize:18,
        fontWeight:'600',
        color:R.colors.red,
        paddingVertical:3,
    },
    line:{
        height:1,
        backgroundColor:'#ccc',
        marginHorizontal:5,
        marginVertical:5
    },
    
})

export default StudyResultDetail;
