import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from '../styles/Welcome.style';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Zippity!</Text>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => navigation.push('Schedule')}
      >
        <Text style={styles.buttonText}>Schedule an Appointment</Text>
      </TouchableOpacity>
      <View style={styles.viewBottom}>
        <Text style={styles.text}>Zippity Gray</Text>
        <Text style={[styles.text, styles.blue]}>Zippity Blue</Text>
        <Text style={[styles.text, styles.red]}>Zippity Red</Text>
      </View>
    </View>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
