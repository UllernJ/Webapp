import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Should render our component', () => {
  render(<App />);
  //vi tester at vi finner componenten.
  const linkElement = document.getElementById("loginForm");
  expect(linkElement).toBeInTheDocument();
});

test('Should test our validation.', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: 'a'}})
  const warning = document.getElementById("warning").innerHTML;
  expect(warning).toBe("Please use a password longer than 6 characters.");
});

test('Submit button should be disabled if the username and password is less than 6 characters.', () => {
  render(<App />);
  const button = document.getElementById("button");
  expect(button.disabled).toBe(true);
})