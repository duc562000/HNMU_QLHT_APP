import React,{useState} from "react";
import { View, Text,StyleSheet,Modal, ImageBackground,FlatList,TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header/Header";
import PickerDate from "../../components/Picker/PickerDate";
import PickerModal from "../../components/Picker/PickerModal";
import ItemReviewForm from "./ItemReviewForm";
import ListReviewForm from "./ListReviewForm";
import AntDesign  from "react-native-vector-icons/AntDesign";
import R from "../../assets/R";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import { getFontXD } from "../../Config/Functions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonRadio from '../../components/ButtonRadio'
import PickerOpenInput from "../../components/Picker/PickerOpenInput";





const EvaluteUser = (props) => {
  const [modalSubmit, setModalSubmit] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const showModal = () => {
    setModalSubmit(true);
    setTimeout(() => {
      setModalSubmit(false);
    }, 3000);
  };
  return (
    <>
      <Header title={"Đánh giá cá nhân"} isBack ={true}/>
        <ImageBackground source={R.images.bgBody} style={{width:'100%',alignItems:'center',height:'100%'}}>
          <ScrollView>
            <PickerOpenInput
                title={'1.Ý thức biểu hiện bằng kết quả học tập'}
                questions1={'1.1 Có điểmTBCHT đạt xuất sắc (Tối đa 3 đ)'}
                questions2={'1.2 Có điểmTBCHT đạt loại Giỏi (Tối đa 2 đ)'}
                questions3={'1.3 Có điểmTBCHT đạt loại Khá (Tối đa 1 đ)' }
                questions4={'1.4 Có điểmTBCHT đạt loại TB Khá (Tối đa 1 đ)'}
                questions5={'1.5 Có điểmTBCHT đạt loại TB (Tối đa 1 đ)'}
                questions6={'1.6 Có điểmTBCHT đạt loại Yếu (Tối đa 1 đ)'}
                questions7={'1.7 Có điểmTBCHT đạt loại Kém (Tối đa 1 đ)'}
                widthInput={200}
            />
            <PickerOpenInput
            title={'2.Tham gia đầy đủ giờ học lý thuyết'}
            questions1={'2.1 Không nghỉ buổi học nào trong kỳ (Tối đa 3 đ)'}
            questions2={'2.2 Chuẩn bị bài và đồ dùng học tập đầy đủ khi đến lớp (Tối đa 2 đ)'}
            questions3={'2.3 Không vi phạm nội quy thi, kiểm tra (Tối đa 3 đ)'  }
            widthInput={200}
            />
            <PickerOpenInput
            title={'3.Tham gia đầy đủ giờ thực hành, thực tập và làm đủ các chuyên đề bài tập, môn học'}
            questions1={'3.1 Tham gia đủ các hoạt động trên theo kế hoạch học tập (Tối đa 2 đ)'}
            questions2={'3.2 Thực hiện đầy đủ các bài thu hoạch, các báo cáo chuyên đề và các bài tập lớn môn học(Tối đa 2 đ)'}
            widthInput={200}
            />
            <PickerOpenInput
            title={'4.Ý thức chung'}
            questions1={'4.1 Ý thức vượt khó vươn lên học tập tốt (Tối đa 3 đ)'}
            questions2={'4.2 Khiêm tốn học hỏi và giúp đỡ Bạn học tập tốt (Tối đa 2 đ)'}
            questions3={'4.3 Có tham gia NCKH, thi HSSV giỏi môn học các cấp Khoa, Trường, được khen thưởng hoặc tham gia học thêm tin học, ngoại ngữ… (Tối đa 3 đ)'  }
            widthInput={200}
            />
            <PickerOpenInput
                title={'5.Về ý thức chấp hành nội quy, quy chế trong nhà trường'}
                questions1={'5.1 Tham gia đầy đủ các đợt học tập NQ-QC, sinh hoạt tập thể (Tối đa 3 đ)'}
                questions2={'5.2 Tích cực đấu tranh những hành vi làm sai NQQC và vận động có hiệu quả người thực hiện NQQC (Tối đa 5 đ)'}
                questions3={'5.3 Không đến muộn, về sớm các giờ học (Tối đa 1 đ)' }
                questions4={'5.4 Không bị kỷ luật từ khiển trách trở lên (Tối đa 1 đ)'}
                questions5={'5.5 Thực hiện việc đăng ký và làm tốt quy định về quy chế nội, ngoại trú (Tối đa 4 đ)'}
                questions6={'5.6 Đóng học phí đầy đủ, đúng thời hạn (Tối đa 1 đ)'}
                questions7={'5.7 Được biểu dương, khen thưởng về thực hiên NQQC từ cấp khoa trở lên (Tối đa 1 đ)'}
                widthInput={200}
            />
            <View style={{alignItems:'center',paddingTop:30,paddingBottom:150}}>
              <Button
                widthBtn={300}
                title={("Gửi đánh giá")}
                onPress={() => showModal()}
              />
            </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalSubmit}
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
                                  }}>Đánh giá thành công !</Text>
                                  <FontAwesome5 name="check-circle" size={55} color="green" />
                              </View>
                              
                          </ImageBackground>

                      </View>
                  </Modal>
                  </ScrollView>
              </ImageBackground>
             </>
  );
};


const styles = StyleSheet.create({
  
});

export default EvaluteUser;


