import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HealthCalculator from '../screens/healthcalculator';
import Tips from '../screens/tips';
import Hndiet from '../screens/hndiet';
import HomePage from '../screens/homepage';
import Article from '../screens/articles';
import CategoryMenu from '../screens/categoryMenu';
import CategoryContents from '../screens/categoryContents';
import DrawerNav from './drawer';
import HCR from '../screens/healthcalculatorResults';



const Stack = createNativeStackNavigator();

export default function HomeStack()
{
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={DrawerNav} options={{headerShown:false}}/>
        <Stack.Screen name="NonVegetarian" component={CategoryMenu}/>
        <Stack.Screen name="Vegetarian" component={CategoryMenu}/>
        <Stack.Screen name="ImmunityBoost" component={CategoryMenu}/>
        <Stack.Screen name="GlobalBest" component={CategoryMenu}/>
        <Stack.Screen name="BodyHealing" component={CategoryMenu}/>
        <Stack.Screen name="HealthCalculator" component={HealthCalculator}/>
        <Stack.Screen name="Article" component={Article}/>
        <Stack.Screen name="Health Tips" component={Tips}/>
        <Stack.Screen name="Hndiet" component={Hndiet}/>
        <Stack.Screen name="CategoryContents" component={CategoryContents} options={({route})=>({title:route.params.pageHeader})}/>
        <Stack.Screen name="Health Results" component={HCR}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}
