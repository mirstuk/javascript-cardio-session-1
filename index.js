const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

const isPalindrome = str => str === reverseString(str);

const reverseInt = int =>
  Math.sign(int) * parseInt(reverseString(Math.abs(int).toString()));

const capitalizeLetters = str =>
  str.replace(/\b[a-z]/gi, char => char.toUpperCase());

const maxCharacter = str => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = [];

  str.split('').forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar.pop();
      maxChar.push(char);
    } else if (charMap[char] == maxNum) {
      maxNum = charMap[char];
      maxChar.push(char);
    }
  }
  return maxChar;
};

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('Fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(
  `reverseString('Reverse Hello World!'):\n${reverseString(
    'Reverse Hello World!'
  )}`
);

console.log(
  `'racecar' is palindrome: ${isPalindrome(reverseString('racecar'))}`
);
console.log(`'hello' is palindrome: ${isPalindrome(reverseString('hello'))}`);

console.log(`16240 reversed: ${reverseInt(16240)}`);
console.log(`-12571 reversed: ${reverseInt(-12571)}`);

console.log(
  `'this is javascript' with first letters capitalized: '${capitalizeLetters(
    'this is javascript'
  )}'`
);

console.log(
  `most common letter in 'javascript' is: ${maxCharacter('javascript')}`
);

fizzbuzz();
