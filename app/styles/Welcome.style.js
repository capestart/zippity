import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 32,
    color: '#75787b', // Zippity gray
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    backgroundColor: '#48999e', // Zippity blue
    padding: 15,
    borderRadius: 15,
  },
  viewBottom: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 16,
    color: '#75787b', // Zippity gray
  },
  blue: {
    color: '#48999e', // Zippity blue
  },
  red: {
    color: '#d53f4e', // Zippity red
  },
});
