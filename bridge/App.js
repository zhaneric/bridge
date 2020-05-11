import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createSwitchNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Onboard from './screens/Onboard'
import Welcome from './screens/Welcome'
import CheckIn from './screens/CheckIn'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={Onboard} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="CheckIn" component={CheckIn} options={{title: 'Bridge', headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
