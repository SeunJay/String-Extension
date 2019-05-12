let string = require("../extend-string");
let demoString = 'seun';
let demoString1 = 'sxn';
let demoString2 = 'SEUN';
let demoString3 = 'Seun';
let demoString4 = '11111.11'
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
    expect(demoString2.toUpper()).toBe("Aready Capitalized");
  });
  it("Should convert a string to lowercase althrough", () => {
    expect(demoString.toUpper().toLower()).toBe('seun');
  });
  it("Should 'Already in lowercase' if the string is in lowercase", () => {
    expect(demoString.toLower()).toBe("Already in lowercase");
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
    expect(demoString4.toCurrency()).toBe("11111.11")
  })
})