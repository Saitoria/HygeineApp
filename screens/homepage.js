import React, { useState } from 'react';
import {StyleSheet,View,Text,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import { chooser } from '../global/global';
import LinearGradient from 'react-native-linear-gradient';

export default function HomePage({navigation})
{
    const [screens,setScreens] = useState([
        {title:'Non Vegetarian', key:'1',screenNo:1},
        {title:'Vegetarian', key:'2',screenNo:2},
        {title:'Immunity Boosting Foods', key:'3',screenNo:3},
        {title:'Global Best Foods', key:'4',screenNo:4},
        {title:'Body Healing Foods', key:'5',screenNo:5},
        {title:'Health Calculator', key:'6',screenNo:6},
        {title:'Articles', key:'7',screenNo:7},
        {title:'Health tips and tricks', key:'8',screenNo:8},
        //{title:'Health n diet', key:'9',screenNo:9},
    ]);
    return(
        <View style={styles.container}>
        <FlatList
            data={screens}
            style={styles.list}
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={() => (navigation.navigate(chooser.screenChooser[item.screenNo],
                {screenNum:item.screenNo}
                ))}
                 style={styles.listContainer}>
                <ImageBackground source={chooser.imageChooser[item.screenNo] }style={styles.imgbackground} imageStyle={{borderRadius:15}}>
                <LinearGradient 
                colors={chooser.gradientcolorChooser[item.screenNo]}
                style={styles.BoxBG}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                >
                <View style={styles.textBox}>
                    <Text style={styles.itemText}>
                        {item.title}
                    </Text>
                </View>
                </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
                
            )}
            keyExtractor={item => item.key}
        />

      </View>    
    );
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    list:{
        flex:1,
        //backgroundColor:'green',
        width:'97%',
        height:'100%',
        alignSelf:'center',
    },
    listContainer:{
        flex:1,
        marginVertical:15,
        marginHorizontal:15,
        width:'100%',
        height:200,
        alignSelf:'center',
        //backgroundColor:'red',
    },
    BoxBG:{
        margin:0,
        padding:0,
        height:'100%',
        width:'100%',
        borderRadius:15,
    },
    textBox:{
        flex:1,
    },
    imgbackground:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
    },
    itemText:{
        color:'white',
        padding:10,
        paddingTop:60,
        fontSize:25,
        fontWeight:'bold',
    }
});