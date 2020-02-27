import CatFavouritesContainer from "../Components/Favourites/CatFavouritesContainer";
import React from "react";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
import agent from "../agent";

const testCat = {
  id: "test",
  breeds: ["test"],
  name: "testcat",
  description: "Just a test cat"
};

const testCat2 = {
    id: "test2",
    breeds: ["test2"],
    name: "testcat2",
    description: "Just a test cat2"
  };

beforeEach(() => {
  agent.Images.getOne.mockImplementation(() => {
    return Promise.resolve(testCat);
  });
  agent.Favourites.get.mockImplementation(() => {
    return Promise.resolve([testCat, testCat2]);
  });
});

test("checks is creates multiple CatFavouriteCards", async () => {
  const catFavouritesContainer = await shallow(
    <CatFavouritesContainer userId={123} />
  );
  expect(agent.Favourites.get).toBeCalled();
  expect(agent.Images.getOne).toBeCalled();
  await catFavouritesContainer.instance().hasFinishedAsync;

  expect(catFavouritesContainer.state().favourites[0]).toBe(testCat);
  expect(catFavouritesContainer.find("CatFavouriteCard")).toHaveLength(2);
});
