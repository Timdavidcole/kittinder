import Header from "../Components/Header/Header";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

test("checks render and Header snapshot", () => {
  const header = renderer.create(<Header />);

  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});

