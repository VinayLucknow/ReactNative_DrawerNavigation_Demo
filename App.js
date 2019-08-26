import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen'



const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    //hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    }
  }
);

const StackNavigatorContainer = createStackNavigator(
  {
  defaultHome: DrawerNavigator
  },
  {
    defaultNavigationOptions: ({navigation}) =>{
      return{

        title:'Navigation',
        headerLeft: <Ionicons style = {{marginLeft:10}}name="md-menu" size={32} color="white" onPress = {() => navigation.toggleDrawer()}/>,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
     
    }
  }

)

const AppContainer =  createAppContainer(StackNavigatorContainer);

export default class App extends React.Component{

  render(){
    return <AppContainer/>
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
