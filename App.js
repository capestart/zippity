import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Image, TouchableHighlight,
} from 'react-native';
import WelcomeScreen from './app/screens/Welcome';
import ScheduleScreen from './app/screens/Schedule';
import styles from './app/styles/App.style';

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
