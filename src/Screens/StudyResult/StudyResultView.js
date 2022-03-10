import React,{useState} from "react";
import { View, Text, StyleSheet,TouchableOpacity,FlatList,ScrollView,Dimensions,Modal, ImageBackground,Alert,Picker } from "react-native";
import Header from "../../components/Header/Header";
import { NEWSCREEN,REVIEWS,SCHEDULESCREEN, STUDYRESULT, TESTSCHEDULE, TUITION,RESULTKY1, RESULTKY2, STUDYRESULT_DETAIL } from "../../routers/ScreenNames";
import { Button } from 'react-native-elements';
import ButtonList from "../home/ButtonList";
import { itemWidth } from "../../Config/Functions";
import HeaderTitleCenter from "../../components/Header/Header";
import R from "../../assets/R";
import { BarChart } from "react-native-gifted-charts";
import AntDesign  from "react-native-vector-icons/AntDesign";
import {useNavigation} from '@react-navigation/native';
import { pointDataList,pointData } from "./PointData";



const StudyResultView = (props) => {
  const barData = [
    {value: 2.88, label: 'KỲ 1',year:'2018 - 2019',TBCh10:'7.38',Tc:'18/18',xlhth4:'Khá',xlhth10:'Khá',tcht:22,
    onPress:() => onClick(1),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 1</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>2.88</Text>},
    {value: 2.26, label: 'KỲ 2',year:'2018 - 2019',TBCh10:'6.58',Tc:'17/17',xlhth4:'Khá',xlhth10:'Khá',tcht:20,
    onPress:() => onClick(2),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 2</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>2.26</Text>},
    {value: 2.58, label: 'KỲ 3',year:'2019 - 2020',TBCh10:'6.73',Tc:'18/18',xlhth4:'Khá',xlhth10:'Khá',tcht:22,
    onPress:() => onClick(3),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 3</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>2.58</Text>},
    {value: 2.61, label: 'KỲ 4',year:'2019 - 2020',TBCh10:'7.08',Tc:'17/17',xlhth4:'Khá',xlhth10:'Khá',tcht:17,
    onPress:() => onClick(4),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 4</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>2.61</Text>},
    {value: 3.08, label: 'KỲ 5',year:'2020 - 2021',TBCh10:'7.49',Tc:'13/13',xlhth4:'Khá',xlhth10:'Khá',tcht:13,
    onPress:() => onClick(5),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 5</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>3.08</Text>},
    {value: 2.98, label: 'KỲ 6',year:'2020 - 2021',TBCh10:'7.75',Tc:'19/19',xlhth4:'Khá',xlhth10:'Khá',tcht:19,
    onPress:() => onClick(6),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 6</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>2.98</Text>},
    {value: 3.21, label: 'KỲ 7',year:'2021 - 2022',TBCh10:'7.84',Tc:'16/16',xlhth4:'Giỏi',xlhth10:'Khá',tcht:16,
    onPress:() => onClick(7),
    labelComponent: () => <Text style={styles.labelStyle}>Kỳ 7</Text>,
    topLabelComponent: () => <Text style={styles.valueOnTop}>3.21</Text>},
];

    const [selected, setSelected] = useState([]);
    const [selectedOnDetails, setSelectedOnDetails] = useState([]);
    const [showPoint,setShowPoint] = useState(false)
    const onClick = (button) => {
        setShowPoint(true)
        setSelected(barData[button-1])
        setSelectedOnDetails(pointDataList[button-1])
  }
  const navigate = useNavigation();

    return(
      
      <View style={{flex:1}}>
        <HeaderTitleCenter
          title={'Kết quả học tập'}
          isBack={true}
        />
          <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%'}}>
            <ScrollView>
            <View style={{paddingHorizontal:3,marginVertical:10}}>
              <Text style={{paddingHorizontal:5,fontSize:12,paddingVertical:5,color:R.colors.colorBtnLogin}}>Hệ số 4</Text>
              <BarChart
                frontColor={'#1a5eff'}
                dashGap={20}
                rulesColor={'#ffff'}
                height={300}
                showFractionalValues
                noOfSections={6}
                maxValue={4}
                data={barData}  
                isAnimated
                barWidth={30}
                initialSpacing={10}
                rotateLabel
                isThreeD 
                sideColor= {'#227efb'}
                topColor={ R.colors.lightBlue2}
                side="right"
                yAxisTextStyle={{color: R.colors.colorBtnLogin,fontWeight:'600'}}
                xAxisColor={R.colors.gray}
                yAxisColor={R.colors.gray}
                
                
              />
              </View>
                  {showPoint ?(
                    <View style={{paddingHorizontal:10,paddingVertical:50}}>
                      <View  style={styles.border}>
                        <Text style={[styles.txtYear,{textTransform:'capitalize'}]}>{selected?.label} NĂM HỌC {selected?.year} </Text>
                          <View style={{paddingHorizontal:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                              <Text style={styles.txtSmall}>Điểm trung bình tích lũy (Hệ 4): </Text>
                              <Text style={styles.txtPoints}>{selected?.value}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                              <Text style={styles.txtSmall}>Điểm trung bình tích lũy (Hệ 10): </Text>
                              <Text style={styles.txtPoints}>{selected?.TBCh10}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                              <Text style={styles.txtSmall}>Xếp loại học tập chung: </Text>
                              <Text style={styles.txtPoints}>{selected?.xlhth4}</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                              <Text style={styles.txtSmall}>Số tín chỉ học tập: </Text>
                              <Text style={styles.txtPoints}>{selected?.tcht}</Text>
                            </View>
                          </View>

                        {showPoint ? (
                        
                          <TouchableOpacity 
                            onPress={() => navigate.navigate(STUDYRESULT_DETAIL,{selectedOnDetails})}
                            style={{position:'absolute',right:12,top:6}}>
                            <AntDesign name="rightcircle" size={30} color={R.colors.colorBtnLogin} />
                          </TouchableOpacity>                       
                        ):null
                        }
                      </View>
                    </View> ) : (
                      <View style={{paddingHorizontal:10,paddingVertical:50}}>
                      <View  style={styles.border}>
                        <Text style={styles.txtYear}>Kết quả chung: </Text>
                        { pointData.map((e) => {
                          return(
                            <View style={{paddingHorizontal:10,paddingVertical:5}}>
                              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={styles.txtTitle}>{e.title}</Text>
                                <Text style={styles.txtPoint}>{e.point}</Text>
                              </View>
                            </View>
                          )
                        })}
                      </View>
                    </View>
                    ) }
              
            </ScrollView>
          </ImageBackground>
        
      </View>
    );
}


const styles = StyleSheet.create({
  txtTitle:{
    fontSize:16,
    color:R.colors.colorBtnLogin
  },
  txtPoint:{
    fontSize:16,
    color:R.colors.colorBtnLogin,
    fontWeight:'600'
  },
  txtPoints:{
    fontSize:16,
    color:R.colors.colorBtnLogin,
    fontWeight:'600',
    paddingVertical:12
  },
  txtYear : {
    fontSize:18,
    textAlign:'center',
    paddingVertical:10,
    color:R.colors.colorBtnLogin,
    fontWeight:'700'
  },
  txtSmall : {
    fontSize: 16,
    color:R.colors.colorBtnLogin,
    paddingVertical:12
  },
  border:{
    borderWidth:2,
    borderStyle: 'dashed',
    borderColor:R.colors.colorBtnLogin,
  },
  valueOnTop : {
    color:'#1a5eff',
    fontSize:12,
  },
  labelStyle : {
    color:R.colors.colorBtnLogin,
    fontSize:16,
    fontWeight:'600'
  }
})

export default StudyResultView;
