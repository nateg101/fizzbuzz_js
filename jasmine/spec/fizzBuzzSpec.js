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
});
