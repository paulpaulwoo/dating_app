import React from 'react';
import { StyleSheet, SafeAreaView, Image, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';


import LoginScreen from './pages/LoginScreen';
import AccountCreationScreen from './pages/AccountCreationScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AccountCreationScreen"
      component={AccountCreationScreen} 
      options={{headerShown: false}}/>
    </Stack.Navigator>
    </View>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
    justifyContent: 'center',
  },
});
