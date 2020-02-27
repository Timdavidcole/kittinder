import NavBar from "../Components/Header/NavBar";
import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("checks render and NavBar snapshot", () => {
  const navBar = renderer.create(
    <Router>
      <NavBar />
    </Router>
  );

  let tree = navBar.toJSON();
  expect(tree).toMatchSnapshot();
});

test("clicking Home Button takes to home", async () => {
  const wrapper = await mount(
    <Router>
      <NavBar />
    </Router>
  );
  wrapper.find("#buttonHome").simulate("click");
  expect(location.pathname).toBe("/");
});

test("clicking Favourites Button takes to favourites", async () => {
  const wrapper = await mount(
    <Router>
      <NavBar />
    </Router>
  );
  wrapper.find("#buttonFavourites").simulate("click");
  expect(location.pathname).toBe("/favourites");
});
