// This module defines the pickFields function, which is a utility function that takes an object and an array of allowed field names, and returns a new object containing only the key-value pairs from the original object that match the allowed field names. This is useful for filtering out unwanted fields from an object, such as when processing user input or preparing data for output.

export const pickFields = (obj = {}, allowedFields = []) => {
  const filteredObject = {};

  for (const key of allowedFields) {
    if (obj[key] !== undefined) {
      filteredObject[key] = obj[key];
    }
  }

  return filteredObject;
};
