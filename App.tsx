import React from 'react';
import {
  NativeModules,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Welcome from './src/Screens/Welcome/Welcome';
import Login from './src/Screens/LoginScreen/Login';
import Signup from './src/Screens/SignupScreen/Signup';
// Define UIManager const
const { UIManager } = NativeModules;

// Enable Animation Experimental
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const App = createStackNavigator({
  HomeScreen: {
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome',
      headerStyle: { backgroundColor: '#fff' },
      headerTintColor: '#ffffff',
    },
  },
  Login: {screen: Login},
  Signup: {screen: Signup},

});

const WelcomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Welcome: { screen: Welcome },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    navigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);

export default createAppContainer(App);