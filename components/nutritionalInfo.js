import React from 'react';
import {StyleSheet,View,Text,ImageBackground} from 'react-native';

export default function NVStats({name,val,unit})
{
    return(
        <ImageBackground source={require('../assets/components/holder.png')} imageStyle={{borderRadius:10}} style={styles.imgBg}>

            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>
                    {val} {unit}
                </Text>
            </View>

            <View style={styles.unitContainer}>
                <Text style={styles.unitText}>
                    {name}
                </Text>
            </View>

            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBg:{
        alignSelf:'center',
        height:80,
        width:90,
        elevation:2,
        margin:15,
        padding:10,
        alignContent:'center',
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowOffset:{width:1,height:1},
    },
    valueContainer:{
        height:40,
        width:'100%',
    },
    valueText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    unitContainer:{
        height:40,
        width:'100%',
    },
    unitText:{
        fontSize:15,
        textAlign:'center',
    }
});