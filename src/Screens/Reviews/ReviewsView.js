import React,{useState} from "react";
import { View, Text,StyleSheet,Modal } from "react-native";
import Button from "../../components/Button";
import DatePicker from "react-native-datepicker";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/Header/Header";
import PickerDate from "../../components/Picker/PickerDate";
import PickerModal from "../../components/Picker/PickerModal";
import ItemReviewForm from "./ItemReviewForm";
import ListReviewForm from "./ListReviewForm";
import AntDesign  from "react-native-vector-icons/AntDesign";

const ReviewsView = (props) => {
  const [modalSubmit, setModalSubmit] = useState(false);
  const showModal = () => {
    setModalSubmit(true);
    setTimeout(() => {
      setModalSubmit(false);
    }, 3000);
  };
  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       <Header title={"ĐÁNH GIÁ HOẠT ĐỘNG GIẢNG DẠY"} isBack ={true}/>
       <ScrollView>
        <View style={{margin:10}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>Nhằm mục tiêu đảm bảo chất lượng đào tạo, đề nghị Anh/Chị cho ý kiến về hoạt động giảng dạy môn học bằng cách tích chọn vào ô số phù hợp câu trả lời của mình. Nhà trường xin chân thành cảm ơn tinh thần trách nhiệm và đóng góp của Anh/Chị.</Text>
          <View style={{alignSelf:'center',margin:10}}>
            <Text style={styles.textSelection}>(1) : Không đồng ý</Text>
            <Text style={styles.textSelection}>(2) : Phân vân</Text>
            <Text style={styles.textSelection}>(3) : Đồng ý</Text>
            <Text style={styles.textSelection}>(4) : Hoàn toàn đồng ý</Text>
          </View>
        </View>

        <View style={{margin:15,borderWidth:2,borderColor:'#2c3092',borderRadius:5}}>
            <View style={{flexDirection:'row',alignItems:'center',paddingTop:10}}>
              <Text style={{paddingRight:15,paddingLeft:30,fontSize:17}}>Môn học:</Text>
              <PickerModal/>
            </View>
            <View>
              <ListReviewForm title='1.KIẾN THỨC CHUYÊN MÔN'/>
                <ItemReviewForm txt='1.1 GV làm chủ được kiến thức thuộc lĩnh vực giảng dạy chuyên môn của mình'/>
                <ItemReviewForm txt='1.2 GV có kiến thức bao quát nhiều môn học, có hiểu biết tổng thể về chương trình đào tạo'/>
                <ItemReviewForm txt='1.3 GV có kiến thức nền tảng rộng, có hiểu biết phong phú về thực tiễn nghề nghiệp và xã hội'/>
                <ItemReviewForm txt='1.4 GV có hiểu biết về trình độ, đặc điểm của SV để tổ chức các hoạt động giảng dạy phù hợp'/>
            </View>
            <View>
              <ListReviewForm title='2.HOẠT ĐỘNG GIẢNG DẠY'/>
                <ItemReviewForm txt='2.1 GV thông báo mục tiêu, lịch trình và yêu cầu của môn học một cách cụ thể, rõ ràng'/>
                <ItemReviewForm txt='2.2 GV giới thiệu và hướng dẫn SV tiếp cận với nguồn tài liệu hữu ích và cập nhật'/>
                <ItemReviewForm txt='2.3 GV xây dựng hệ thống kiến thức bài giảng khoa học, dễ hiểu'/>
            </View>
            <View>
              <ListReviewForm title='3.HOẠT ĐỘNG HƯỚNG DẪN VÀ TỔ CHỨC CHO SV TỰ HỌC, TỰ NGHIÊN CỨU'/>
                <ItemReviewForm txt='3.1 GV quan tâm hướng dẫn SV phương pháp tự học, tự nghiên cứu'/>
                <ItemReviewForm txt='3.2 GV giao các nhiệm vụ tự học cụ thể, hợp lý, khuyến khích được SV tham gia'/>
                <ItemReviewForm txt='3.4 GV hỗ trợ, giám sát, phản hồi và giải đáp thỏa đáng các vấn đề SV đặt ra trong và sau khi tự học, tự nghiên cứu'/>
            </View>
            <View>
              <ListReviewForm title='4.HOẠT ĐỘNG KIỂM TRA - ĐÁNH GIÁ'/>
                <ItemReviewForm txt='4.1 Tiêu chuẩn, cách thức KT - ĐG được GV công bố rõ ràng ngay từ đầu học phần'/>
                <ItemReviewForm txt='4.2 Phương pháp KT - ĐG của GV phù hợp và khuyến khích tích cực học tập của SV'/>
                <ItemReviewForm txt='4.3 GV có biện pháp khuyến khích SV tự đánh giá và đánh giá chéo lẫn nhau'/>
            </View>
            <View>
              <ListReviewForm title='5.TINH THẦN, THÁI ĐỘ, TÁC PHONG CỦA GIẢNG VIÊN'/>
                <ItemReviewForm txt='5.1 GV đảm bảo đúng thời gian lên lớp, lịch trình giảng dạy theo quy định, trình bày đầy đủ, nội dung môn học theo chương trình (không lược bỏ cắt xén)'/>
                <ItemReviewForm txt='5.2 GV luôn có trách nhiệm, tận tâm với công việc'/>
                <ItemReviewForm txt='5.3	GV có thái độ tôn trọng và ứng xử đúng mực với SV'/>
            </View>          
        </View>
        <Button
          backgroundColor={"#2c3092"}
          title={("Gửi đánh giá")}
          onPress={() => showModal()}
        />
          <View style={styles.centeredView}>
                <Modal
                  animationType="fade"
                  transparent={true}
                  backdrop={true}
                  visible={modalSubmit}
                  onRequestClose={() => {
                    console.log('Modal has been closed.');
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Đánh giá thành công !</Text>
                      <AntDesign name="checkcircle" size={50} color="green" />
                      
                    </View>
                  </View>
                </Modal>
            </View>
       </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  textSelection:{
    fontSize:16,
    color:'#000',
    fontWeight:'bold'
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
  }
});

export default ReviewsView;
