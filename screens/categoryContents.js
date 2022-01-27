import React from 'react';
import {StyleSheet,View,Text,ScrollView,ImageBackground,FlatList} from 'react-native';
import {foodchooser} from '../global/screenData';
import {footItemStats} from '../global/screenData';
import NVStats from '../components/nutritionalInfo.js';
import ProgressBar from '../components/progressBar';
import ProgressBar2 from '../components/progressBar2';

export default function CategoryContents({route,navigation})
{
  const {foodName} = route.params;
  const {bgId} = route.params;
  
  return(
    <ScrollView>
    <ImageBackground source={foodchooser.menuItem[bgId]} style={styles.itemBg} >

    <View style={styles.headertextContainer}>
      <Text style={styles.headerText}>
      {foodName}
      </Text>
    </View> 

  </ImageBackground>

  <View style={styles.statsContainer}>
  <View>
  <Text style={{fontSize:20,padding:5,margin:5,fontWeight:'bold'}}>Nutritional information</Text>
  <Text style={{fontSize:15,marginLeft:10,color:'green'}}>per {footItemStats[bgId].gram} g serving</Text>
  </View>



   <View style={styles.nutritionlistContainer}>
   <FlatList
    style={styles.nutritionlist}
    horizontal
     data={footItemStats[bgId].nutritionalInformation}
     renderItem={({item})=>(
      <NVStats val={item.value} unit={item.unit} name={item.name}/>
     )}
     keyExtractor={item => item.key}
   />
   </View>

  <View style={{marginTop:5}}>
    <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>Vitamin</Text>
  </View>



  <View style={styles.vitaminlistContainer}>
  <FlatList
    style={styles.vitaminlist}
    horizontal
     data={footItemStats[bgId].vitamins}
     renderItem={({item})=>(
      <ProgressBar val={item.value} name={item.name}/>
     )}
     keyExtractor={item => item.key}
   />
   </View>

  <View style={{marginTop:5}}>
    <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>Minerals</Text>
  </View>





  <View style={styles.vitaminlistContainer}>
  <FlatList
    style={styles.vitaminlist}
    horizontal
     data={footItemStats[bgId].minerals}
     renderItem={({item})=>(
      <ProgressBar2 val={item.value} name={item.name}/>
     )}
     keyExtractor={item => item.key}
   />
   </View>



   <View style={{marginTop:50}}>
    <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>Advantages:</Text>
  </View>

  <View style={{padding:10}}>
    <Text style={{textAlign:'center',}}>
      {footItemStats[bgId].pros}
    </Text>
  </View>
  

  <View style={{marginTop:50}}>
    <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>Disadvantages:</Text>
  </View>

  <View style={{padding:10}}>
    <Text style={{textAlign:'center',}}>
    {footItemStats[bgId].cons}
    </Text>
  </View>

  </View>


  </ScrollView>   
);
}

const styles = StyleSheet.create({
  itemBg:{
    width:'100%',
    height:350,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
  },
  headertextContainer:{
    alignItems:'center',
    padding:10,
    margin:10,
  },
  headerText:{
    fontSize:30,
    fontWeight:'bold',
    color:'lightgreen',
  },
  statsContainer:{
    backgroundColor:'#eee',
    marginTop:-15,
    zIndex:1,
    height:1300,
    width:'100%',
    alignSelf:'center',
    borderRadius:20,
    padding:10,
  },
  nutritionlist:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
    
  },
  nutritionlistContainer:{
    height:120,
  },
  vitaminlistContainer:{
    height:150,
  },
  vitaminlist:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
  },
});
