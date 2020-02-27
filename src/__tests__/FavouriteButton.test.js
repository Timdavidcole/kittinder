import FavouriteButton from "../Components/CatCard/FavouriteButton";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
import agent from "../agent";

beforeEach(() => {
  agent.Favourites.post.mockImplementation(() => {
    return Promise.resolve([{ message: "Completed" }]);
  });
});

test("checks Index snapshot", async () => {
  const favouriteButton = await renderer.create(<FavouriteButton />);

  let tree = favouriteButton.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Onclick calls API successfully", async () => {
  const wrapper = await mount(<FavouriteButton userId={1} imageId={1} />);
  wrapper.find("button").simulate("click");
  expect(agent.Favourites.post).toBeCalled();
});

test("CatCard has correct breeds array from API call", async () => {
  agent.Favourites.post.mockImplementation(() => {
    return Promise.reject(new Error("fail"));
  });

  const wrapper = await shallow(<FavouriteButton />);
  wrapper.find("button").simulate("click");
  expect(agent.Favourites.post).toBeCalled();
  return Promise.reject(new Error("fail"))
    .then(() => {})
    .catch(() => {
      expect(wrapper.update().state("error")).toBe(true);
    });
});
