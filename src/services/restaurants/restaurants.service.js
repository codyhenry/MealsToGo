import { mocks, mockImages } from "./mock";
//take in location param - default set to san francisco
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  //let closedBusiness = [];
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      //modify the restaurant object by adding two new properties
      ...restaurant,
      //api returns "vicinity" attribute with the address info
      address: restaurant.vicinity,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return mappedResults;
};
