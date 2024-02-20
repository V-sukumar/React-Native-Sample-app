import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const onclick=()=>{
    alert("Hello! How are you?")
  }
  return (
    <View style={styles.container}>
      <Text>Click on the below Button</Text>
      <StatusBar style="auto" />
      <View style={styles.Subcontainer}>
        <Text style={styles.Child} onPress={onclick}>Click me</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Subcontainer: {
    backgroundColor: '#A5D6A7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    
    
  },
  Child:{
    width:'auto',
    color:'white',
    backgroundColor:'red',
    borderRadius:10,
    padding:10
  }
});
