import Logo from "../Components/Header/Logo";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

test("checks render and Logo snapshot", () => {
  const logo = renderer.create(<Logo />);

  let tree = logo.toJSON();
  expect(tree).toMatchSnapshot();
});

