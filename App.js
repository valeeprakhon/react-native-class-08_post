// App.js
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Add from './Add'
import Edit from './Edit'
import Menu from './Menu'
import Splash from './Splash'

import {Provider} from 'react-redux'
import configureStore from './Store'

const AddScreen =()=>{
  const navigation = useNavigation();
  return (
    <Add navigation={navigation}/>
  );
}

const SplashScreen =()=> {
  const navigation = useNavigation();
  return (
    <Splash navigation={navigation}/>
  );
}

const EditScreen =()=> {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <Edit navigation={navigation} route={route}/>
  );
}

const MenuScreen=()=> {
  const navigation = useNavigation();
  return (
    <Menu navigation={navigation}/>
  );
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }}/>

      <Stack.Screen name="Menu" 
          component={MenuScreen} 
          options={{ headerShown: false }}/>

      <Stack.Screen name="Add" 
        component={AddScreen} 
        options={{ headerShown: false }}/>

      <Stack.Screen name="Edit" 
          component={EditScreen} 
          options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}

export default class App extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };

  }
  render(props) {
    const store = configureStore;
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
    );
  }
}