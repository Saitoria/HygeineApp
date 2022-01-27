import React,{useState} from 'react';
import {StyleSheet,View,FlatList,ImageBackground} from 'react-native';

export default function Tips()
{
  const[tips,setTips] = useState([
    {title:require('../assets/tips/Tips1.png'),key:'1'},
    {title:require('../assets/tips/Tips2.png'),key:'2'},
    {title:require('../assets/tips/Tips3.png'),key:'3'},
    {title:require('../assets/tips/Tips4.png'),key:'4'},
    {title:require('../assets/tips/Tips5.png'),key:'5'},
    {title:require('../assets/tips/Tips6.png'),key:'6'},
    {title:require('../assets/tips/Tips7.png'),key:'7'},
    {title:require('../assets/tips/Tips8.png'),key:'8'},
    {title:require('../assets/tips/Tips9.png'),key:'9'},
    {title:require('../assets/tips/Tips10.jpg'),key:'10'},
    {title:require('../assets/tips/Tips11.jpg'),key:'11'},
  ]);
  return(
    <View style={styles.pageContainer}>
    <FlatList
        data={tips}
        style={styles.tipsList}
        horizontal
        renderItem={({item}) => (
          <ImageBackground source={item.title} style={styles.imgBg} imageStyle={{borderRadius:10}}/>
        )}
    />
    </View>    
);
}

const styles = StyleSheet.create({
  pageContainer:{
    flex:1,
    flexDirection:'column',
    width:'90%',
    height:'90%',
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  tipsList:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
    alignContent:'center',
  },
  imgBg:{
    margin:5,
    height:350,
    width:350,
    alignSelf:'center',
    justifyContent:'center',
    elevation:2,
  }
});