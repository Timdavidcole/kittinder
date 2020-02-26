const Breeds = {
    all: (query) => requests.get(`breeds`, query)
  };
  
  const Images = {
    all: () => requests.get(`images/search`),
    get: query => {
       return Promise.resolve([{ url: 'test' }])
    }
  };
  
  export default {Breeds, Images};