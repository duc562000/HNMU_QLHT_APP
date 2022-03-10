import React,{useCallback} from "react";
import { View, Text,StyleSheet,ScrollView,ImageBackground,TouchableOpacity,FlatList } from "react-native";
import Header from "../../components/Header/Header";
import NumberFormat from 'react-number-format';
import R from "../../assets/R";
import Feather  from "react-native-vector-icons/Feather";
import ArticleTuition from "./ArticleTuition";



const TableTuition = (props) => {
  const {data}=props
  const renderArticle = ({ item }) => <ArticleTuition item={item} />;
  return (
    <>
    <ImageBackground source={R.images.bgBody} style={{width:'100%',height:'100%'}}>
      <FlatList
              data={data}
              renderItem={renderArticle}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
      />
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
    text:{
      fontSize:20,
      color:R.colors.colorBtnLogin,
      fontWeight:'500',
      textAlign:'center'
    },
    textSmalll:{
      fontSize:17,
      color:R.colors.black,
      fontWeight:'400',
      textAlign:'center'
    },
    textTouch:{
      fontSize:17,
      color:R.colors.white,
      fontWeight:'500',
      textAlign:'center',
      padding:15
    }
  });

export default TableTuition;
