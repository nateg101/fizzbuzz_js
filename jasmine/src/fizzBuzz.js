function fizzBuzz() {

  fizzBuzz.prototype.play = function(number) {
    if (number % 3  === 0) {
      return 'fizz';
    } else if (number % 5 === 0) {
      return 'buzz';
    }
  }
};
