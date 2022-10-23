
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';


export default function Account({ navigation }) {
    

  return (
      
      <View style={styles.container}>
        
        
        
    
          <View style={styles.header}></View>
          <View style={styles.homeContainer} >
          <TouchableOpacity onPress={() => navigation.navigate("Homepage_page")}>
        
            <Image source = {require('../assets/arrow.png')} style = {{width: 25,height: 30}}/>
          </TouchableOpacity>
          <Text style={styles.homeText} onPress={() => navigation.navigate("Homepage_page")}>{'Home'}</Text>
        </View>
          <Image style={styles.avatar} source={{uri: 'https://geeks.eku.edu/sites/geeks.eku.edu/files/images/lingjie_cai.jpg'}}/>
          
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style ={styles.buttonTxt}>Bookmarked Articles</Text> 
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style ={styles.buttonTxt}>Change Password</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style ={styles.buttonTxt}>Settings</Text>  
              </TouchableOpacity>    
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style ={styles.buttonTxt}>Delete Account</Text>  
              </TouchableOpacity>    
            </View>
            
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: '#1E1E1E',
    height:200,
  },
  backgroud:{
    backgroundColor:"#2D2D2D"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
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
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1E1E1E",
  },
  buttonTxt:{
    color:"lightgrey"
  },
});
