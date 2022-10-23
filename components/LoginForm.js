import React from 'react';
import { View, StyleSheet, Keyboard, TouchableOpacity,TouchableWithoutFeedback, Text,Image } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useLinkProps } from '@react-navigation/native';

const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);

  
export default function LoginForm({ navigation }) {
  return (
    <React.Fragment>
    <HideKeyboard>
    
    
    <View style={styles.container}>
    
    
      <Image source = {require('../assets/logo.png')} style = {styles.img}/>
        <TextInput label="Email" style={styles.input} color="#002100" />
        <TextInput label="Password" style={styles.input} color="#002100" />
        <Button variant="Submit" title="Login" color="lightgrey" onPress = { () => navigation.navigate('Homepage_page')}/>
        <Text style={{marginTop: "7.5%",color:"lightgrey"}}>Don't have an account?<Text>{' '}</Text>
          <Text style={{color: 'lightgrey', fontWeight: 'bold', fontSize:18}}
                onPress={() => navigation.navigate("Register")}>
          Register
          </Text>
        </Text>
      </View>
    </HideKeyboard>
    </React.Fragment>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    homeContainer:{
      position:'absolute',
      top: 60,
      left:12,
      flexDirection:'row',
    },

    homeText:{
      fontSize:15,
      marginTop:6,
      marginLeft:3,
      color:"lightgrey",
    },

    input: {
      width: "75%",
      marginBottom: "10%",
    },

    img:{
      height:200,
      width:450,
      position:'absolute',
      top:65,
      left:-19,
    }
  });
  
