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
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import FlashMessage, { showMessage } from "react-native-flash-message";

import { storeUserInfo } from "../../Action/Login/reducerAction.js";
import { updateDummyEmployeeData } from "../../Action/Login";

const { width: WIDTH } = Dimensions.get("window");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoading: false,
      name: "",
      age: "",
      salary: ""
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

  componentWillMount() {}

  onSubmitPressed = async () => {
    if (
      this.state.name == "" ||
      this.state.salary == "" ||
      this.state.age == ""
    ) {
      showMessage({
        message: "Required All Fields",
        type: "info",
        backgroundColor: "#cc0066"
      });
    } else {
      this.setState({ showLoading: true });
      //setTimeout(() => {
      let response = await updateDummyEmployeeData(
        this.props.userInfo.id,
        this.state.name,
        this.state.salary,
        this.state.age
      );
      let responseJson = await response.json();
      if (response.status >= 200 && response.status < 300) {
        this.setState({ showLoading: false });
        user = {
          employee_age: responseJson.age,
          employee_name: responseJson.name,
          employee_salary: responseJson.salary,
          id: this.props.userInfo.id,
          profile_image: ""
        };
        this.props.getUserInfo(user);
        showMessage({
          message: "Update Successfully Completed",
          type: "info",
          backgroundColor: "#cc0066"
        });
      } else if (response.status >= 400 && response.status < 500) {
        this.setState({ showLoading: false });
        showMessage({
          message: "Check Your Internet Connection",
          type: "info",
          backgroundColor: "#cc0066"
        });
      } else {
        this.setState({ showLoading: false });
        showMessage({
          message: "Web Api error",
          type: "info",
          backgroundColor: "#cc0066"
        });
      }
      // }, 3000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <TextInput
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
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
        <View style={{ marginTop: 5 }}>
          <TextInput
            onChangeText={text => this.setState({ age: text })}
            value={this.state.age}
            style={styles.input}
            placeholder="YOUR AGE"
            placeholderTextColor="rgba(128, 0, 42, 0.4)"
          />
          <Icon
            style={styles.icon}
            name="user"
            size={45}
            color="rgba(128, 0, 42, 0.7)"
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <TextInput
            onChangeText={text => this.setState({ salary: text })}
            value={this.state.salary}
            style={styles.input}
            placeholder="YOUR SALARY"
            placeholderTextColor="rgba(128, 0, 42, 0.4)"
            onEndEditing={() =>this.onSubmitPressed()}
          />
          <Icon
            style={styles.icon}
            name="user"
            size={45}
            color="rgba(128, 0, 42, 0.7)"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonFB}
          onPress={this.onSubmitPressed.bind()}
        >
          <Text style={styles.btnText}>SAVE</Text>
          {this.state.showLoading ? (
            <ActivityIndicator
              style={{ position: "absolute", right: 5 }}
              size={25}
              color="#fff"
            />
          ) : null}
        </TouchableOpacity>
        {/* <FlashMessage position="top" /> */}
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
    getUserInfo: user => dispatch(storeUserInfo(user))
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
  }
});
