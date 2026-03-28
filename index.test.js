const sum = require('./index');

// Test case for the sum function to check if it adds two numbers correctly
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
