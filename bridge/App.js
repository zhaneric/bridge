import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createSwitchNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Onboard from './screens/Onboard'
import Welcome from './screens/Welcome'
import CheckIn from './screens/CheckIn'
import WhyUnwell from './screens/WhyUnwell';
import FeelingGreat from './screens/FeelingGreat';
import Symptoms from './screens/Symptoms';
import ContactsNotified from './screens/ContactsNotified';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={Onboard} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="CheckIn" component={CheckIn} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="FeelingGreat" component={FeelingGreat} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="WhyUnwell" component={WhyUnwell} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="Symptoms" component={Symptoms} options={{title: 'Bridge', headerShown: false}}/>
        <Stack.Screen name="ContactsNotified" component={ContactsNotified} options={{title: 'Bridge', headerShown: false}}/>
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
