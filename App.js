/**
 * Meat Grading React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import IntermediateScreen from "./components/IntermediateScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipes from "./components/Recipes";


const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Recipe" component={Recipes} />
          <Stack.Screen name="Intermediate" component={IntermediateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;
