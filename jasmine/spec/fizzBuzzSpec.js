describe("fizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  describe('multiples of 3', function() {
    it("should return fizz when divisible by 3", function() {
      expect(fizzbuzz.play(3)).toEqual('fizz')
     });
  });

  describe('multiples of 5', function(){
    it('returns buzz when divisible by 5', function() {
      expect(fizzbuzz.play(5)).toEqual('buzz')
    });
  });

  describe('multiples of both 3 and 5', function(){
    it('returns fizzbuzz when divisible by both 3 and 5', function() {
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz')
    });
  });

  describe('returns number if not divisible by 3 or 5', function(){
    it('returns the number', function(){
      expect(fizzbuzz.play(2)).toEqual(2)
    });
  });
});
