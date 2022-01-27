import React, {useState} from 'react';
import {StyleSheet,View,Text,ScrollView,TextInput,Keyboard,CheckBox,Button} from 'react-native';

export default function HealthCalculator({navigation})
{
  const[age,setAge] = useState(0);
  const[height,setHeight] = useState(0);
  const[weight,setWeight] = useState(0);
  const[isMale,setMale] = useState(true);

  return(
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.headerText}>
      Measure your health with our health calculator
      </Text>

      <View style={styles.genderContainer}>

      <View>
        <Text style={{color:'green'}}>
          GENDER
        </Text>
      </View>

      <View style={styles.genderitemContainer}>
        <Text style={{color:'green'}}>
          Male
        </Text>

        {/* <CheckBox
        value={isMale}
        onValueChange={setMale}
        /> */}
      </View>

      <View style={styles.genderitemContainer}>
        <Text style={{color:'green'}}>
          Female
        </Text>

        {/* <CheckBox
        value={!isMale}
        onValueChange={()=>(setMale(false))}
        /> */}
      </View>

      </View>


      <View style={styles.ageContainer}>
        <Text style={{color:'green'}}>AGE</Text>
        <TextInput
          style={styles.ageInput}
          keyboardType={'numeric'}
          onChangeText={(val)=>(setAge(val))}
          
        />
        <View>
        <Text style={{color:'red'}}>Years</Text>
        </View>
      </View>

      <View style={styles.heightContainer}>
        <Text style={{color:'green'}}>HEIGHT</Text>
        <TextInput
          style={styles.heightInput}
          keyboardType={'numeric'}
          onChangeText={(val)=>(setHeight(val))}

        />
        <View>
        <Text style={{color:'red'}}>CM</Text>
        </View>
      </View>

      <View style={styles.weightContainer}>
        <Text style={{color:'green'}}>WEIGHT</Text>
        <TextInput
          style={styles.weightInput}
          keyboardType={'numeric'}
          onChangeText={(val)=>(setWeight(val))}
        />
        <View>
        <Text style={{color:'red'}}>KG</Text>
        </View>
      </View>

      <View style={{margin:10}}>
      <Button
      title='BMI Result'
      onPress={()=>(navigation.navigate('Health Results',
      {
        age:age,
        sex:isMale,
        height:height,
        weight:weight,
        ansId:1,
       }
      ))}
      />
      </View>

      <View style={{margin:10}}>
      <Button
      title='BMR Result'
      color='tomato'
      onPress={()=>(navigation.navigate('Health Results',
      {
        age:age,
        sex:isMale,
        height:height,
        weight:weight,
        ansId:2,
       }
      ))}
      />
      </View>

      <View style={{margin:10}}>
      <Button
      title='Body Fat Result'
      onPress={()=>(navigation.navigate('Health Results',
      {
        age:age,
        sex:isMale,
        height:height,
        weight:weight,
        ansId:3,
       }
      ))}
      />
      </View>
      

  </ScrollView>    
);
}

const styles = StyleSheet.create({
  pageContainer:{
    padding:10,
  },
  headerText:{
    fontSize:16,
    fontWeight:'bold',
  },
  ageContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
  },
  ageInput:{
    width:100,
    height:50,
    margin:20,
    borderBottomWidth:1,
    textAlign:'center',
  },
  heightContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
  },
  heightInput:{
    width:100,
    height:50,
    margin:20,
    borderBottomWidth:1,
    textAlign:'center',
  },
  weightContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
    marginBottom:50,
  },
  weightInput:{
    width:100,
    height:50,
    margin:10,
    borderBottomWidth:1,
    textAlign:'center',
  },
  genderContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
    justifyContent:'center',
    width:'70%',
  },
  genderitemContainer:{
    flex:1,
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
});