let string = require("../extend-string");
let demoString = 'seun';
let demoString1 = 'sxn';
let demoString2 = 'SEUN';
let demoString3 = 'Seun';
let demoString4 = '11111.11';
let demoString5 = '11,111.11';
let demoString6 = 'Mr.Ben';
let demoString7 = 'onomatopoeia';
let demoString8 = '325';
let demoString9 = 'tyu'
let question = 'What is your name?';
let question1 = 'is that your bag'

describe("Extended String-methods", () => {
  it("Should return a true if a string contains a vowel", () => {
    expect(demoString.hasVowels()).toBeTruthy();
  });
  it("Should return a false if a string contains a vowel", () => {
    expect(demoString1.hasVowels()).toBeFalsy();
  });
  it("Should capitalize a given string", () => {
    expect(demoString.toUpper()).toBe('SEUN');
  });
  it("Should 'Already Capitalized' if the string is in uppercase", () => {
    expect(demoString2.toUpper()).toBe("SEUN");
  });
  it("Should convert a string to lowercase althrough", () => {
    expect(demoString.toUpper().toLower()).toBe('seun');
  });
  
  it("Should convert the first character of a string to uppercase", () => {
    expect(demoString.ucFirst()).toBe('Seun');
  });
  it("Should 'Already capitalized' if the first character is in uppercase", () => {
    expect(demoString3.ucFirst()).toBe('Already capitalized');
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
    expect(demoString4.toCurrency()).toBe("11,111.11")
  });
  it('Should return a number representation of the currency String', () => {
    expect(demoString5.fromCurrency()).toBe("11111.11")
  });
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(demoString6.inverseCase()).toBe("mR.bEN")
  });
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(demoString7.alternatingCase()).toBe("oNoMaToPoEiA")
  });
  it('Should return the number in words', () => {
    expect(demoString8.numberWords()).toBe("three two five");
    expect(demoString9.numberWords()).toBe("No match found")
  });
  it('Should return true if string is a digit(one number)', () => {
    expect(demoString10.isDigit()).toBeTruthy()
  })
})