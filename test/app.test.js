const { sum, isPalindrome } = require('../src/app');
const { fromEuroToDollar, fromEuroToJapanYen, fromEuroToBritish, oneEuroIs } = require('../src/app');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
// we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);

});

test('adds 2 integer and the result is valid', () => {
    let number1 = getRandomInt(1);
    let number2 = getRandomInt(1);
    let total = sum(number1, number2);

    expect(total).toBe(number1 + number2);
});

describe('isPalindrome function', () => {
    beforeAll(() => {
        console.log('Starting tests for isPalindrome function...');
    });

    // Positive test cases
    test('should return true for a single character', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    test('should return true for a string with same characters', () => {
        expect(isPalindrome('aaaa')).toBe(true);
    });

    test('should return true for a palindrome word', () => {
        expect(isPalindrome('laval')).toBe(true);
    });

    test('should return true for a palindrome word with mixed case', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    // Negative test cases
    test('should return false for a two different characters', () => {
        expect(isPalindrome('ab')).toBe(false);
    });

    test('should return false for a non-palindrome word', () => {
        expect(isPalindrome('launchcode')).toBe(false);
    });

    test('should return false for a non-palindrome word with mixed case', () => {
        expect(isPalindrome('abA')).toBe(false);
    });

    test('should return false for a non-palindrome sentence', () => {
        expect(isPalindrome('so many dynamos')).toBe(false);
    });
    afterAll(() => {
        console.log('Finished tests for isPalindrome function.');
    });
});

describe('Currency conversion functions', () => {
    beforeAll(() => {
        console.log('Starting tests for currency conversion functions...');
    });
    // Test for conversion from Euro to Dollar
    test('should convert euro to dollar correctly', () => {
        const euro = 1;
        const expectedDollar = euro * oneEuroIs["USD"];
        expect(fromEuroToDollar(euro)).toBeCloseTo(expectedDollar);
    });

    // Test for conversion from Euro to Japan Yen
    test('should convert euro to yen correctly', () => {
        const euro = 1;
        const expectedYen = euro * oneEuroIs["JPY"];
        expect(fromEuroToJapanYen(euro)).toBeCloseTo(expectedYen);
    });

    // Test for conversion from Euro to British Pound
    test('should convert euro to pound correctly', () => {
        const euro = 1;
        const expectedPound = euro * oneEuroIs["GBP"];
        expect(fromEuroToBritish(euro)).toBeCloseTo(expectedPound);
    });
    afterAll(() => {
        console.log('Finished tests for currency conversion functions.');
    });
});




