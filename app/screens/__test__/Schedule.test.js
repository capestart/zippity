// // import { fireEvent, render, wait } from '@testing-library/react-native';
// import { shallow } from 'enzyme';
// import Schedule from '../Schedule';
// import Welcome from '../Welcome';
import React from 'react';
import { shallow } from 'react-native-testing-library';
// import Schedule from '../Schedule';
import Welcome from '../Welcome';
import Schedule from '../Schedule';

describe('test', () => {
  const navigation = { navigate: jest.fn() };
  test('examples of some things', async () => {
    const welcomeWrapper = shallow(<Welcome navigation={navigation} />);
    console.debug(welcomeWrapper.output.props);
  });
//   test('view schedule page', async () => {
//     const scheduleWrapper = shallow(<Schedule />);
//     console.log(scheduleWrapper);
//   });
});
