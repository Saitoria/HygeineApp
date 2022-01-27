import React,{useState} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function ProgressBar({val,name})
{
    const[value,setValue] = useState(0);
    return(
        <View style={{alignContent:'center',margin:10,height:120,width:105,flex:1,}}>

            <View style={{height:100,width:100,alignItems:'center'}}>
            <CircularProgress
                radius={45}
                value={val}
                textColor='#222'
                fontSize={17}
                valueSuffix={'%'}
                inActiveStrokeColor={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                inActiveStrokeWidth={2}
                activeStrokeWidth={4}
                duration={3000}
            />
            </View>

            <View style={{width:'100%',margin:0}}>
            <Text style={{textAlign:'center',fontSize:14,fontWeight:'bold',}}>
                {name}
            </Text>
            </View>

        </View>
    );
}