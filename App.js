
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
