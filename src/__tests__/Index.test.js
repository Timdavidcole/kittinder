import Index from "../Components/Main/Index";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
import agent from "../agent";
jest.mock("../Components/CatCard/CatCardContainer");

beforeEach(() => {
  agent.Breeds.all.mockImplementation(() => {
    return Promise.resolve([
      { id: "test", name: "testcat", description: "Just a test cat" }
    ]);
  });
});

test("checks Index snapshot", async () => {
  const index = await renderer.create(<Index />);

  let tree = index.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatCard has correct breeds array from API call", async () => {
  const wrapper = await shallow(<Index />);
  expect(wrapper.state("cats")).toEqual([
    { id: "test", name: "testcat", description: "Just a test cat" }
  ]);
});

test("CatCard has correct breeds array from API call", async () => {
  agent.Breeds.all.mockImplementation(() => {
    return Promise.reject(new Error("fail"));
  });

  const wrapper = await shallow(<Index />);
  expect(wrapper.text()).toBe(
    "The cats are a bit shy right now, please try again later."
  );
});
