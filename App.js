import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Registraion from './src/screens/Registraion';
import Register from './src/screens/Register';
const App =()=> {
  return(
    <SafeAreaView>
      <Registraion/>
      
      <Register/>
    </SafeAreaView>
  )
} ;
const styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    backgroundColor: 'blue'
 
  }

});
export default App