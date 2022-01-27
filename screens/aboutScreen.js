import React from 'react';
import {StyleSheet,View,Image} from 'react-native';

export default function AboutScreen()
{
  return(
  <View>
  <Image source={require('../assets/swis-logo.png')} style={styles.img} />   
  </View>
);
}

const styles = StyleSheet.create({
    pageContainer:{
      flex:1,
      flexDirection:'column',
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
    },
    img:{
      alignSelf:'center',
      height:300,
      width:300,
    }

});