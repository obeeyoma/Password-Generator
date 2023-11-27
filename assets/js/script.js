// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    var upperCaseChoice = getUpperCasedOption();
  var lowerCaseChoice = getLowerCasedOption();
  var specialCharacterChoice = getSpecialCharacterOption();
  var numericCharacterChoice = getNumericCharacterOption();

  var combinedCharactersArr = [];
  

    if (!upperCaseChoice && !lowerCaseChoice && !specialCharacterChoice && !numericCharacterChoice)
  {
    alert("You must choose at least one character set. Please try again later.");
    combinedCharactersArr = [];
    return;
  } else
  {

      if (upperCaseChoice == true) {
        combinedCharactersArr = combinedCharactersArr.concat(upperCasedCharacters);
      }

      if (lowerCaseChoice == true)
      {
        combinedCharactersArr = combinedCharactersArr.concat(lowerCasedCharacters);
      }

      if (specialCharacterChoice  == true) {
        combinedCharactersArr = combinedCharactersArr.concat(specialCharacters);
      }

      if(numericCharacterChoice == true) {
        combinedCharactersArr = combinedCharactersArr.concat(numericCharacters);
      }
  }
  return combinedCharactersArr;

}

// Function for getting a random element from an array
function getRandom(arr) {
var selectedCharcters = "";
  selectedCharcters+= arr[Math.floor(Math.random() * arr.length)];
  return selectedCharcters;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Function declarations to get password options
function getPasswordLength() {
  var passwordLengthOption = prompt("How many characters would you like your password to have? Choose between 8 to 128 characters.");
  return passwordLengthOption;
}

function getUpperCasedOption() {
  var upperCasedOption = confirm("Would you like to include upper case letters?")
  return upperCasedOption;
  }

  function getLowerCasedOption() {
  var lowerCasedOption = confirm("Would you like to include lower case letters?")
  return lowerCasedOption;
  }

function getSpecialCharacterOption() {
  var specialCharacterOption = confirm("Would you like to include special characters?")
  return specialCharacterOption;
  }

  function getNumericCharacterOption() {
  var numericCharacterOption = confirm("Would you like to include numbers?")
  return numericCharacterOption;
}
