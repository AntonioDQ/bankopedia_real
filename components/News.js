import React, {useState} from 'react';
import { View, StyleSheet, Keyboard, SafeAreaView, TouchableWithoutFeedback,Linking, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useLinkProps } from '@react-navigation/native';

const HideKeyboard = ({ children }) => (
  <React.Fragment>
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
  </React.Fragment>
);


export default function News({ navigation }) {
    

  return (
    <React.Fragment>
    <HideKeyboard>
    <SafeAreaView style={styles.container}>
        <View style={styles.homeContainer} >
          <TouchableOpacity onPress={() => navigation.navigate("Homepage_page")}>
        
            <Image source = {require('../assets/arrow.png')} style = {{width: 25,height: 30}}/>
          </TouchableOpacity>
          <Text style={styles.homeText} onPress={() => navigation.navigate("Homepage_page")}>{'Home'}</Text>
        </View>
        <View style={styles.accContainer}>
           <TouchableOpacity onPress={() => navigation.navigate("Account_page")}>
            <Image  
                source={{
                  width:50,
                  height:50,
                  uri: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png",
                }} 
              />
           </TouchableOpacity>
        </View> 

          <Text style={styles.titleText}>{'NEWS'}</Text>
      

      <View style={{ Height: "auto", maxHeight: 710}}>

        <ScrollView style={styles.scrollView}  >
      
          <Text style ={styles.date}>{'October 23'}</Text>
          <View style = {styles.lineStyle} />
          <View style = {styles.titleWrap}>
            <Text style ={styles.titleBar}>{'Trending'}</Text>

              <Image source = {require('../assets/fire.png')} style = {{width: 35,height: 35,marginTop:10}}/>
          </View>
          <View style ={styles.mainNews} >
            <Image style ={styles.newsImage} 
                source={{
                  width:350,
                  height:226,
                  uri: "https://nypost.com/wp-content/uploads/sites/2/2022/10/house-sold-44.jpg?quality=75&strip=all",
                }} 
              />

          
            <Text style ={styles.mainNewsText} onPress={() => Linking.openURL('https://www.cbsnews.com/news/home-prices-for-2023-mortgage-rates/')}>{'U.S. home prices could fall as much as 20% next year.'}</Text>
          
          </View>

           
           <View style ={styles.mediumNews}>
          
            <View style ={styles.mediumNewsEl1}>
            <Image style ={styles.newsImage}
                source={{
                  width:150,
                  height:226,
                  uri: "https://nypost.com/wp-content/uploads/sites/2/2022/10/inflation-a-month.jpg?quality=75&strip=all",
                }} 
              />
            <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://financialgroup.com/2022/10/20/the-typical-u-s-household-is-spending-445-more-a-month-due-to-inflation-heres-how-to-reduce-the-bite/")}>{"The typical U.S. household is spending $445 more a month due to inflation. Here's how to reduce the bite"}</Text>
            </View>

            <View style ={styles.mediumNewsEl2}>
            <Image style ={styles.newsImage}
                source={{
                  width:150,
                  height:226,
                  uri: "https://i.guim.co.uk/img/media/d4c21a30610e079c292bc5c6968f520912a9c140/0_167_4928_2957/master/4928.jpg?width=620&quality=45&dpr=2&s=none",
                }} 
              />
            <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://www.theguardian.com/business/2022/oct/18/biden-oil-emergency-strategic-petroleum-reserve")}>{'Biden set to release oil from emergency reserve in bid to lower US fuel prices'}</Text>
            </View>

          </View>

                
          <View style ={styles.mediumNews}>
          
            <View style ={styles.mediumNewsEl1}>
            <Image style ={styles.newsImage}
                source={{
                  width:150,
                  height:226,
                  uri: "https://media.cnn.com/api/v1/images/stellar/prod/221020151842-graduation-college-stock.jpg?c=16x9&q=h_720,w_1280,c_fill",
                }} 
              />
            <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://www.cnn.com/2022/10/21/politics/biden-student-loan-forgiveness-ffel-borrowers/index.html")}>{"Student loan forgiveness was ‘dangled in front of us:’ How 700,000 borrowers were cut out of Biden’s plan."}</Text>
            </View>

            <View style ={styles.mediumNewsEl2}>
          <Image style ={styles.newsImage}
              source={{
                width:150,
                height:226,
                uri: "https://di-uploads-pod16.dealerinspire.com/toyotaofnorthcharlotte/uploads/2020/02/Toyota-of-Clermont-gas-pump-tips.jpg",
              }} 
            />
          <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://abc7.com/gas-prices-how-to-save-money-inflation-gasbuddy/12352146/")}>{'Gas prices are dropping: Here are even more ways to save at the pump'}</Text>
          </View>

          </View>


          <View style ={styles.mediumNews}>
          
          <View style ={styles.mediumNewsEl1}>
          <Image style ={styles.newsImage}
              source={{
                width:150,
                height:226,
                uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PH6C7KWPXDZVYPRREATMRR6PJ4.jpg&w=1200",
              }} 
            />
          <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://www.washingtonpost.com/business/2022/10/22/gdp-growth-economy-inflation/")}>{"U.S. economy likely grew a lot last quarter. Most people didn’t notice."}</Text>
          </View>

          <View style ={styles.mediumNewsEl2}>
            <Image style ={styles.newsImage}
                source={{
                  width:150,
                  height:226,
                  uri: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imJe1Svlgpt8/v1/1400x-1.jpg",
                }} 
              />
            <Text style ={styles.mediumNewsText} onPress={() => Linking.openURL("https://www.bloomberg.com/opinion/articles/2022-10-19/us-inflation-has-not-peaked-according-to-the-official-measures")}>{'US Inflation Has Not Peaked According to the Official Measures'}</Text>
            </View>

        </View>

        <Text style ={styles.more}>{'LEARN MORE...'}</Text>

        </ScrollView>
      </View>

        
     
        <View style = {styles.button3}>
            <View style = {styles.button_style}>
                <Button  title={"Discover"} color="#2D2D2D" onPress={() => navigation.navigate("Discover_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button  title={"News"} color="#2D2D2D" onPress={() => navigation.navigate("News_page")}/>
            </View>
            <View style = {styles.button_style}>
                <Button  title={"Calendar"} color="#2D2D2D" onPress={() => navigation.navigate("Calendar_page")}/>
            </View>
        </View>
      </SafeAreaView>
      
    </HideKeyboard>
    </React.Fragment>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      margin:0,
      
    },

    accContainer:{
      position:"absolute",
      top:55,
      right:17
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

    scrollView: {
      width:"100%",
      
    },

    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color:"lightgrey",
    },

    mainNewsText: {
      fontSize: 25,
      fontWeight: "bold",
      marginHorizontal:40,
      color:"lightgrey",
      marginTop:5,
    },

    date:{
      fontSize: 25,
      fontWeight: "bold",
      color:"lightgrey",
      position:"relative",
      left:0,
      margin:10,
      marginLeft:30,
    },

    lineStyle:{
      borderWidth: 0.7,
      borderColor:'lightgrey',
      marginVertical:0,
      marginHorizontal:10,
    },

    titleBar:{
      fontSize: 30,
      fontWeight: "bold",
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin:10,
      color:"lightgrey",
    },

    titleWrap:{
      flexDirection:'row',
      marginLeft:20,
    },

    fire:{
      marginTop:5,
    },

    newsImage:{
      borderRadius:20,
      marginTop:3,
    },

    mainNews:{
      alignItems:'center',
      marginBottom: 15
    },

    mediumNews:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginBottom:15,
    },

    mediumNewsEl1:{
      width:"40%",
      marginLeft:28,
      marginRight:25
    },

    mediumNewsEl2:{
      width:"40%",
      marginLeft:5,
    },

    mediumNewsText:{
      width:"80%",
      fontSize:15,
      fontWeight:'bold',
      marginLeft:7,
      color:"lightgrey",
      marginTop:5,
    },

    more:{
        fontSize: 18,
        color:"#0B8CE9",
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:250,
        marginTop:5,
    },

  

    button3: {
        fontSize: 10,
        flexDirection: "row",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        height: 30,
        width: 200,
       
    
    },

    button_style: {
        margin: 10,
    },

   
    
  });
  
