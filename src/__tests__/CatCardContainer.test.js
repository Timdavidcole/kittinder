import CatCardContainer from "../Components/CatCard/CatCardContainer";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
jest.mock("../Models/shuffle");

const breeds = ["Cat1", "Cat2", "Cat3"];

test("checks CatCardContainer snapshot", () => {
  const catCardContainer = renderer.create(<CatCardContainer cats={breeds} />);

  let tree = catCardContainer.toJSON();
  expect(tree).toMatchSnapshot();
});

test("checks is creates multiple CatCards", () => {
  const catCardContainer = mount(<CatCardContainer cats={breeds} />);
  expect(catCardContainer.find('#catCard')).toHaveLength(3);
});
