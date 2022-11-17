import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  // gets the entire location object and retrieves first "result"
  //const location = result.results[0];
  //console.log(location);

  //get geometry property from results array and initializes to object
  const { geometry = {} } = result.results[0];
  //get latitude and longitude values from "location" property in geometry object
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
