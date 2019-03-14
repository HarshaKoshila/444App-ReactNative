import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import EyeIcon from "react-native-vector-icons/Feather";
import FlashMessage, { showMessage } from "react-native-flash-message";

import { getDummyEmployeeData } from "../../Action/Login";
import { storeUserInfo } from "../../Action/Login/reducerAction.js";

import logoImage from "../../Images/logo.png";

var {height, width} = Dimensions.get('window')

// _storeData = async (id) => {
//   try {
//     await AsyncStorage.setItem('loginID', id);
//   } catch (error) {
//     // Error saving data
//   }
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      onPress: false,
      userID: null,
      errorMsg: "",
      showLoading: false
    };
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {}

  onpressShowPassword = () => {
    if (this.state.onPress == false) {
      this.setState({ showPassword: true, onPress: true });
    } else {
      this.setState({ showPassword: false, onPress: false });
    }
  };

  onPressLoginBtn = () => {
    if (this.state.userID == null || this.state.userID == "") {
      showMessage({
        message: "Enter User ID",
        type: "info",
        backgroundColor: "#cc0066"
      });
    } else {
      this.setState({showLoading: true})
      setTimeout(() => {
      getDummyEmployeeData(this.state.userID).then(data => { 
        this.setState({showLoading: false})
        if (data === false) {
          this.setState({ errorMsg: data });
          showMessage({
            message: "Wrong User ID Number",
            type: "info",
            backgroundColor: "#cc0066"
          });
        } else if (typeof data === "string") {
          this.setState({ errorMsg: data });
          showMessage({
            message: data,
            type: "info",
            backgroundColor: "#cc0066"
          });
        } else {
          this.props.getUserInfo(data);
          this.props.navigation.navigate("Home");
        }
      });
    }, 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.buttonSKIP}>
            <Text style={styles.btnText}>SKIP</Text>
          </TouchableOpacity>
          <Image source={logoImage} style={styles.logoStyle} />
          <View style={{ marginTop: 30 }}>
            <TextInput
              style={styles.input}
              placeholder="YOUR MOBILE NO.(07XXXX)"
              placeholderTextColor="rgba(128, 0, 42, 0.4)"
              onChangeText={text => this.setState({ userID: text })}
              value={this.state.userID}
              onEndEditing={() =>this.onPressLoginBtn()}
            />
            <Icon
              style={styles.icon}
              name="user"
              size={45}
              color="rgba(128, 0, 42, 0.7)"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="PASSWORD"
              placeholderTextColor="rgba(128, 0, 42, 0.4)"
              secureTextEntry={this.state.showPassword == false ? true : false}
            />
            <Icon
              style={styles.icon}
              name="unlock"
              size={45}
              color="rgba(128, 0, 42, 0.7)"
            />
            <TouchableOpacity
              style={styles.eyeIconBtn}
              onPress={this.onpressShowPassword.bind(this)}
            >
              <EyeIcon
                name={this.state.onPress == false ? "eye" : "eye-off"}
                size={20}
                color="rgba(128, 0, 42, 0.7)"
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "500",
                marginLeft: 160,
                color: "#800040",
                fontSize: 15
              }}
            >
              FORGOT PASSWORD?
            </Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLoginBtn.bind()}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFB}>
            <Text style={styles.btnText}>LOGIN WITH FACEBOOK</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, color: "#FFFF", fontSize: 13 }}>
            DON'T HAVE AN ACCOUNT?{" "}
            <Text style={{ color: "#FFFF", fontSize: 15, fontWeight: "bold" }}>
              SIGN UP
            </Text>
          </Text>
        </View>
        {this.state.showLoading ? 
        <View style={styles.subHeaderImage}>
        <ActivityIndicator size={80} color="#e60073" /> 
        </View> : null }

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchtoProps = dispatch => {
  return {
    getUserInfo: user => dispatch(storeUserInfo(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  top: {
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },

  bottom: {
    height: "35%",
    backgroundColor: "#800040",
    alignItems: "center",
    justifyContent: "center"
  },

  logoStyle: {
    marginTop: 15,
    width: 130,
    height: 130
  },

  input: {
    width: width - 55,
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

  eyeIconBtn: {
    position: "absolute",
    top: 12,
    right: 10
  },

  button: {
    width: width - 55,
    fontSize: 18,
    height: 45,
    color: "rgb(231, 228, 228)",
    borderRadius: 8,
    backgroundColor: "#330033",
    justifyContent: "center",
    marginTop: 10,
    borderColor: "white",
    borderWidth: 0.5
  },

  buttonFB: {
    width: width - 55,
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

  buttonSKIP: {
    width: 100,
    fontSize: 18,
    height: 25,
    color: "rgb(231, 228, 228)",
    borderRadius: 10,
    backgroundColor: "#330033",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 250,
    borderColor: "white",
    borderWidth: 0.5
  },

  btnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center"
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subHeaderImage: {
    height: height,
    width: width,
    //marginTop: 50,
    //marginLeft: 20,
    //marginRight: 20, 
    //borderRadius:10, 
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center', 
},

});
