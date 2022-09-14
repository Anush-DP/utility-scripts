export const serialMapAll = async (values, mapper) => {
  const responses = [];
  for (let i = 0; i < values.length; ++i) {
    let resolvedValue = values[i];
    if (values[i] instanceof Promise) resolvedValue = await values[i];
    const response = await mapper(resolvedValue, i);
    responses.push(response);
  }
  return responses;
};

export const serialAll = (promises) => serialMapAll(promises, (promise) => promise);
