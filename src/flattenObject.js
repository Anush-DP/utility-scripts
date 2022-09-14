/**
 * It takes an object and returns a new object with all the keys flattened
 * @param obj - The object to flatten
 * @param parent - The parent key of the current object.
 * @param [res] - The result object that will be returned.
 * @returns A flattened object.
 */
export const flattenObject = (obj, parent, res = {}) => {
  for (let key in obj) {
    let propName = parent ? parent + '_' + key : key;
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};
