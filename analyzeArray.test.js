import analyzeArray from './analyzeArray';

test('analyzeArray', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    length: 5,
    min: 1,
    max: 5,
    sum: 15,
    avg: 3,
  });
});
  
  