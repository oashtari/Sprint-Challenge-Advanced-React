import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import WWCPlayers from './Components/WWCplayers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
  render(<App />);
})

test('contains WWC Players in display', () => {

  const container = render(<App />);
  const getByText = container.getByText;

  getByText(/wwc players/i);
});


test('matches the snapshot', () => {
  const tree = renderer.create(<WWCPlayers />).toJSON()

  expect(tree).toMatchSnapshot()
});


// test("all players", () => {
//   const { getByTestId } = render(<WWCPlayers />);

//   getByTestId("allPlayers");
// });