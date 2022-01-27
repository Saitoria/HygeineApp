import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '../screens/aboutScreen';
import React from 'react';

const About = createNativeStackNavigator();

export default function AboutStack()
{
    return(
        <About.Navigator>
        <About.Screen name="About" component={AboutScreen}/>
        </About.Navigator>
    );
}