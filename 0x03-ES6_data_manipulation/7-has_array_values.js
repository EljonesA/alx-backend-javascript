export default function hasValuesFromArray(set, array) {
  let foundAll = true;
  array.forEach(element => {
    if (!set.has(element)) {
      foundAll = false;
    }
  });

  return foundAll;
}
