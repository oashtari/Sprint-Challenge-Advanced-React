import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  render(<App />);
})

test('contains balls in display', () => {

  const container = render(<App />);
  const getByText = container.getByText;

  getByText(/balls/i);
});

test('contains strikes in display', () => {

  const container = render(<App />);
  const getByText = container.getByText;

  getByText(/strikes/i);
});