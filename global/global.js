import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export const chooser = {
    screenChooser:{
        '1':'NonVegetarian',
        '2':'Vegetarian',
        '3':'ImmunityBoost',
        '4':'GlobalBest',
        '5':'BodyHealing',
        '6':'HealthCalculator',
        '7':'Article',
        '8':'Health Tips',
        '9':'Hndiet',
    },
    imageChooser:{
        '1':require('../assets/nonvegetarian.jpg'),
        '2':require('../assets/vegetarian.jpg'),
        '3':require('../assets/immunityboost2.jpg'),
        '4':require('../assets/worldbest.jpg'),
        '5':require('../assets/healingfood.jpg'),
        '6':require('../assets/fitnesscal.jpg'),
        '7':require('../assets/articles.jpg'),
        '8':require('../assets/tips.jpg'),
        '9':require('../assets/healtndiet.jpg'),
    },
    gradientcolorChooser:{
        '1':['#964B00','#00964B00'],
        '2':['#FF0000','#00FF0000'],
        '3':['#CCC156','#00FF0000'],
        '4':['#964B00','#00964B00'],
        '5':['#808080','#00FF0000'],
        '6':['#808080','#00FF0000'],
        '7':['#808080','#00FF0000'],
        '8':['#808080','#00FF0000'],
        '9':['#964B00','#00FF0000'],
    }
}