import React,{ useState,useEffect } from "react";
import { View, Text,StyleSheet,SafeAreaView,ActivityIndicator, FlatList } from "react-native";
import Header from "../../components/Header/Header";
import PickerAvatart from "../../components/Picker/PickerAvatart";
import R from "../../assets/R";
import Article from "./renderItemNews";
import { getNews } from "./ApiNews";


const NewsView = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const renderArticle = ({ item }) => <Article item={item} />;
  const keyExtractor = (item) => item.url;
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    const fetchData = async() =>{
      const newArticles = await getNews(page,20);
      setArticles((articles) => {
        return articles.concat(newArticles);
      });
      setLoading(false);
    };
    fetchData();
  },[page]);
  return (
    <View style={{ flex: 1,backgroundColor:'#ace8ff'}}>
       <Header title={"Tin Tức"} isBack ={true}/>
       <SafeAreaView style={styles.container}>
      

        {isLoading ? (
            <View style={styles.center}>
              <ActivityIndicator size="large" color="#2c3092" />
            </View>
            ) : (
        <FlatList
          data={articles}
          renderItem={renderArticle}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          onEndReached={() => setPage((page) => page + 1)}
        />)}
    </SafeAreaView>  
    </View>
  );
};

export default NewsView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ace8ff',
    
  },
  center: {
    paddingTop:50,
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
  }
});

