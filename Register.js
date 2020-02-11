import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const Register = () => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity style= {styles.touch}>
         <Text>Sign Up</Text>
       </TouchableOpacity>
      </View>
   )
}
export default Register

const styles = StyleSheet.create ({
  
    touch: {
      alignSelf: 'stretch',
      padding: 10,
      backgroundColor: 'blue',
      marginTop: 30,
      marginLeft: 100,
      marginRight: 100,
      alignItems: 'center'
    }
})