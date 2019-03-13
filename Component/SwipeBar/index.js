import React from "react";
import { connect } from 'react-redux'
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
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import UserImage from "../../Images/user.jpg";


const { width: WIDTH } = Dimensions.get("window");

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        <Image source={UserImage} style={{height: 80, width: 80, borderRadius: 40 }} />
        <Text style={{ color: '#ffff', left:5, fontSize:18 }}>{this.props.userInfo.employee_name}</Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.4)', left:110, top:96, fontSize:18, position: 'absolute' }}>DASHBOARD</Text>
        </View>
         
    
    
        <View style={styles.center}>
        <ScrollView>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Home</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="home" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Profile')}>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Profile</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="user" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Salon</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="dingding" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Movie</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="videocamera" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = { () =>  this.props.navigation.navigate('Buses')}>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Bus</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="enviromento" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Home</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="home" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Event</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="book" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Salon</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="dingding" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Movie</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="videocamera" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = { () =>  this.props.navigation.navigate('Buses')}>
        <View style={styles.centerItem} >
        <Text style={{ color: '#cccccc', left:50, fontSize:18 }}>Bus</Text>
        <Icon style={{position: "absolute", marginLeft: 10}} name="enviromento" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
        </TouchableOpacity>
        
        </ScrollView>
        </View>
        

        <View style={styles.bottom}>
        <Text style={{ color: '#cccccc', left:0, fontSize:15 }}>ADVERTISE YOUR BUSINESS</Text>
        <Icon style={{position: "absolute", right: 2}} name="arrowright" size={30} color="rgba(255, 255, 255, 0.4)" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
      userInfo : state.user
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {  
  }
}


export default connect(mapStateToProps, mapDispatchtoProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  top: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d0026",
    flex: 1, flexDirection: 'row'
  },

  center: {
    height: "65%",
    backgroundColor: "#800040",
    //alignItems: "center",
    //justifyContent: "center"
  },

  centerItem: {
    height: 50,
    width: 235,
    //borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)', 
    borderBottomWidth: 1,
    justifyContent: "center", 
  },

  bottom: {
    height: "10%",
    backgroundColor: "#4d0026", 
    //alignItems: "center",
    justifyContent: "center", 
    paddingLeft : 10
  }
});
