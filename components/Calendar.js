import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet,TouchableOpacity,Image, TouchableHighlight } from 'react-native';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function Calender({navigation}) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

    
  
   

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#1E1E1E"
      }}>
         <Image source = {require('../assets/logo.png')} style = {styles.img}/>
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
      <Text style={styles.otherText}>Please select the type of reminder: {expoPushToken}</Text>
      <View style = {styles.lineStyle} />



        <TouchableHighlight>

      <Button color="lightgrey" 
        title="Press to schedule a notification to pay your taxes"
        onPress={async () => {
          await schedulePushNotification1();
        }}
      />
        </TouchableHighlight>
      <Button color="lightgrey"
        title="Press to schedule a notification to pay your bills "
        onPress={async () => {
          await schedulePushNotification2();
        }}
      />


      <Button color="lightgrey"
        title="Press to schedule a notification to pay your credit card debt"
        onPress={async () => {
          await schedulePushNotification3();
        }}
      />

      <Button color="lightgrey"
        title="Press to schedule a notification to pay your mortgage "
        onPress={async () => {
          await schedulePushNotification4();
        }}
      />
     
     
  
    </View>
  );
}

async function schedulePushNotification1() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pay your taxes 💸💸💸" ,
      body:"It's time to pay your taxes!",
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function schedulePushNotification2() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pay your bills! 💸💸💸" ,
      body: "It's time to pay your bills!",
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function schedulePushNotification3() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pay your credit card debt! 💸💸💸" ,
      body:"It's time to pay your credit card debt!",
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function schedulePushNotification4() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pay your mortgage! 💸💸💸" ,
      body:"It's time to pay your mortgage!",
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
const styles = StyleSheet.create({
homeContainer:{
  position:'absolute',
  top: 60,
  left:12,
  flexDirection:'row',
},

homeText:{
  fontSize:20,
  marginTop:6,
  marginLeft:3,
  color:"lightgrey",
},

otherText:{
  fontSize:22,
  fontWeight:"bold",
  marginTop:100,
  marginLeft:3,
  color:"lightgrey",
},

accContainer:{
  position:"absolute",
  top:55,
  right:17
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

lineStyle:{
  borderWidth: 2,
  borderColor:'lightgrey',
  marginVertical:-100,
  paddingHorizontal:300,
  marginHorizontal:0,
},

button_style: {
  margin: 10,
},

selection:{
  color:"lightgrey",
},

img:{
    height:80,
    width:220,
    position:'absolute',
    top:40,
    left:95,
  
}
});