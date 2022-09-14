import { difference } from '../src/diff.js';

const originalObject = {
  foo: 'bar',
  baz: 'fizz',
  cool: true,
  what: {
    one: 'one',
    two: 'two',
  },
  wow: {
    deep: {
      key: ['a', 'b', 'c'],
      values: '123',
    },
  },
  array: ['lol', 'hi', 'there'],
};

const newObject = {
  foo: 'bar',
  baz: 'fizz',
  cool: false, // <-- diff
  what: {
    one: 'one',
    two: 'twox', // <-- diff
  },
  wow: {
    deep: {
      key: ['x', 'y', 'c'], // <-- diff
      values: '098', // <-- diff
    },
  },
  array: ['lol', 'hi', 'difference'], // <-- diff
};

const expectedDiff = {
  cool: false,
  what: { two: 'twox' },
  wow: { deep: { key: ['x', 'y'], values: '098' } },
  array: ['difference'],
};

describe('Diff', () => {
  it('Should return correct object diff', () => {
    const output = difference(originalObject, newObject);
    expect(output).toEqual(expectedDiff);
  });
});
