let string = require("../extend-string");
let vowelString = 'seun';
let consonantString = 'sxn';
let capitalizedString = 'SEUN';
let currencyDigits = '11111.11';
let currency = '11,111.11';
let name = 'Mr.Ben';
let figureOfSpeech = 'onomatopoeia';
let stringedNumbers = '325';
let demoString = 'tyu';
let singleDigit = '3';
let doubleDigit = '34'
let question = 'What is your name?';
let question1 = 'is that your bag'

describe("Extended String-methods", () => {
  it("Should return a true if a string contains a vowel", () => {
    expect(vowelString.hasVowels()).toBeTruthy();
  });
  it("Should return a false if a string contains a vowel", () => {
    expect(consonantString.hasVowels()).toBeFalsy();
  });
  it("Should capitalize a given string", () => {
    expect(vowelString.toUpper()).toBe('SEUN');
  });
  it("Should 'Already Capitalized' if the string is in uppercase", () => {
    expect(capitalizedString.toUpper()).toBe("SEUN");
  });
  it("Should convert a string to lowercase althrough", () => {
    expect(vowelString.toUpper().toLower()).toBe('seun');
  });
  
  it("Should convert the first character of a string to uppercase", () => {
    expect(vowelString.ucFirst()).toBe('Seun');
  });
  it("Should 'Already capitalized' if the first character is in uppercase", () => {
    expect(capitalizedString.ucFirst()).toBe('Already capitalized');
  });
  it("Should return a boolean if a string ends with a question mark", () => {
    expect(question.isQuestion()).toBeTruthy();
  });
  it("Should return a boolean if a string ends with a question mark", () => {
    expect(question1.isQuestion()).toBeFalsy();
  });
  it("Should return an array of words from a string", () => {
    expect(question.words()).toEqual(['What', 'is', 'your', 'name']);
  });
  it("Should return the number of words in a string", () => {
    expect(question.wordCount()).toBe(4);
  });
  it('Should return the currency representation of the String', () => {
    expect(currencyDigits.toCurrency()).toBe("11,111.11")
  });
  it('Should return a number representation of the currency String', () => {
    expect(currency.fromCurrency()).toBe("11111.11")
  });
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(name.inverseCase()).toBe("mR.bEN")
  });
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(figureOfSpeech.alternatingCase()).toBe("oNoMaToPoEiA")
  });
  it('Should return the number in words', () => {
    expect(stringedNumbers.numberWords()).toBe("three two five");
    expect(demoString.numberWords()).toBe("No match found")
  });
  it('Should return true if string is a digit(one number)', () => {
    expect(singleDigit.isDigit()).toBeTruthy();
    expect(doubleDigit.isDigit()).toBeFalsy()
  })
})