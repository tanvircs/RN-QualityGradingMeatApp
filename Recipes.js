import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Text,
  Dimensions
} from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const rad = Math.round(screenWidth / 3) - 10

class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    /*title: "Recipes",
    headerStyle: {
      backgroundColor: "#FFBF43"
    },
    headerTintColor: "#184929",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
      flex: 1
    }*/
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const { route } = this.props;
    const { label } = route.params;
    console.log('label', label)
    // const label = 'new york strip';
    if (label == "new york strip") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL("https://www.beefitswhatsfordinner.com/recipes/recipe/1685/garden-herb-strip-steaks");
            }}
          >
            <Text style={styles.displayText}>New York Strip1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/2383/pomegranate-steak-with-quinoa"
              );
            }}
          >
            <Text style={styles.displayText}>New York Strip2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/4902/inside-out-grilled-steak-salad"
              );
            }}
          >
            <Text style={styles.displayText}>New York Strip3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/5082/beef-steaks-with-sweet-soy-drizzle"
              );
            }}
          >
            <Text style={styles.displayText}>New York Strip4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMiddleCenter}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/5082/beef-steaks-with-sweet-soy-drizzle"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (label == "flank steak") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1031/balsamic-marinated-flank-steak"
              );
            }}
          >
            <Text style={styles.displayText}>Flank Steak1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/3291/three-way-marinated-flank-steak"
              );
            }}
          >
            <Text style={styles.displayText}>Flank Steak2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.ndbeef.org/recipes/recipe/6362/mediterranean-beef-pinwheels"
              );
            }}
          >
            <Text style={styles.displayText}>Flank Steak3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/4689/tequila-marinated-steak-burritos"
              );
            }}
          >
            <Text style={styles.displayText}>Flank Steak4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleCenter}
            onPress={() => {
              Linking.openURL(
                "https://www.ndbeef.org/recipes/recipe/55627/indian-beef-flank-steak-rice"
              );
            }}
          >
            <Text style={styles.displayText}>Flank Steak5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleRight}
            onPress={() => {
              Linking.openURL(
                "https://www.ndbeef.org/recipes/recipe/55627/indian-beef-flank-steak-rice"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (label == "chuck steak") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/196/bbq-beef-chuck-steak"
              );
            }}
          >
            <Text style={styles.displayText}>Chuck Steak1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1519/floribbean-fiesta-steak"
              );
            }}
          >
            <Text style={styles.displayText}>Chuck Steak2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/692/quick-spicy-beef-chuck-steaks"
              );
            }}
          >
            <Text style={styles.displayText}>Chuck Steak3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/692/quick-spicy-beef-chuck-steaks"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (label == "short rib") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1727/slow-cooker-beef-short-ribs-with-ginger-mango-barbecue-sauce"
              );
            }}
          >
            <Text style={styles.displayText}>Beef Short-Ribs1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1648/chipotle-braised-short-ribs"
              );
            }}
          >
            <Text style={styles.displayText}>Beef Short-Ribs2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/55570/slow-cooked-red-wine-braised-beef-short-ribs-with-herbed-polenta-toast"
              );
            }}
          >
            <Text style={styles.displayText}>Beef Short-Ribs3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1188/braised-short-ribs-with-red-wine-sauce"
              );
            }}
          >
            <Text style={styles.displayText}>Beef Short-Ribs4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMiddleCenter}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1188/braised-short-ribs-with-red-wine-sauce"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (label == "tenderloin") {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1160/beef-tenderloin-cranberry-and-pear-salad"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/180/beef-tenderloin-steaks-with-blue-cheese-topping"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/3938/two-steppin-tenderloin"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/3320/succulent-filet-in-a-field-of-greens"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleCenter}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/5074/herbed-tenderloin-steaks-with-goat-cheese-topping"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1450/beef-tenderloin-with-easy-cranberry-balsamic-sauce"
              );
            }}
          >
            <Text style={styles.displayText}>Tenderloin6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleDownLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1450/beef-tenderloin-with-easy-cranberry-balsamic-sauce"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonTopLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/5072/caribbean-ribeye-steaks-with-grilled-pineapple-salad"
              );
            }}
          >
            <Text style={styles.displayText}> Bone-In & Boneless Ribeye1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopMiddle}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1632/ribeye-steaks-with-blue-cheese-butter-and-mushrooms"
              );
            }}
          >
            <Text style={styles.displayText}> Bone-In & Boneless Ribeye2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTopRight}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1749/grilled-ribeye-steaks-and-potatoes-with-smoky-paprika-rub"
              );
            }}
          >
            <Text style={styles.displayText}> Bone-In & Boneless Ribeye3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonMiddleLeft}
            onPress={() => {
              Linking.openURL(
                "https://www.beefitswhatsfordinner.com/recipes/recipe/1749/grilled-ribeye-steaks-and-potatoes-with-smoky-paprika-rub"
              );
            }}
          >
            <Text style={styles.displayText}>More</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFE9D"
  },

  buttonTopLeft: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: 0,
    left: 0
  },
  buttonMiddleLeft: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: rad + 10,
    left: 0
  },
  buttonMiddleDownLeft: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: 2 * (rad + 10),
    left: 0
  },
  buttonTopMiddle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: 0,
    left: rad + 10
  },
  buttonMiddleCenter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: rad + 10,
    left: rad + 10
  },
  buttonMiddleRight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: rad + 10,
    left: 2 * (rad + 10)
  },
  buttonTopRight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCE786",
    borderColor: "black",
    width: rad,
    height: rad,
    borderRadius: rad,
    borderWidth: 10,
    position: "absolute",
    top: 0,
    left: 2 * (rad + 10)
  },

  displayText: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 30
  }
});
export default Recipes;
