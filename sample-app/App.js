import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  const onclick=()=>{
    alert("Hello! how are you?")
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.SubContainer} >
        <Text style={styles.Hello} onPress={onclick}>Click me!</Text>
      </View>
    </View>
    // <WebView style={styles.container} source={{uri:"http://infogreen.in"}}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubContainer:{
    borderStyle:'dashed',
    margin:'auto',
    marginTop:50,
    justifyContent:'center',
    textAlign:'center',
  },
  Hello:{
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:5,
    paddingRight:5,
    width:'auto',
    margin:'auto',
    color:"white",
    justifyContent:'center',
    textAlign:'center',
    backgroundColor:'red'
  }
});
