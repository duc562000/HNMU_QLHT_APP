import React,{useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View ,Image,Linking} from 'react-native';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

 
export default function Article({item}) {
  const publishedFromNow = formatDistanceToNow(new Date(item.publishedAt));
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const url = item.url;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }});
 return(
    <View style={{flex:1,marginTop:15}}>
        <TouchableOpacity style={styles.post} onPress={handlePress}>
          <View style={{flexDirection:'row'}}>
            <Image  style={styles.imgNews} source={{uri: item.urlToImage}} ></Image>
            <View style={{flexDirection:'column',flex:1,justifyContent:'space-evenly'}}>
              <Text numberOfLines={3}  style={styles.titleText}>{item.title}</Text>
              <Text style={styles.textTime}>{publishedFromNow}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.borderButtom}/>
      </View>
    );
  }
const styles = StyleSheet.create({
        
        post:{
          flex:1,
          
        },
        imgNews:{
          width:160,
          height:100,
          marginRight:20,
          marginLeft:15,
          borderRadius:5
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
          backgroundColor:'#2c3092',
          marginTop:15,
          marginBottom:8,
        }
      });