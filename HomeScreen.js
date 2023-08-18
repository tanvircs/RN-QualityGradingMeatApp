import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
// import Image from "react-native-scalable-image";
import { Icon } from '@rneui/themed';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null

  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./app-fronts.jpg")} style={styles.image} />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => this.props.navigation.navigate("Intermediate")}
          underlayColor="#184929"
        >
          <Icon type="entypo" name="camera" color="#184420" size={50} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFE9D"
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "center"
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFFE9D",
    borderColor: "#FFFE9D"
  },
  loginText: {
    color: "#FFBF43",
    textAlign: "center",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
});
export default HomeScreen;
