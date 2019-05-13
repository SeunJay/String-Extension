/* Checks for vowel(s) in a string */
String.prototype.hasVowels = function() {
  let regEx = /[aeiou]/g; // pattern to search for vowels 
  return regEx.test(this)? true : false
}

/* Converts each string character to uppercase */
String.prototype.toUpper = function() {
  let result = ''; // empty string variable to store result
  for(index = 0; index < this.length; index++){ 
    let characterCode = this.charCodeAt(index); // get the character code of each character
    if(characterCode >= 97 && characterCode <= 122){ //check if character code is in lowercase using ascii code
      characterCode -= 32 // subtract 32 from the character code to get its uppercase equivalent code
    } 
    result += String.fromCharCode(characterCode); //appending each of the transformed character to the result variable
  }
  return result // return the 
}

/* Converts each string character to lowercase */
String.prototype.toLower = function() {
  let result = ''; // empty string variable to store result
  for(index = 0; index < this.length; index++){ 
    let characterCode = this.charCodeAt(index); // get the character code of each character
    if(characterCode >= 65 && characterCode <= 90){ //check if character code is in uppercase using ascii code
      characterCode += 32 // add 32 to the character code to get its lowercase equivalent code
    } 
    result += String.fromCharCode(characterCode); //appending each of the transformed character to the result variable
  }
  return result
};

/* Converts first letter of a string to uppercase */
String.prototype.ucFirst = function() {
  if(/[A-Z]/.test(this)) return 'First character already capitalized'
  return this.charAt(0).toUpper() + this.slice(1) //converts first letter to upper and joins it to the rest of the string characters
}

/* Checks if a string is a question */
String.prototype.isQuestion = function() {
  let regEx = /\w+\?$/g; // pattern to search for strings ending with ?
  return regEx.test(this)? true: false
}

/* Pulls out all the words in a string */
String.prototype.words = function() {
  let regEx = /[\w-]+/g; // pattern to match a word(s)
  return this.match(regEx);
}

/* Counts all the words in a string */
String.prototype.wordCount = function() {
  return this.words().length // gets the number of words in string
}


/*Gets currency representation of a string*/
String.prototype.toCurrency = function() {
  let regEx = /\d(?=\d{3}\.)/g; //pattern to match digit immediately followed by 3 digits
  let regSeperator = '$&,';
  return this.replace(regEx, regSeperator) //replace matched result with specified seperator
}


/*Gets integer from currency*/
String.prototype.fromCurrency = function() {
  let regEx = /,/g; //pattern to match the character ","
  let replacer = '';
  return this.replace(regEx, replacer) //replace the matched result with an empty string
}


/* Converts each letter of a string to the inverse of its case */
String.prototype.inverseCase = function() {
  var result = ''; //empty string to store result
  var i = 0;
  while(i < this.length){
    var char = this.charAt(i); //string character of the current iteration
    if(/[A-Z]/.test(char)){
      char = char.toLower(); //converts to lowercase
    } else {
      char = char.toUpper()  //converts to uppercase
    }
    i++
    result += char //append each transformed character to result variable
  }
  return result
}


/* Converts a string to alternating cases */
String.prototype.alternatingCase = function() {
  var chars = this.toLower().split(''); //split the string in lowercase
  for(i = 0; i < chars.length; i++){
    if(i % 2 !== 0) {
      chars[i] = chars[i].toUpper(); //convert current letter to uppercase
    } else {
      chars[i] = chars[i].toLower()  //convert current letter to lowercase
    }
  }
  return chars.join('') 
}


/* Converts numbers to its words equivalent */
String.prototype.numberWords = function() {
  let result = [];
  let regEx = /\d/g; //pattern to match all digits
  let splittedNumbers = this.split('');
  let possibleWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(this.match(regEx)) {
    for(index = 0; index < splittedNumbers.length; index++){
      result.push(possibleWords[splittedNumbers[index]]); //append word equivalent of the current digit to result array
    }
    return result.join(' ');
  } else {
    return 'No match found'
  }
};


/*Checks if a string is a digit*/
String.prototype.isDigit = function() {
  let regEx = /^[\d?]$/; //pattern to match at most a single digit
  return regEx.test(this) ? true : false
}