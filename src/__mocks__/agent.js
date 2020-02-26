const Breeds = {
  all: query => {
    return Promise.resolve(["Cat1", "Cat2", "Cat3"]);
  }
};

const Images = {
  all: () => requests.get(`images/search`),
  get: query => {
    return Promise.resolve([{ url: "testURL" }]);
  }
};

export default { Breeds, Images };
