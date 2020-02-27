import Favourites from "../Components/Favourites/Favourites";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
import agent from "../agent";

beforeEach(() => {
  agent.Breeds.all.mockImplementation(() => {
    return Promise.resolve([
      { id: "test", name: "testcat", description: "Just a test cat" }
    ]);
  });
  agent.Favourites.get.mockImplementation(() => {
    return Promise.resolve([
      { id: "test", name: "testcat", description: "Just a test cat" }
    ]);
  });
});

test("checks Favourites snapshot", async () => {
  const favourites = await renderer.create(<Favourites />);

  let tree = favourites.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Favourites has correct breeds array from API call", async () => {
  const wrapper = await mount(<Favourites />);
  expect(agent.Breeds.all).toBeCalled();
  await wrapper.instance().hasFinishedAsync;
  wrapper.setProps({ cats: "TEST" });
  expect(wrapper.find("Favourites").props()).toEqual({ cats: "TEST" });
});

test("Favourites shows correct error message on API catch", async () => {
  agent.Breeds.all.mockImplementation(() => {
    return Promise.reject(new Error("fail"));
  });

  const wrapper = await shallow(<Favourites />);
  expect(wrapper.text()).toBe(
    "Hmmm, we can't find your favourites.  Please try again later."
  );
});
