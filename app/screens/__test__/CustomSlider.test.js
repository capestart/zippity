import {
  render, fireEvent,
} from '@testing-library/react-native';
import React from 'react';
import MultiSlider from '../slider/CustomSlider';

describe('CustomSlider Page', () => {
  const times = [
    {
      value: 1,
      time: '5AM',
    },
    {
      value: 2,
      time: '9AM',
    },
    {
      value: 3,
      time: 'Noon',
    },
  ];
  const timeFrame = [
    {
      value: 1,
      time: '5 AM',
    },
    {
      value: 2,
      time: '9 AM',
    },
    {
      value: 3,
      time: 'Noon',
    },
    {
      value: 4,
      time: '5 PM',
    },
    {
      value: 5,
      time: '9 PM',
    },
  ];
  const callback = jest.fn();
  const {
    getByText,
  } = render(<MultiSlider data={times} dataframe={timeFrame} padding={20} callback={callback} />);
  test('Check slider item', async () => {
    expect(getByText('Noon')).toBeTruthy();
  });
});
