import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native';

export default function Article({navigation})
{
  return(
  <ScrollView style={styles.pageContainer}>
  <View style={styles.descContainer}>
  <Image source={require('../assets/menuItems/fruits.jpg')} style={styles.imgContainer}/>
  <Text style={styles.descTitle}>
    Advantages of vegetables
  </Text>
    <Text style={styles.descText}>
    Diets high in fruits and vegetables are widely recommended for their health-promoting properties. 
    Fruits and vegetables have historically held a place in dietary guidance because of their concentrations of vitamins,
     especially vitamins C and A; minerals, especially electrolytes; and more recently phytochemicals, 
     especially antioxidants. Additionally, fruits and vegetables are recommended as a source of dietary fiber.
    </Text>
  </View>


  <View style={styles.descContainer}>
  <Image source={require('../assets/nonvegetarian.jpg')} style={styles.imgContainer}/>
  <Text style={styles.descTitle}>
    Meat for protein
  </Text>
    <Text style={styles.descText}>
    Proteins are made up of many building blocks, known as amino acids.
     Our body needs dietary protein to supply amino acids for the growth and maintenance of our cells and tissues. 
     Our dietary protein requirement changes throughout life.
      The European Food Safety Authority (EFSA) recommends adults consume at least 0.83 g of protein per kg body weight per day (e.g. 58 g/day for a 70 kg adult).
       Plant and animal-based proteins vary in their quality and digestibility, but this is not usually a concern for most people if their total protein meets their needs.
        We should aim to consume protein from a variety of sources that benefits both our health and the planets.
    </Text>
  </View>

  <View style={{height:30}}>

  </View>

  </ScrollView>   
);
}

const styles = StyleSheet.create({
    pageContainer:{
      padding:10,
      flex:1,
      flexDirection:'column',
      alignSelf:'center',
      backgroundColor:'#ddd',
    },
    imgContainer:{
      width:'90%',
      height:200,
      borderRadius:10,
      alignSelf:'center',
      marginTop:-30,
    },
    descContainer:{
      width:'98%',
      height:500,
      marginTop:30,
      alignSelf:'center',
      alignItems:'center',
      elevation:2,
      backgroundColor:'white',
      borderRadius:10,
      padding:10,
    },
    descTitle:{
      marginTop:10,
      marginBottom:10,
      fontSize:18,
      fontWeight:'bold',
      color:'orange',
    },
});