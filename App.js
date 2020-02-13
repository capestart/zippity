import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, TouchableHighlight } from 'react-native';
import WelcomeScreen from './app/screens/Welcome';
import ScheduleScreen from './app/screens/Schedule';

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: { headerShown: false },
  },
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: {
      headerShown: true,
      gestureEnabled: false,
      headerTitle: () => (
        <Image
          style={{ width: 150, height: 40, resizeMode: 'contain' }}
          source={{ uri: 'https://zippity.imgix.net/zippity-logo-white.png?auto=format,compress' }}
        />
      ),
      headerLeft: () => (
        <TouchableHighlight style={{ paddingLeft: 20 }}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('./app/assets/menu.png')}
          />
        </TouchableHighlight>
      ),
      headerStyle: {
        backgroundColor: '#459ba1',
      },
      headerTintColor: '#ffffff',
    },
  },
});

export default createAppContainer(AppNavigator);
