import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet,TouchableOpacity,Image } from 'react-native';


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
      <Text style={styles.homeText}>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.homeText}>Title: {notification && notification.request.content.title} </Text>
        <Text style={styles.homeText}>Body: {notification && notification.request.content.body}</Text>
        <Text style={styles.homeText}>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Bills are due! 💸💸💸",
      body: 'Make sure to leave time for the post office!',
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
  fontSize:15,
  marginTop:6,
  marginLeft:3,
  color:"lightgrey",
},
accContainer:{
  position:"absolute",
  top:55,
  right:17
},


});