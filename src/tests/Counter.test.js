import * as React from 'react';
// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter.js';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
   expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
    await userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByTestId('count')).toHaveTextContent('1');

});

test('clicking - decrements the count', async () => { 
    await userEvent.click(screen.getByRole('button', { name: '-' }));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
