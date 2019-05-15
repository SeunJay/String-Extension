let string = require("../extend-string");

let vowelString = 'SEUN';
let vowelString1 = 'seun'
let consonantString = 'sxn';
let capitalizedString = 'SEUN';
let currencyDigits = '11111.11';
let currencyDigits1 = '1111111';
let currencyDigits2 = '111';
let currency = '11,111.11';
let name = 'Mr.Ben';
let figureOfSpeech = 'onomatopoeia';
let stringedNumbers = '325';
let demoString = 'tyu';
let demoString1 = 'wedr5rdd';
let singleDigit = '3';
let doubleDigit = '34'
let question = 'What is your name?';
let question1 = 'is that your bag'

describe('hasVowel method tests', () => {
  it("Should return a true if a string contains a vowel", () => {
    expect(vowelString.hasVowels()).toBeTruthy();
  });

  it("Should return a false if a string contains a vowel", () => {
    expect(consonantString.hasVowels()).toBeFalsy();
  });
});

describe('toUpper method tests', () => {
  it("Should capitalize a given string", () => {
    expect(vowelString.toUpper()).toBe('SEUN');
  });
  
  it("Should return the string if it's already is in uppercase", () => {
    expect(capitalizedString.toUpper()).toBe("SEUN");
  });
});

describe('toLower method test', () => {
  it("Should convert a string to lowercase althrough", () => {
    expect(vowelString.toUpper().toLower()).toBe('seun');
  });
})
  
describe('ucFirst method tests', () => {
  it("Should convert the first character of a string to uppercase", () => {
    expect(vowelString1.ucFirst()).toBe('Seun');
  });
  it("Should 'Already capitalized' if the first character is in uppercase", () => {
    expect(capitalizedString.ucFirst()).toEqual('SEUN');
  });
})
  
describe('isQuestion method tests', () => {
  it("Should return a boolean if a string ends with a question mark", () => {
    expect(question.isQuestion()).toBeTruthy();
  });
  it("Should return a boolean if a string ends with a question mark", () => {
    expect(question1.isQuestion()).toBeFalsy();
  });
})
  

describe('words method test', () => {
  it("Should return an array of words from a string", () => {
    expect(question.words()).toEqual(['What', 'is', 'your', 'name']);
  });
});

describe('wordCount method test', () => {
  it("Should return the number of words in a string", () => {
    expect(question.wordCount()).toBe(4);
  });
  it("Should return zero if it is an empty string", () => {
    expect(''.wordCount()).toBe(0);
  });
});
  
describe('toCurrency method test', () => {
  it('Should return the currency representation of the String', () => {
    expect(currencyDigits.toCurrency()).toBe("11,111.11")
  });
  it('Should return the currency representation of the String', () => {
    expect(currencyDigits1.toCurrency()).toBe("1,111,111")
  });
  it('Should return the currency representation of the String', () => {
    expect(currencyDigits2.toCurrency()).toEqual("111")
  });
  it('Should return the currency representation of the String', () => {
    expect('111111.111'.toCurrency()).toEqual("111,111.111")
  });
});

describe('fromCurrency method test', () => {
  it('Should return a number representation of the currency String', () => {
    expect(currency.fromCurrency()).toBe("11111.11")
  });
});

describe('inverseCase method test', () => {
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(name.inverseCase()).toBe("mR.bEN")
  });
})
  
describe('alternatingCase method test', () => {
  it('Should return each letter of a string as an inverse of its current case', () => {
    expect(figureOfSpeech.alternatingCase()).toBe("oNoMaToPoEiA")
  });
});

describe('numberWords tests', () => {
  it('Should return the number in words', () => {
    expect(stringedNumbers.numberWords()).toBe("three two five");
  });
  it('should return the original string if no number is found', () => {
    expect(demoString.numberWords()).toBe("tyu");
  });
  it('should return the original string even if a number is in between it', () => {
    expect(demoString1.numberWords()).toBe('wedr5rdd');
  });
})
  
describe('isDigit method tests', () => {
  it('Should return true if string is a digit(one number)', () => {
    expect(singleDigit.isDigit()).toBeTruthy();
  });
  it('Should return false if string is more than one digit', () => {
    expect(doubleDigit.isDigit()).toBeFalsy()
  });
})  

