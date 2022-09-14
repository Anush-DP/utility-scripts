import cloneDeep from 'clone-deep';
import { difference } from './src/diff.js';
import { flattenObject } from './src/flattenObject.js';
import { serialAll, serialMapAll } from './src/promise/series.js';
import { concurrentMapAll, all } from './src/promise/concurrent.js';
import { isObjectEmpty } from './src/isObjectEmpty.js';
import { waitForJob } from './src/waitForJob.js';

export default {
  cloneDeep,
  difference,
  getISTDate: new Date().toLocaleDateString('en-IN'),
  getISTDateTime: new Date().toLocaleString('en-IN'),
  concurrentMapAll,
  all,
  serialAll,
  serialMapAll,
  flattenObject,
  isObjectEmpty,
  waitForJob,
};
