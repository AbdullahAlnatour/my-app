import { fireEvent,render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
const { default: TestRunner } = require("jest-runner");
test('Renders the booking form heading', () => {
  const handleSubmit=jest.fn();
  render(<BookingPage onSubmit={handleSubmit}/>);
  const headingElement = screen.getByText("BookingForm");
  expect(headingElement).toBeInTheDocument();

  const submit=screen.getByRole("button");
  expect(submit).toBeVisible();

  const calendar=screen.getByLabelText(/Choose date/);
  fireEvent.change(calendar, {target:{value:"10/7/2023"}})

  const number=screen.getByLabelText(/Number of guests/);
  fireEvent.change(number,{target:{value:"3"}});

  expect(handleSubmit).not.toHaveBeenCalled();

});
