import React from "react";
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
import EyeIcon from "react-native-vector-icons/Feather";

import CalendarStrip from "react-native-calendar-strip";

const { width: WIDTH } = Dimensions.get("window");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static navigationOptions = {
    headerTitle: "        BOOK YOUR BUS",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#800040",
      color: "#ffff"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text
            style={{
              marginTop: 0,
              color: "#ffff",
              fontWeight: "300",
              fontSize: 17
            }}
          >
            Travelling From
          </Text>
          <TextInput style={styles.input} placeholder="Enter Location" />

          <Text
            style={{
              marginTop: 20,
              color: "#ffff",
              fontWeight: "300",
              fontSize: 17
            }}
          >
            Travelling To
          </Text>
          <TextInput style={styles.input} placeholder="Enter Location" />
        </View>

        <View style={styles.center}>
          <Text
            style={{
              marginTop: 2,
              color: "black",
              fontWeight: "300",
              fontSize: 17
            }}
          >
            SELECT THE DATE
          </Text>
          <CalendarStrip
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={{
              type: "border",
              duration: 200,
              borderWidth: 1,
              borderHighlightColor: "white"
            }}
            style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
            calendarHeaderStyle={{ color: "white" }}
            calendarColor={"#7743CE"}
            dateNumberStyle={true}
            dateNameStyle={true}
            dateContainerStyle={true}
            highlightDateNumberStyle={{ color: "yellow" }}
            highlightDateNameStyle={{ color: "yellow" }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            iconContainer={{ flex: 0.1 }}
          />
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
    height: "40%",
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: "#800040",
    padding: 10
  },
  topInner: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#53c653"
  },

  center: {
    height: "25%",
    backgroundColor: "#ffff",
    padding: 5
  },

  bottom: {
    height: "35%",
    backgroundColor: "#ffff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3
  },

  input: {
    width: WIDTH - 20,
    fontSize: 18,
    height: 45,
    color: "rgb(231, 228, 228)",
    //borderRadius: 10,
    //backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: 5,
    borderBottomWidth: 0.5,
    borderColor: "#ffff"
  }
});
