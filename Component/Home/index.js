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
import AntDesignIcon from "react-native-vector-icons/AntDesign";

import { DrawerActions } from "react-navigation-drawer";
import { Header, Left, Right, Icon, Body, Title } from "native-base";

const { width: WIDTH } = Dimensions.get("window");

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("loginID");
    if (value !== null) {
      // We have data!!
      console.log("LOGIN ID : ", value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

_removeData = async () => {
  try {
    const value = await AsyncStorage.removeItem("loginID");
    console.log("REMOVING");
    if (value !== null) {
      // We have data!!
      console.log("REMOVED");
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ backgroundColor: "#800040", height: 70, paddingTop: 10 }}
          androidStatusBarColor="#800040"
        >
          <Left>
            <Icon
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                textAlign: "center",
                left: 80
              }}
            >
              MOVIES
            </Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.top}>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "bold",
              color: "#800040",
              fontSize: 30
            }}
          >
            HOME
          </Text>
          {/* <Button onPress={() => _retrieveData()} title="PRESS" /> */}
        </View>

        <View style={styles.center}> 
          {/* <Button onPress={() => _removeData()} title="REMOVE" /> */}
        </View>

        <View style={styles.bottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  top: {
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff"
  },

  center: {
    height: "10%",
    backgroundColor: "#ffff"
  },

  bottom: {
    height: "25%",
    backgroundColor: "#ffff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3
  }
});
