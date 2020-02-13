import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '70%',
  },
  text: {
    fontSize: 16,
    color: '#75787b', // Zippity gray
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: '#e69391',
  },
  selectedItem: {
    backgroundColor: 'gray',
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 16,
    borderWidth: 0,
  },
  title: {
    fontSize: 22,
  },
  markerStyle: {
    borderColor: '#459ba1',
    backgroundColor: 'white',
  },
  selectedStyle: {
    backgroundColor: '#459ba1',
  },
  buttonText: {
    fontSize: 24,
    marginLeft: 20,
    color: 'white',
  },
  button: {
    marginTop: 30,
    width: 200,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  selectedButton: {
    marginTop: 30,
    width: 200,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#48999e',
  },
  infoContainer: {
    backgroundColor: '#e5e8e8',
    height: 260,
    width: DEVICE_WIDTH - 30,
    marginTop: 10,
    borderRadius: 10,
  },
  inforContainerView: {
    alignItems: 'center',
  },
  scheduleTitleText: {
    fontSize: 35,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    margin: 10,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
  scheduleText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    width: DEVICE_WIDTH - 90,
  },
  optionView: {
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  optionIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  scheduleView: {
    backgroundColor: '#459ba1',
    width: DEVICE_WIDTH - 90,
    height: 40,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 10,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    height: 1100,
    width: DEVICE_WIDTH - 30,
    marginTop: -20,
    borderRadius: 10,
    padding: 10,
  },
  chooseText: {
    fontSize: 35,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'left',
    margin: 15,
    marginTop: 30,
  },
  chooseTimeText: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 20,
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
  },
  timeInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
  },
  timeInfoBox: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeInfoText: {
    fontSize: 20,
    fontWeight: '400',
  },
  timeInfoTo: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    fontSize: 15,
  },
  errorText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#e69391',
  },
  flatList: {
    flexGrow: 0,
    height: 320,
  },
  commentsView: {
    marginTop: 40,
  },
  commentsText: {
    fontSize: 23,
    fontWeight: '400',
  },
});
