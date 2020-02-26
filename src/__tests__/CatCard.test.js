import CatCard from "../Components/CatCard/CatCard";
import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../agent");
const testCat = { name: "test cat", description: "I'm a test cat" };
test("checks CatCard snapshot", () => {
  const catCard = renderer.create(<CatCard cat={testCat} />);

  let tree = catCard.toJSON();
  expect(tree).toMatchSnapshot();
});

test("CatCard has correct text", () => {
  render(<CatCard cat={testCat} />);

  expect(screen.queryByText(testCat.description)).toBeInTheDocument();
  expect(screen.queryByText(testCat.name)).toBeInTheDocument();
});

test("CatCard has correct image url", done => {
  const wrapper = mount(<CatCard cat={testCat} />);
  setImmediate(() => {
    expect(wrapper.state().image).toBe("test");
    done();
  });
});
