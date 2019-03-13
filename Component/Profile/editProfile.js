import React from "react";
import { connect } from "react-redux";
import { LinearGradient } from "expo";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons"; 

import { storeUserInfo } from "../../Action/Login/reducerAction.js";

const { width: WIDTH } = Dimensions.get("window");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  static navigationOptions = {
    headerTitle: "Edit Profile",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#1a000d",
      color: "#ffff"
    }
  };

  ccomponentWillMount() { 
  }

  saveInfo = () => {
        user ={
            "employee_age": "22",
            "employee_name": this.state.text,
            "employee_salary": "60679",
            "id": "7331",
            "profile_image": "",
        }
        this.props.getUserInfo(user);
        alert('Saved'); 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            style={styles.input}
            placeholder="YOUR NAME"
            placeholderTextColor="rgba(128, 0, 42, 0.4)"
          />
          <Icon
            style={styles.icon}
            name="user"
            size={45}
            color="rgba(128, 0, 42, 0.7)"
          />
        </View>
        <TouchableOpacity style={styles.buttonFB} onPress={this.saveInfo.bind()}>
          <Text style={styles.btnText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.user
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    getUserInfo: (user) => dispatch(storeUserInfo(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    //justifyContent: "center"
  },
  buttonFB: {
    width: WIDTH - 55,
    fontSize: 18,
    height: 45,
    color: "rgb(231, 228, 228)",
    borderRadius: 8,
    backgroundColor: "#004080",
    justifyContent: "center",
    marginTop: 10,
    borderColor: "white",
    borderWidth: 0.5
  },
  btnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center"
  },
  input: {
    width: WIDTH - 55,
    fontSize: 18,
    height: 45,
    color: "#262626",
    borderRadius: 10,
    //backgroundColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    borderColor: "rgba(128, 0, 42, 0.7)",
    paddingLeft: 45
    //marginHorizontal: 25
  },

  icon: {
    position: "absolute",
    top: 3
  },
});
