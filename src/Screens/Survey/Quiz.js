import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated,StyleSheet,ScrollView, ImageBackground } from 'react-native'
import R from '../../assets/R';
// import data from '../Survey/QuizData';ß
import Feather from 'react-native-vector-icons/Feather';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
import Button from '../../components/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import InputForm from '../../components/Input/InputForm';
import { Controller,useForm } from 'react-hook-form';
import AntDesign  from "react-native-vector-icons/AntDesign";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";



const data = [
    {
        question: "Trong 14 ngày qua, bạn có thấy những triệu chứng nào sau đây không ? :",
        options: ["Sốt","Ho",'Mất vị/Mất mùi','Đau họng','Cảm giác mệt','Triệu chứng khác','Không'],
        isInput:false
        
    },
    {
        question: "Bạn có đang mắc COVID-19 không?",
        options: ["Có","Không"],
        isInput:false
    },
    {
        question: "Tiếp xúc gần ca nhiễm, ca nghi nhiễm COVID-19 trong vòng 14 ngày qua",
        options: ["Có","Không"],
        isInput:false
    },{
        question: "Đi từ quốc gia hoặc vùng lãnh thổ khác trong vòng 14 ngày qua",
        options: ["Có","Không"],
        isInput:false
    },{
        question: "Bạn có kết thúc cách ly tập trung trong vòng 14 ngày qua không? ",
        options: ["Có","Không"],
        isInput:false
    },{
        question: "Trong vòng 14 ngày qua, trong gia đình/cơ quan bạn có ai sốt hay ho không?",
        options: ["Có","Không"],
        isInput:false
    },{
        question: "Bạn đã xuất viện do điều trị COVID-19 trong vòng 14 ngày qua không?",
        options: ["Có","Không"],
        isInput:false
    },
    {
        question: "Vui lòng cung cấp thêm các chi tiết hoặc thông tin về triệu chứng , dịch tễ , lịch sử di chuyển (Nếu có)",
        isInput:true
    },
    
]


const Quiz = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        } = useForm();
    const navigate = useNavigation();
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState([]);
    const [correctOption, setCorrectOption] = useState([]);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
            setCurrentOptionSelected(selectedOption);
            // setIsOptionsDisabled(true);
            setShowNextButton(true)
        
    }

    
    const handleNext = (dataAnswer) => {
        console.log(dataAnswer);
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected([]);
            setIsOptionsDisabled(false);
            setShowNextButton(true);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const DoneToHome = () => {
        setShowScoreModal(false);
        navigate.navigate(TABNAVIGATOR)
        // setCurrentQuestionIndex(0);
        // setScore(0);

        setCurrentOptionSelected([]);
        setCorrectOption([]);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }



    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                

                {/* Question */}
                <Text style={{
                    color: R.colors.black,
                    fontSize: 20,
                    fontWeight:'600',
                    textAlign:'center'
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                allQuestions[currentQuestionIndex].isInput
                    ?
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value, } }) => (
                            <InputForm
                                    textColor={R.colors.black}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeHolderColor={"#333"}
                                    placeholder={"Nhập câu trả lời"}
                                
                            />
                            )}
                            name='Cautraloi'
                            defaultValue=""
                        />
                    :
            <View>
                {
                    allQuestions[currentQuestionIndex].options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 1, 
                            borderColor:R.colors.gray+'80',
                            backgroundColor: R.colors.white,
                            height: 60, borderRadius: 5,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: R.colors.black}}>{option}</Text>
                            {
                                currentOptionSelected.includes(option) ? (
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Feather name="check-square" size={24} color={R.colors.dollar} />
                                    </View>
                                ) : <View style={{
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Feather name="square" size={24} color={R.colors.black} />
                                </View>
                            }

                        </TouchableOpacity>
                    ))
                }

                        </View>
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <View style={{marginTop:100}}>
                    <Button
                        onPress={handleSubmit(handleNext)}
                        title='Tiếp theo'
                    >
                    </Button>
                </View>
                
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <>
            <View style={{alignItems:'center',marginTop:-20,marginBottom:20}}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={styles.txtCurrentQs}>{currentQuestionIndex+1} </Text>
                    <Text style={styles.txtCurrentQs}>/ {allQuestions.length}</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 6,
                borderRadius: 20,
                backgroundColor: '#ddd'

            }}>
                <Animated.View style={[{
                    height: 6,
                    borderRadius: 20,
                    backgroundColor: R.colors.colorBtnLogin,
                    
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
            </>
        )
    }


    return (
        
    <ScrollView showsHorizontalScrollIndicator={false}>
       <SafeAreaView style={{
           flex: 0
       }}>
           <StatusBar barStyle="light-content" />
           <View style={{
               flex: 1,
               paddingVertical: 50,
               paddingHorizontal: 16,
               backgroundColor: R.colors.white,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       
                       marginTop:80,
                       flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <ImageBackground
                        source={R.images.bgLogo}
                        borderRadius={20}
                        style={{
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           {/* <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text> */}

                           <View style={{
                               
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 23,
                                   padding:25,
                                   fontWeight:'600',
                                   color: R.colors.black,
                                   textAlign:'center'
                               }}>Khai báo y tế thành công !</Text>
                               <FontAwesome5 name="check-circle" size={55} color="green" />
                           </View>
                           {/* Retry Quiz button */}
                           <View style={{marginTop:20,marginBottom:10}}>
                            <Button
                            widthBtn={200}
                            onPress={(DoneToHome)}
                            title='Hoàn thành'
                            >
                            
                            </Button>
                           </View>

                       </ImageBackground>

                   </View>
               </Modal>

               {/* Background Image */}
               

           </View>
       </SafeAreaView>
    </ScrollView>                           
    )
}

const styles = StyleSheet.create({
    txtCurrentQs : {
        fontSize :20,
        fontWeight:'bold',
        color:R.colors.colorBtnLogin,
    }
})

export default Quiz