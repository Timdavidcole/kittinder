import Logo from "../Components/Header/Logo";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("checks render and Logo snapshot", () => {
  const logo = renderer.create(<Logo />);

  let tree = logo.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Logo has correct text", () => {
  render(<Logo />);
  expect(screen.queryByText("k")).toBeInTheDocument();
  expect(screen.queryByText("it")).toBeInTheDocument();
  expect(screen.queryByText("T")).toBeInTheDocument();
  expect(screen.queryByText("nder")).toBeInTheDocument();
});
