import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {foodchooser} from '../global/screenData';

export default function MenuItem({foodItem,picId})
{
    return(
        <View style={styles.listContainer}>
        <View style={styles.menuItemContainer}>
        <Image 
            source={foodchooser.menuItem[picId]}
            style={styles.menuItemImage}
        />

        <View style={styles.menuItemTextContainer}>
            <Text style={styles.menuItemText}>
                {foodItem.foodtitle}
            </Text>
        </View>

        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        marginHorizontal:'20%',
        width:'60%',

    },
    menuItemContainer:{
        flex:1,
        flexDirection:'column',
       // justifyContent:'center',
       // alignContent:'center',
        alignItems:'center',
        padding:10,
        margin:10,
        height:160,
        width:'100%',
        backgroundColor:'#eee',
        borderRadius:10,
        elevation:4,
        shadowOpacity:0.5,
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowRadius:10,
    },
    menuItemTextContainer:{
        marginLeft:20,
    },
    menuItemText:{
        fontSize:20,
    },
    menuItemImage:{
        width:120,
        height:120,
        borderRadius:120/2,
        marginLeft:10,
    }
});