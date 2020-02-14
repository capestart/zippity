import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Schedule from '../Schedule';

describe('Schedule Page', () => {
  const navigation = { navigate: jest.fn() };
  const {
    getAllByText, getByText, getByRole,
  } = render(<Schedule navigation={navigation} />);
  test('Render header info', async () => {
    expect(getAllByText('Schedule Your Service')).toBeTruthy();
  });
  test('Render header info icon', async () => {
    const header = getByRole('header');
    const tickIconURL = header.props.children[0].props.children[1].props.children[0]
      .props.source.testUri;
    expect(tickIconURL).toBe('../../../app/assets/tick.png');
  });
  describe('Render available dates', () => {
    const availableDates = getByRole('summary');
    test('Check available dates count', async () => {
      expect(availableDates.props.data.length).toBe(5);
    });
    test('Check flatlist item before selection', async () => {
      expect(getByText('Tuesday, February 4').parentNode.props.style.backgroundColor).toBe('#ffffff');
    });
    test('Check flatlist item after selection', async () => {
      fireEvent.press(getByText('Tuesday, February 4'));
      expect(getByText('Tuesday, February 4').parentNode.props.style.backgroundColor).toBe('gray');
    });
    test('Validate continue button after date selection', async () => {
      expect(getByText('Continue').parentNode.props.style.backgroundColor).toBe('#48999e');
    });
  });
});
