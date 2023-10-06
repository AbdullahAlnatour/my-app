import { fireEvent,render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
const { default: TestRunner } = require("jest-runner");
test('Renders the booking form heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("BookingForm");
  expect(headingElement).toBeInTheDocument();

  const sumbit=screen.getByRole("button");
  expect(sumbit).toBeVisible();

  const calendar=screen.getByLabelText(/Choose date/);
  fireEvent.change(calendar, {target:{value:"10/7/2023"}})

  const number=screen.getByLabelText(/Number of guests/);
  fireEvent.change(number,{target:{value:"3"}});

});
