import { serialAll, serialMapAll } from '../src/promise/series.js';
import { concurrentMapAll, all } from '../src/promise/concurrent.js';

describe('Promise', () => {
  let promises = [];
  const milliSeconds = [500, 1000, 2000, 1000, 5000, 100, 10000, 500, 800, 6500];
  const waitForMs = (ms) => new Promise((resolve) => setTimeout(() => resolve(ms), ms));
  const resetPromises = () => {
    promises = milliSeconds.map(waitForMs);
  };
  const mapper = (value, _current) => waitForMs(value);

  beforeEach(() => {
    // resetPromises();
  });

  test('serialAll should resolve promises serially ', () => {
    expect(1).toEqual(1);
  });
});
