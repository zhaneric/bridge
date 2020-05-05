import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createSwitchNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';


export default class Onboard extends React.Component{

    render(){
        var greeting = 'sup earth';

        return(
            <View>
                <Text>Hello World</Text>
                <Text>{greeting}</Text>
            </View>
        );
    }
}