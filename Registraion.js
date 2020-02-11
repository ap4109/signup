import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Registration =()=> {
const [password, SetPassword] = useState(''); 
// const [Password, ConfirmPassword] = useState('') ;
    return(
        <View style = {styles.display}>

        <Text style ={{fontSize: 40, alignSelf: 'center', marginTop: 30}}> Create your account </Text>
       <TextInput style ={styles.conatiner1} placeholder = 'Name'/>
       <TextInput style ={styles.conatiner2} placeholder = 'Email'/>
       <TextInput style ={styles.conatiner3} placeholder = 'Mobile No.'/>
       <TextInput style ={styles.conatiner4} placeholder = 'dd/mm/yyyy'/> 
       {/* <Text style ={styles.conatiner5}> Gender </Text> */}
       <TextInput style ={styles.conatiner6} placeholder = 'Profile Picture'/> 
       <TextInput style ={styles.conatiner7} value={password}
       secureTextEntry={true}
        onChangeText ={newValue => SetPassword(newValue)} placeholder = 'Password'/>
       {/* <TextInput style ={styles.conatiner8} value={Password}
       secureTextEntry={true}
        onChangeText ={newValue => ConfirmPassword(newValue)} placeholder = 'Confirm Password'/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    display :{
   
    },
    
    conatiner1: {
       
       margin: 10,
       height: 50,
       borderBottomWidth: 1,
       
        
    },
    conatiner2: {
       
       margin: 10,
       borderBottomWidth: 1,
       height: 50,
    },
    conatiner3: {
    borderBottomWidth: 1,
      margin: 10,
      
      height: 50,
    },
    conatiner4: {
    borderBottomWidth: 1,
     margin: 10,
     borderRadius: 5,
     height: 50,
    },
    conatiner5: {
        
         marginTop: 50,
         marginLeft: 10,
         borderRadius: 5,
         height: 50,
         fontSize: 20
        },
        conatiner6: {
            borderBottomWidth: 1,
             margin: 10,
             borderRadius: 5,
             height: 50,
            },
    
    
    conatiner7: {
    borderBottomWidth: 1,
    margin: 10,
    borderRadius: 5,
    height: 50,
    
    },
    conatiner8: {
    borderBottomWidth: 1,
    margin: 10,
    
    height: 50,
    },

})
export default Registration