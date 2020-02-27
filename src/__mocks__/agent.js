const Breeds = {
  all: jest.fn()
};

const Images = {
  get: jest.fn(),
  getOne: jest.fn()
};

const Favourites = {
  get: jest.fn(),
  post: jest.fn()
};

export default { Breeds, Images, Favourites };
