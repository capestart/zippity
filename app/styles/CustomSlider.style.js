import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  active: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5e5e5e',
  },
  inactive: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#bdc3c7',
  },
  sliderActive: {
    textAlign: 'center',
    fontSize: 12,
    bottom: 10,
    color: '#5e5e5e',
  },
  sliderInactive: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#bdc3c7',
  },
  image: {
    width: 15,
    height: 15,
  },
  trackStyle: {
    backgroundColor: '#ebebeb',
    height: 3,
  },
  selectedStyle: {
    backgroundColor: '#abe3fb',
    height: 3,
  },
});
