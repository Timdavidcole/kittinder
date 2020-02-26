import Index from "../Components/Main/Index";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");

test("checks Index snapshot", () => {
  const index = renderer.create(<Index />);

  let tree = index.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatCard has correct breeds array from API call", async () => {
  const wrapper = await shallow(<Index />);
  expect(wrapper.state("cats")).toEqual(["Cat1", "Cat2", "Cat3"]);
});
