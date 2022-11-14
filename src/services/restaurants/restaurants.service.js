import { mocks, mockImages } from "./mock";
//take in location param - default set to san francisco
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
  //console.log(JSON.stringify(mocks[location], null, 2));
};

export const restaurantsTransform = ({ results = [] }) => {
  let closedBusiness = [];
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    //checking for temporarily closed businesses here
    /*closedBusiness.push(
      ...(restaurant.business_status === "CLOSED_TEMPORARILY"
        ? [restaurant.name]
        : [])
    );*/

    return {
      //modify the restaurant object by adding two new properties
      ...restaurant,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  //console.log(JSON.stringify(mappedResults, null, 2));
  //console.log(closedBusiness);
  return mappedResults;
};
