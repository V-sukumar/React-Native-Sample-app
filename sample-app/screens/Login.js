import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
        <StatusBar style='light' />
      <Text style={styles.text}>Login Screen</Text>
      <View>
        <Image style={styles.Img} source={require('../assets/icon.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:50,
    color:'black',
    fontWeight:"800"
  },
  
});
