import React from "react";
import { Font, AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native"; 
import { StackActions, NavigationActions } from 'react-navigation';
import TimerMixin from 'react-timer-mixin'

import logoImage from "../../Images/logo.png";




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } 

changeView = (value) =>{
    const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: value == "Home" ? "Home" : "Login"
      })
    ]
  });
  this.props.navigation.dispatch(resetAction);
}

componentDidMount(){
    AsyncStorage.getItem("loginID").then(value => {
        if(value){
            this.changeView("Home");
        }
        else {
            setTimeout(() => {
            this.changeView("Login");
          }, 2000);
        }
    })
}

  render() {
    return (
      <View style={styles.container}> 
      <Image source={logoImage} style={styles.logoStyle} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff"
  },
  logoStyle: {
    marginTop: 15,
    width: 130,
    height: 130
  },
});
