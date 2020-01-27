import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import WWCPlayers from './WWCplayers';


test('renders without crashing', () => {
    render(<WWCPlayers />);
})