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
  const callback = jest.fn();
  const {
    container,
  } = render(<MultiSlider data={times} padding={20} callback={callback} />);
  test('Check slider item', async () => {
    const values = [1, 2];
    fireEvent(container.children, 'onValuesChange', values);
  });
});
