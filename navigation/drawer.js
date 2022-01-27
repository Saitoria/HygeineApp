import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../screens/homepage';
import AboutStack from '../screens/aboutScreen';
import React from 'react';


const Drawer = createDrawerNavigator();
export default function DrawerNav()
{
    return(
            <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen name="Heath & Nutrition" component={HomeStack}/>
            <Drawer.Screen name="About" component={AboutStack}/>
            </Drawer.Navigator>
    );
}
