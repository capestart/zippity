import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Image, TouchableHighlight,
} from 'react-native';
import * as Font from 'expo-font';
import WelcomeScreen from './app/screens/Welcome';
import ScheduleScreen from './app/screens/Schedule';
import styles from './app/styles/App.style';

Font.loadAsync({
  'Nunito-Regular': require('./app/assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./app/assets/fonts/Nunito-Bold.ttf'),
  'Nunito-SemiBold': require('./app/assets/fonts/Nunito-SemiBold.ttf'),

});
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
          style={styles.logo}
          source={{ uri: 'https://zippity.imgix.net/zippity-logo-white.png?auto=format,compress' }}
        />
      ),
      headerLeft: () => (
        <TouchableHighlight style={styles.nav_icon_padding}>
          <Image
            style={styles.nav_icon}
            source={require('./app/assets/menu.png')}
          />
        </TouchableHighlight>
      ),
      headerStyle: styles.header_style,
    },
  },
});

export default createAppContainer(AppNavigator);
