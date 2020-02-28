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

test("checks is creates multiple CatFavouriteCards", async () => {
  agent.Images.getOne.mockImplementation(() => {
    return Promise.resolve(testCat);
  });
  agent.Favourites.get.mockImplementation(() => {
    return Promise.resolve([testCat, testCat2]);
  });
  const catFavouritesContainer = await shallow(
    <CatFavouritesContainer userId={123} />
  );
  expect(agent.Favourites.get).toBeCalled();
  expect(agent.Images.getOne).toBeCalled();
  await catFavouritesContainer.instance().hasFinishedAsync;
  expect(catFavouritesContainer.state().favourites[0]).toBe(testCat);
  expect(catFavouritesContainer.find("CatFavouriteCard")).toHaveLength(2);
});

test("shows error if Favourites.get api call fails", async () => {
  agent.Favourites.get.mockImplementation(() => {
    return Promise.reject(new Error("error"));
  });
  const catFavouritesContainer = await shallow(
    <CatFavouritesContainer userId={123} />
  );
  expect(agent.Favourites.get).toBeCalled();
  await catFavouritesContainer.instance().hasFinishedAsync;
  expect(catFavouritesContainer.find("#errorCard").text()).toEqual(
    "Hmmm, we can't find your favourites. Please try again later."
  );
});

test("shows error if Images.getOne api call fails", async () => {
  agent.Images.getOne.mockImplementation(() => {
    return Promise.reject(new Error("error"));
  });
  agent.Favourites.get.mockImplementation(() => {
    return Promise.resolve([testCat, testCat2]);
  });
  const catFavouritesContainer = await shallow(
    <CatFavouritesContainer userId={123} />
  );
  expect(agent.Favourites.get).toBeCalled();
  expect(agent.Images.getOne).toBeCalled();
  await catFavouritesContainer.instance().hasFinishedAsync;
  await catFavouritesContainer.instance().hasFinishedAsync;
  expect(catFavouritesContainer.find("#errorCard").text()).toEqual(
    "Hmmm, we can't find your favourites. Please try again later."
  );
});
