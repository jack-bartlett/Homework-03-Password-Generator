
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// write function to generate the password and declare the variables
  function generatePassword() {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialCharacters = ['!','@','#','$','%','^','&','*','_','-','+','=','<','>','?',':'];
    var userGuess = [];
    var createdGuess = '';

  // give each input a prompt("")
  // confirm whether or not the user wants to include lowercase letters. If the user confirms to the use of lowercase letters, then lowercase letters will be added to the userGuess string.
  var lowerCaseLetters = confirm('Do you want to Confirm the use of lower case letters?');
  if (lowerCaseLetters) {
    userGuess = userGuess.concat(lowerCase);
  };

  // confirm whether or not the user wants to include uppercase letters. If the user confirms to the use of uppercase letters, then uppercase letters will be added to the userGuess string.
  var upperCaseLetters = confirm('Do you want to Confirm the use of upper case letters?');
  if (upperCaseLetters) {
    userGuess = userGuess.concat(upperCase);
  };

  // confirm whether or not the user wants to include numeric values. If the user confirms to the use of numeric values, then numeric values will be added to the userGuess string.
  var numericValue = confirm('Do you want to Confirm the use of numeric values?');
  if (numericValue) {
    userGuess = userGuess.concat(numbers);
  };

  // confirm whether or not the user wants to include special characters. If the user confirms to the use of special characters, then special characters will be added to the userGuess string.
  var specialChar = confirm('Do you want to Confirm the use of special characters?');
  if (specialChar) {
    userGuess = userGuess.concat(specialCharacters);
  };

  // Creates a prompt for the length of the password
  var passwordLength = prompt("Your password must be a length of at least 8 characters and no more than 128 characters");
  
  // Runs the loop as long as the number is >=8 && <=128
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
      createdGuess += userGuess[
        Math.floor(Math.random() * userGuess.length)];
    };
  }else {
    alert('Your password must be a length of at least 8 characters and no more than 128 characters');
  };

  return createdGuess;
  };


