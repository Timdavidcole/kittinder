import CatFavouriteCard from "../Components/Favourites/CatFavouriteCard";
import React from "react";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
import agent from "../agent";

const breed = {
  name: "test",
  description: "test cat",
  id: "1234"
};

test("checks is creates a card, and no error", async () => {
  agent.Images.get.mockImplementation(() => {
    return Promise.resolve(["test"]);
  });
  const catFavouritesCard = await shallow(
    <CatFavouriteCard userId={"123"} cat={breed} key={1} id={1} />
  );
  expect(agent.Images.get).toBeCalled();
  await catFavouritesCard.instance().hasFinishedAsync;
  expect(catFavouritesCard.state("image")).toBe("test");
  expect(catFavouritesCard.find("#catFavouriteCard").text()).not.toContain(
    "This cat doesn't like having it's picture shown right now, please try again later."
  );
  expect(catFavouritesCard.find("#catFavouriteCard").text()).toBe(
    "testtest cat"
  );
});

test("shows error if Images.get api call fails", async () => {
  agent.Images.get.mockImplementation(() => {
    return Promise.reject(new Error("error"));
  });
  const catFavouritesCard = await shallow(
    <CatFavouriteCard userId={"123"} cat={breed} key={1} id={1} />
  );
  expect(agent.Images.get).toBeCalled();
  await catFavouritesCard.instance().hasFinishedAsync;
  expect(catFavouritesCard.find("#catFavouriteCard").text()).toBe(
    "testThis cat doesn't like having it's picture shown right now, please try again later.test cat"
  );
});
