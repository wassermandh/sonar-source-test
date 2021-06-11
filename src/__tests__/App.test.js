import { render, screen } from '@testing-library/react';
import App from '../App';
import {add} from '../App'
var assert = require('assert');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('add shouold work', () => {
  const result = add(1,2)
  assert(result === 3)
})