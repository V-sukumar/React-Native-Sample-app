// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { WebView } from 'react-native-webview';
const Stack = createNativeStackNavigator();
import { useEffect} from 'react';
function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="login" component={Login} />
    //     <Stack.Screen name="signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
      
      <WebView source={{uri:"https://infogreen.in" }}/>
    
  );
}

export default App;