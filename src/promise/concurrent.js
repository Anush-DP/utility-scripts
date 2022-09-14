export const concurrentMapAll = (values, mapper, concurrency) => {
  return new Promise((resolve) => {
    let successArr = new Array(values.length);
    if (values.length === 0) return resolve(successArr);
    concurrency = concurrency && typeof concurrency === 'number' && concurrency >= 1 ? concurrency : Infinity;
    const totalValues = values.length;
    const limit = Math.min(totalValues, concurrency);
    let pending = totalValues;
    let pendingIndex = limit;

    const checkQueue = () => {
      if (pending === 0) return resolve(successArr);
      else if (pendingIndex < totalValues) {
        waitForPromise(values[pendingIndex], pendingIndex++);
      }
    };

    const waitForPromise = (value, current) => {
      let promise = value;
      if (!(value instanceof Promise)) promise = Promise.resolve(value);
      promise
        .then((resolvedValue) => mapper(resolvedValue, current))
        .then((finalResolvedValue) => {
          successArr[current] = finalResolvedValue;
          --pending;
          checkQueue();
        });
    };

    for (let i = 0; i < limit; i++) {
      waitForPromise(values[i], i);
    }
  });
};

export const all = (promises) => {
  return new Promise(function (success, fail) {
    let successArr = new Array(promises.length);
    if (promises.length == 0) success(successArr);
    let pending = promises.length;
    promises.forEach(function (promise, i) {
      promise.then(
        function (result) {
          successArr[i] = result;
          pending -= 1;
          if (pending == 0) success(successArr);
        },
        function (error) {
          fail(error);
        }
      );
    });
  });
};
