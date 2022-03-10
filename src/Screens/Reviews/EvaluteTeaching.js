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
import PickerOpenDetails from '../../components/Picker/PickerOpenDtails'




const EvaluteTeaching = (props) => {
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
       <Header title={"Hoạt động giảng dạy"} isBack ={true}/>
      
        <ImageBackground source={R.images.bgBody} style={{width:'100%',alignItems:'center',height:'100%'}}>
          <ScrollView >
          <View style={{alignSelf:'center',margin:10}}>
              <Text style={styles.textSelection}>(1) : Không đồng ý</Text>
              <Text style={styles.textSelection}>(2) : Phân vân</Text>
              <Text style={styles.textSelection}>(3) : Đồng ý</Text>
              <Text style={styles.textSelection}>(4) : Hoàn toàn đồng ý</Text>
          </View>
            <PickerOpenDetails
              title={'1.KIẾN THỨC CHUYÊN MÔN'}
              questions1={'1.1 GV làm chủ được kiến thức thuộc lĩnh vực giảng dạy chuyên môn của mình'}
              questions2={'1.2 GV có kiến thức bao quát nhiều môn học, có hiểu biết tổng thể về chương trình đào tạo'}
              questions3={'1.3 GV có kiến thức nền tảng rộng, có hiểu biết phong phú về thực tiễn nghề nghiệp và xã hội'}
              questions4={'1.4 GV có kiến thức nền tảng rộng, có hiểu biết phong phú về thực tiễn nghề nghiệp và xã hội'}
            />
            <PickerOpenDetails
              title={'2.HOẠT ĐỘNG GIẢNG DẠY'}
              questions1={'2.1 GV thông báo mục tiêu, lịch trình và yêu cầu của môn học một cách cụ thể, rõ ràng'}
              questions2={'2.2 GV giới thiệu và hướng dẫn SV tiếp cận với nguồn tài liệu hữu ích và cập nhật'}
              questions3={'2.3 GV xây dựng hệ thống kiến thức bài giảng khoa học, dễ hiểu'}
            />
             <PickerOpenDetails
              title={'3.HOẠT ĐỘNG HƯỚNG DẪN VÀ TỔ CHỨC CHO SV TỰ HỌC, TỰ NGHIÊN CỨU'}
              questions1={'3.1 GV quan tâm hướng dẫn SV phương pháp tự học, tự nghiên cứu'}
              questions2={'3.2 GV giao các nhiệm vụ tự học cụ thể, hợp lý, khuyến khích được SV tham gia'}
              questions3={'3.4 GV hỗ trợ, giám sát, phản hồi và giải đáp thỏa đáng các vấn đề SV đặt ra trong và sau khi tự học, tự nghiên cứu'}
            />
             <PickerOpenDetails
              title={'4.HOẠT ĐỘNG KIỂM TRA - ĐÁNH GIÁ'}
              questions1={'4.1 Tiêu chuẩn, cách thức KT - ĐG được GV công bố rõ ràng ngay từ đầu học phần'}
              questions2={'4.2 Phương pháp KT - ĐG của GV phù hợp và khuyến khích tích cực học tập của SV'}
              questions3={'4.3 GV có biện pháp khuyến khích SV tự đánh giá và đánh giá chéo lẫn nhau'}
              questions4={'4.4 Phương pháp KT - ĐG của GV phù hợp và khuyến khích tích cực học tập của SV'}
              questions5={'4.5 Tiêu chuẩn, cách thức KT - ĐG được GV công bố rõ ràng ngay từ đầu học phần'}
            />
             <PickerOpenDetails
              title={'5.TINH THẦN, THÁI ĐỘ, TÁC PHONG CỦA GIẢNG VIÊN'}
              questions1={'5.1 GV đảm bảo đúng thời gian lên lớp, lịch trình giảng dạy theo quy định, trình bày đầy đủ, nội dung môn học theo chương trình (không lược bỏ cắt xén)'}
              questions2={'5.2 GV luôn có trách nhiệm, tận tâm với công việc'}
              questions3={'5.3	GV có thái độ tôn trọng và ứng xử đúng mực với SV'}
            />
            <View style={{alignItems:'center',paddingTop:30,paddingBottom:150}}>
            <Button
              widthBtn={300}
              title={("Gửi đánh giá")}
              onPress={() => showModal()}
            />
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
                </View>
               </ScrollView>
            </ImageBackground>
             </>
  );
};


const styles = StyleSheet.create({
  textSelection:{
    fontSize:16,
    color:'#000',
    fontWeight:'500'
  },
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalView: {
    
    padding:20,
    backgroundColor: "white",
    borderRadius: 20,
    width:300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color:'green',
    marginBottom: 1,
    textAlign: "center",
    fontSize:22,
    fontWeight:'bold',
    marginBottom:20,
  },
  txt: { 
    fontSize:14,
    fontWeight:'600',
    color:R.colors.black,
    paddingBottom:10
    },
pickerStyle: {
    backgroundColor: 'white',
    marginTop: 5,
    fontSize: getFontXD(42),
    paddingHorizontal: 15,
    
    },
pickerStyles:{
  
}
});

export default EvaluteTeaching;


