function caesarCipher(str, shift) {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (alphabetLower.includes(char)) {
      const index = alphabetLower.indexOf(char);
      const newIndex = (index + shift) % 26;
      result += alphabetLower[newIndex];
    } else if (alphabetUpper.includes(char)) {
      const index = alphabetUpper.indexOf(char);
      const newIndex = (index + shift) % 26;
      result += alphabetUpper[newIndex];
    } else {
      result += char;
    }
  }

  return result;
}

export default caesarCipher;
