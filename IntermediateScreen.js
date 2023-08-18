import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";
// import { RNCamera } from "react-native-camera";
import { request, PERMISSIONS } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
// import ImagePicker, { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Icon } from "@rneui/themed";
class IntermediateScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      path: null,
      fileName: null,
      fileType: null,
      imageHeight: 350,
      imageWidth: 350,
      label: null,
      quality: null
    };
  }


  // takePicture = async function () {
  //   if (this.camera) {
  //     const options = {
  //       quality: 0.5,
  //       base64: true
  //     };
  //     const data = await this.camera.takePictureAsync(options);
  //     this.setState({
  //       path: data.uri
  //     });
  //   }
  //   const form_data = new FormData();
  //   let url = "http://ibeef.centralus.cloudapp.azure.com:8000/api/posts/";
  //   let length = this.state.path.split("/").length;
  //   let imageName = this.state.path.split("/")[length - 1].trim();
  //   let finalImg = imageName.split(".")[0];
  //   let uri = this.state.path;
  //   const uriParts = uri.split(".");
  //   const fileType = uriParts[uriParts.length - 1];

  //   form_data.append("image", {
  //     uri,
  //     name: imageName,
  //     type: `image/${fileType}`
  //   });
  //   axios
  //     .post(url, form_data, {
  //       headers: {
  //         Accept: "application/json, text/plain, */*"
  //       }
  //     })
  //     .then(res => {
  //       this.setState({ label: res.data.meat });
  //       this.setState({ quality: res.data.quality });
  //     })
  //     .catch(err => console.log(err));
  // };
  requestCameraPermission = async () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      setPermissionResult(result)

      refRBSheet?.current?.close();
      console.log('Permission for camera ', result);
      if (result === 'granted') {
        openCamera();
      } else {
      }
    });
  };
  openCamera = async () => {
    await this.requestCameraPermission();
    const options = {
      mediaType: 'mixed',
      // maxWidth: 300,
      // maxHeight: 300,
      // quality: 0,
      // maxSelectedFiles: '6',
      // selectionLimit: IMAGES_LIMIT,
    };
    // const result = await launchCamera(options);
    let result = {}
    await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      result = image
    });
    console.log('<====>', result);

    const pathSegments = result?.path.split("/");

    // Extract the last segment (file name)
    const fileName = pathSegments[pathSegments.length - 1];
    this.setState({
      path: result?.path,
      fileName: fileName,
      fileType: result?.mime
    });
    const form_data = new FormData();
    console.log(this.state);
    // let url = "https://9043-182-178-128-126.in.ngrok.io/api/posts/";
    let url = "http://54.164.161.236:8080/api/posts/";

    // let length = this.state.path.split("/").length;
    // let imageName = this.state.path.split("/")[length - 1].trim();
    // let finalImg = imageName.split(".")[0];
    let uri = this.state.path;
    let name = this.state.fileName;
    let type = this.state.fileType;
    // const uriParts = uri.split(".");
    // const fileType = uriParts[uriParts.length - 1];

    form_data.append("image", {
      uri: uri,
      name: name,
      type: type,
    });
    axios
      .post(url, form_data, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "multipart/form-data",
        }
      })
      .then(res => {
        console.log('ressssssssss', res)
        this.setState({ label: res.data.meat });
        this.setState({ quality: res.data.quality });
      })
      .catch(err => console.log(err));
  };
  // setImage(result.assets);



  // renderCamera() {
  //   return (
  //     // <RNCamera
  //     //   ref={cam => {
  //     //     this.camera = cam;
  //     //   }}
  //     //   style={styles.preview}
  //     // >
  //     //   <TouchableHighlight
  //     //     style={styles.capture}
  //     //     onPress={this.takePicture.bind(this)}
  //     //     underlayColor="rgba(255, 255, 255, 0.5)"
  //     //   >
  //     //     <View />
  //     //   </TouchableHighlight>
  //     // </RNCamera>
  //   );
  // }
  renderCamera() {
    return (
      <View>
        <TouchableHighlight
          style={styles.capture}
          onPress={this.openCamera}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View>
            <Icon type="entypo" name="camera" color="#184420" size={50} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  renderImage() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri: this.state.path
          }}
          style={styles.image}
        />
        <Text style={{ color: "black" }}>
          label:{this.state.label}
          {"\n"}
          quality:{this.state.quality}
        </Text>

        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() =>
            this.props.navigation.navigate("Recipe", {
              label: this.state.label
            })
          }
          underlayColor="#FFFF00"
        >
          <Text style={styles.displayText}> Recipe </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFE9D"
  },
  navigateButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFBF43",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFE9D"
  },
  displayText: {
    color: "#084929",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    flex: 1,
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 1.5,
    resizeMode: "contain",
    marginTop: 50
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFE9D"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#FFF",
    marginBottom: 15
  },
  buttonText: {
    color: "white",
    fontSize: 15
  },
  navigateButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#FFBF43",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#184929"
  }
});
export default IntermediateScreen;
