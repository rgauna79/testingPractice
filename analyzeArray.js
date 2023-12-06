function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.lenght === 0) {
    return 'Invalid input: not an array or empty array';
  }
  const result = {
    length: arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    sum: arr.reduce((acc, val) => acc + val, 0),
    avg: arr.reduce((acc, val) => acc + val, 0) / arr.length,
  }

    return result
}

export default analyzeArray;