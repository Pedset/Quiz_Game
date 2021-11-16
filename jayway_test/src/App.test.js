import React from 'react';
import {render} from '@testing-library/react';
import App from "./App";

test('renders App correctly', () => {
  const {getByText, getByTestId} = render(<App />)
  expect(getByText('Quiz app')).toBeInTheDocument()
  expect(getByText('Menu')).toBeInTheDocument()
  expect(getByText('Instructions')).toBeInTheDocument()
  expect(getByTestId('start_btn')).toBeInTheDocument()
  expect(getByTestId('start_btn').innerHTML).toBe("Start")
  //fireEvent.click(getByTestId('start_btn'));
})
