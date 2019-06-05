describe("fizzBuzz tests", function() {
    it("should return FizzBuzz if divisible by 3 and 5", function() {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return Fizz if divisible by 3", function() {
        expect(fizzBuzz(9)).toBe("Fizz"); 
    });
    it("should return Buzz if divisible by 5", function() {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    it("should return 17 if number is 17", function() {
        expect(fizzBuzz(17)).toBe(17);
    });
    it("should return Error if not a number", function() {
        expect(fizzBuzz("hello")).toBe("Error");
    });
});