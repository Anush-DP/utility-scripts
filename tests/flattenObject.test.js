import { flattenObject } from '../src/flattenObject.js';

const inputObject = {
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

const expectedOutput = {
  foo: 'bar',
  baz: 'fizz',
  cool: true,
  what_one: 'one',
  what_two: 'two',
  wow_deep_key: ['a', 'b', 'c'],
  wow_deep_values: '123',
  array: ['lol', 'hi', 'there'],
};

describe('Flatten Object', () => {
  beforeEach(() => {});

  it('Should return correct flattened object', () => {
    const output = flattenObject(inputObject);
    expect(output).toEqual(expectedOutput);
  });
});
