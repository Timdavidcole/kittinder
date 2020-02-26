import Index from "../Components/Main/Index";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");

test("checks Index snapshot", () => {
  const catCard = renderer.create(<Index />);

  let tree = catCard.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatCard has correct breeds array from API call", done => {
  const wrapper = mount(<Index />);
  setImmediate(() => {
    expect(wrapper.state('cats')).toEqual(["Cat1", "Cat2", "Cat3"]);
    done();
  });
});
