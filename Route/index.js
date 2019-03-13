import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import SplashScreen from "../Component/SplashScreen";
import LoginScreen from "../Component/Login";
import HomeScreen from "../Component/Home";
import SwipeBarScreen from "../Component/SwipeBar";
import BusesScreen from "../Component/Buses";
import ProfileScreen from "../Component/Profile";
import EditProfileScreen from "../Component/Profile/editProfile.js"

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    contentComponent: SwipeBarScreen,
    drawerWidth: 235
  }
);

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: { screen: LoginScreen },
    Home: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null
      }
    },
    Buses: { screen: BusesScreen },
    Profile: { screen: ProfileScreen },
    EditProfile: { screen: EditProfileScreen }
  },
  
  {
    initialRouteName: "SplashScreen",
    mode: "modal",
    header: null
  }
);

export default createAppContainer(AppNavigator);
