import Header from "../Components/Header/Header";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("checks render and Header snapshot", () => {
  const header = renderer.create(<Header />);

  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Logo has correct text", () => {
  render(<Header />);
  expect(screen.queryByText("Find your favourite cat breed...")).toBeInTheDocument();
});