import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

import Cafe1 from './components/Cafe1';
import Cafe2 from './components/Cafe2';
import Cafe3 from './components/Cafe3';
import Cafe4 from './components/Cafe4';


import createNativeStackNavigator from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
const stack = createNativeStackNavigator

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Cafe4'> 
        <Stack.Screen name='Screen1' component={Screen1}  />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='Screen3' component={Screen3} />        
        <Stack.Screen name='Cafe1' component={Cafe1} />
        <Stack.Screen name='Cafe2' component={Cafe2} />
        <Stack.Screen name='Cafe3' component={Cafe3} />
        <Stack.Screen name='Cafe4' component={Cafe4} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
