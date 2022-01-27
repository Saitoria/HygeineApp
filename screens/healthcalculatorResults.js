import React from 'react';
import {StyleSheet,View,Text, ScrollView,Image} from 'react-native';

export default function HCR({route,navigation})
{
  const {age} = route.params;
  const {sex} = route.params;
  const {height} = route.params;
  const {weight} = route.params;
  const {ansId} = route.params;

  const stuff = {
    true:1,
    false:2,
  }

  const ans = {
    '1':{
      '1':Math.round((weight/((height/100)*(height/100)))*10)/10,
      '2':Math.round((weight/((height/100)*(height/100)))*10)/10,
    },
    '2':{
      '1':Math.round(88.362+(13.397*weight) +(4.799*height) -(5.677*age)),
      '2':Math.round(447.593+(9.247 *weight) +(3.098*height) -(4.330 *age)),
    },
    '3':{
      '1':Math.round(((1.20*(weight/((height/100)*(height/100))))+(0.23*age)-16.2)*10)/10,
      '2':Math.round(((1.20*(weight/((height/100)*(height/100))))+(0.23*age)-5.4)*10)/10,
    } 
  }
  const ansRef = {
    ansTitle:{
    '1':'BMI',
    '2':'BMR',
    '3':'Body Fat',
    },
    ansUnit:{
      '1':'',
      '2':'Calories/day',
      '3':'%',
    },
    ansImage:{
      '1':require('../assets/healthresults/BMI.png'),
      '2':require('../assets/healthresults/Calories.png'),
      '3':require('../assets/healthresults/Fat.png'),
    }
  }

  return(
    <ScrollView style={styles.pageContainer}>

    <View style={styles.headerContainer}>
    <Text style={styles.headerText}>
    {ansRef.ansTitle[ansId]}
    </Text>
    </View> 

    <View style={styles.answerContainer}>
      <Text style={styles.answerText}>
        {ans[ansId][stuff[sex]]} {ansRef.ansUnit[ansId]}
      </Text>
    </View>

    <Image source={ansRef.ansImage[ansId]} style={styles.ansImg} />

  </ScrollView>  
);
}

const styles = StyleSheet.create({
  pageContainer:{
    flex:1,
    flexDirection:'column',
    //justifyContent:'center',
    //alignItems:'center',
    
  },
  headerContainer:{
    alignSelf:'center',
    padding:10,
    margin:10,

  },
  headerText:{
    fontSize:27,
    fontWeight:'bold',
    textAlign:'center',
  },
  answerContainer:{
    height:160,
    width:160,
    backgroundColor:'#009dc4',
    borderRadius:85,
    alignItems:'center',
    padding:10,
    justifyContent:'center',
    alignSelf:'center',
  },
  answerText:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'white',
  },
  ansImg:{
    width:'97%',
    height:350,
    alignSelf:'center',
    alignItems:'center',
    marginTop:10,
  }
});