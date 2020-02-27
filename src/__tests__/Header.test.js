import Header from "../Components/Header/Header";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

test("checks render and Header snapshot", () => {
  const header = renderer.create(
    <Router>
      <Header />
    </Router>
  );

  let tree = header.toJSON();
  expect(tree).toMatchSnapshot();
});
