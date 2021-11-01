export const makeEnumArray = (enumObject) => {
  const all = [];

  for (const key in enumObject) {
    all.push(enumObject[key]);
  }
  return all;
};
