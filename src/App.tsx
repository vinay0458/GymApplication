/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


import { createAppContainer, createStackNavigator } from "react-navigation";
// import Reactotron from './ReactotronConfig';
import routeConfig from "./src/routeConfig";

export default createAppContainer(createStackNavigator(routeConfig));