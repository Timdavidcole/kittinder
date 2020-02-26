import CatCard from '../Components/CatCard/CatCard';
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'



const testCat = { name: "test cat", description: "I'm a test cat" }

test('CatCard renders', () => {
  const catCard = renderer.create(
    <CatCard cat={testCat} />,
  );
  let tree = catCard.toJSON();
  expect(tree).toMatchSnapshot();
});

test('shows the children when the checkbox is checked', () => {
  render(<CatCard cat={testCat} />)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})