import { mocks } from "./mock";
//take in location param - default set to san francisco
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
  //console.log(JSON.stringify(mocks[location], null, 2));
};
restaurantRequest()
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.log(error);
  });
