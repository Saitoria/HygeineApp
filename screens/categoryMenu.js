import React, { useState } from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity, ImageBackground} from 'react-native';
import MenuItem from '../components/menuItem';
import {foodchooser} from '../global/screenData';

export default function CategoryMenu({route,navigation})
{
  const {screenNum} = route.params;

    const [foods1,setFoods1] = useState([
      {foodtitle:'Beef', key:'1',  itemId:1},
      {foodtitle:'Pork', key:'2',  itemId:2},
      {foodtitle:'Goat', key:'3',  itemId:3},
      {foodtitle:'Sheep', key:'4', itemId:4},
      {foodtitle:'Chicken', key:'5', itemId:5},
      {foodtitle:'Duck', key:'6', itemId:6},
      {foodtitle:'Fish', key:'7', itemId:7},
    ]);

    const [foods2,setFoods2] = useState([
      {foodtitle:'Fruits', key:'8', itemId:8},
      {foodtitle:'Vegetables', key:'9', itemId:9},
      {foodtitle:'Seeds', key:'10', itemId:10},
      {foodtitle:'Spices', key:'11', itemId:11},
      ]);

    const [foods3,setFoods3] = useState([
      {foodtitle:'Ginger', key:'12', itemId:12},
      {foodtitle:'Oranges', key:'13' , itemId:13},
      {foodtitle:'Lemons', key:'14', itemId:14},
      {foodtitle:'Almonds', key:'15', itemId:15},
      ]);

    const [foods4,setFoods4] = useState([
      {foodtitle:'Acidic foods', key:'16', itemId:16},
      {foodtitle:'Better Sex Drive', key:'17', itemId:17},
      {foodtitle:'High Fiber Foods', key:'18', itemId:18},
      {foodtitle:'Anti Aging Foods', key:'19', itemId:19},
      ]);

      const [foods5,setFoods5] = useState([
        {foodtitle:'Sukuma wiki', key:'20', itemId:20},
        {foodtitle:'Wild Meat', key:'21', itemId:21},
        {foodtitle:'Apples', key:'22', itemId:22},
        ]);


      const selector = {
        menuChooser:{
            '1':foods1,
            '2':foods2,
            '3':foods3,
            '4':foods4,
            '5':foods5,
        },
    }

  return(
    <ImageBackground source={require('../assets/menuItems/Wallpaper.jpg')} style={styles.imgbg}>
    <View style={styles.container}>
    <FlatList
      data={selector.menuChooser[screenNum]}
      style={styles.listContainer}
      renderItem = {({item}) => (
          <TouchableOpacity onPress={() => (navigation.navigate('CategoryContents',
          {foodName:item.foodtitle,
            bgId:item.itemId,
            pageHeader:foodchooser.pageTitle[item.itemId],
          }
          ))
          }>
          <MenuItem foodItem={item} picId={item.itemId}/>
          </TouchableOpacity>
      )}

      keyExtractor={item => item.key}
      
    />

  </View>    
  </ImageBackground>
);
}


const styles = StyleSheet.create({
  imgbg:{
    width:'100%',
    height:'100%',
    flex:1,
  },
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'#fff',
  },
  listContainer:{
    flex:1,
    width:'97%',
    height:'100%',
    alignSelf:'center',
  }
});
