import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Welcome from '../Welcome';

describe('Welcome Page', () => {
  const navigation = { push: jest.fn() };
  const {
    getByText, getByRole,
  } = render(<Welcome navigation={navigation} />);
  test('Render header info', async () => {
    expect(getByText('Schedule an Appointment')).toBeTruthy();
    fireEvent.press(getByRole('button'));
  });
});
