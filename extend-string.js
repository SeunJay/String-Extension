String.prototype.hasVowels = function() {
  let regEx = /[aeiou]/g;
  return regEx.test(this)? true : false
}