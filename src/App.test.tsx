import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Kraftlauget text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Kraftlauget/i);
  expect(linkElement).toBeInTheDocument();
});
