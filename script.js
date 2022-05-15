var characterlength = 8;
var chooseArr = [];
var lowercaseArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var uppercaseArr = ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialcharArr = ['!', '@', '&', '#', '$', '*', '+', '/', '>'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function showPrompts() {
  characterlength = parseInt(prompt("How long do you want your password? (8 - 128 characters"));

  if (characterlength < 8 || characterlength > 128) {
    alert("character length has to be 8 - 128 digits. Try again");
    return false;
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    chooseArr = chooseArr.concat(uppercaseArr);
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    chooseArr = chooseArr.concat(lowercaseArr);
  }

  if (confirm("Would you like special characters in your password?")) {
    chooseArr = chooseArr.concat(specialcharArr);
  }

  if (confirm("Would you like numbers in your password?")) {
    chooseArr = chooseArr.concat(numberArr);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = showPrompts();

  if (correctPropmpts) {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i <characterlength; i++) {
    var randomIndex = Math.floor(math.random() * chooseArr.length);
    password = password + chooseArr[randomIndex]
  }
  return password;
}