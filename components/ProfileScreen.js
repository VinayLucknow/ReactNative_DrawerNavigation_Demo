import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


export default class AboutScreen extends React.Component {

    //Note: Appbar has been place at one place for both screen, which is
    //Alternate of this code. This code is also right.
  
    // static navigationOptions = {
    //   title: 'About',
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // };
  
    static navigationOptions = {
      drawerLabel: 'Profile',
      drawerIcon: () =>(

        //<Ionicons name='md-notifications' size={32} color="black" />
        <Image
         source = {require('../icons/profile.png')}
         style = {{width:32, height: 32}}
        />
      )
    };
  
    render() {
  
      return (
        <View style={styles.container}>
          <Text>{this.props.navigation.getParam('text', 'text')}</Text>
          <Text>Profile Screen</Text>
  
          <Button
            title='Go To Home'
  
            // both navigate() & push are working
            //onPress={() => this.props.navigation.navigate('About')}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });