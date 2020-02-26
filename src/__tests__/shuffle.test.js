import shuffle from '../Models/shuffle';

test('shuffles an array', () => {
  const array = [1, 2, 3]
  const shuffledArray = shuffle(array)
  expect(shuffledArray).toContain(1);
  expect(shuffledArray).toContain(2);
  expect(shuffledArray).toContain(3);
});