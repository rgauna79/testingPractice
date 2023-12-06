function reverseString(str) {
  return str.replace(/\s/g, "").split('').reverse().join('');
}



export default reverseString;