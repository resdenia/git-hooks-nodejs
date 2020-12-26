const mult = require('../src/mult');

it('test multiple function', () => {
  const result = mult(2, 3);
  expect(result).toBe(6);
});
