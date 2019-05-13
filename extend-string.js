String.prototype.hasVowels = function() {
  let regEx = /[aeiou]/g;
  return regEx.test(this)? true : false
}

String.prototype.toUpper = function() {
  let result = '';
  for(index = 0; index < this.length; index++){
    let characterCode = this.charCodeAt(index);
    if(characterCode >= 97 && characterCode <= 122){
      characterCode -= 32
    } 
    result += String.fromCharCode(characterCode);
  }
  return result
}

String.prototype.toLower = function() {
  let result = '';
  for(index = 0; index < this.length; index++){
    let characterCode = this.charCodeAt(index);
    if(characterCode >= 65 && characterCode <= 90){
      characterCode += 32
    } 
    result += String.fromCharCode(characterCode);
  }
  return result
};

String.prototype.ucFirst = function() {
  if(/[A-Z]/.test(this)) return 'Already capitalized'
  return this.charAt(0).toUpper() + this.slice(1)
}

String.prototype.isQuestion = function() {
  let regEx = /\w+\?$/g;
  return regEx.test(this)? true: false
}

String.prototype.words = function() {
  let regEx = /\b[\w-]+\b/g;
  return this.match(regEx);
}

String.prototype.wordCount = function() {
  return this.words().length
}

String.prototype.toCurrency = function() {
  let regEx = /\d(?=\d{3}\.)/g;
  let regSeperator = '$&,';
  return this.replace(regEx, regSeperator)
}

String.prototype.fromCurrency = function() {
  let regEx = /,/g;
  let replacer = '';
  return this.replace(regEx, replacer)
}

String.prototype.inverseCase = function() {
  var result = '';
  var i = 0;
  while(i < this.length){
    var char = this.charAt(i);
    if(/[A-Z]/.test(char)){
      char = char.toLower();
    } else {
      char = char.toUpper()
    }
    i++
    result += char
  }
  return result
}

String.prototype.alternatingCase = function() {
  var chars = this.toLower().split('');
  for(i = 0; i < chars.length; i++){
    if(i % 2 !== 0) {
      chars[i] = chars[i].toUpper();
    } else {
      chars[i] = chars[i].toLower()
    }
  }
  return chars.join('')
}

String.prototype.numberWords = function() {
  let result = [];
  let regEx = /\d/g;
  let splittedNumbers = this.split('');
  let possibleWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(this.match(regEx)) {
    for(index = 0; index < splittedNumbers.length; index++){
      result.push(possibleWords[splittedNumbers[index]]);
    }
    return result.join(' ');
  } else {
    return 'No match found'
  }
};

String.prototype.isDigit = function() {
  let regEx = /^[\d?]$/;
  return regEx.test(this) ? true : false
}