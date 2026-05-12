export const pickFields = (obj = {}, allowedFields = []) => {
  const filteredObject = {};

  for (const key of allowedFields) {
    if (obj[key] !== undefined) {
      filteredObject[key] = obj[key];
    }
  }

  return filteredObject;
};
