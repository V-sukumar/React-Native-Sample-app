import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
      <Text style={{color:'white'}}>Login Screen</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
