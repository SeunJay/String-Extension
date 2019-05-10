let string = require("../extend-string");
let demoString = 'seun';

describe("Extended String-methods", () => {
  it("Should return a boolean if a string contains a vowel", () => {
    expect(demoString.hasVowels()).toBeTruthy();
  })
})