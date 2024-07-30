import { render, screen, fireEvent, findByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DemoOutput from "./DemoOutput";

test("renders heading element on UI", () => {
  render(<DemoOutput />);
  const headingEl = screen.getByText("the Demo Output Component", {
    exact: false,
  });
  expect(headingEl).toBeInTheDocument();
});

test("renders paragraph element on UI", () => {
  render(<DemoOutput />);

  const paragraphEl = screen.queryByText(/Some cool contents/i);

  expect(paragraphEl).not.toBeNull();
});

test("renders 'Toggle is false' when the button is not clicked", () => {
  render(<DemoOutput />);

  const paragraphEl = screen.getByText(/Toggle is false/i);

  expect(paragraphEl).toBeInTheDocument();
});

test("renders 'Toggle is true' when button is clicked", async () => {
  render(<DemoOutput />);

  const btnEl = screen.getByRole("button");

  userEvent.click(btnEl);

  const paragraphEl = await screen.findByText(/Toggle is true/i);

  expect(paragraphEl).not.toBeNull();
});

test.skip("renders not 'Toggle is false' when the button is clicked", async () => {
  render(<DemoOutput />);

  const buttonEl = screen.getByRole("button");

  fireEvent.click(buttonEl);

  await screen.findByText(/Toggle is false/i);
});

test("renders 200 todo items from REST API Call", async () => {
  render(<DemoOutput />);

  const listItems = await screen.findAllByRole("listitem");

  expect(listItems.length).toEqual(200);
});
