
const longestCommonPrefix = require('../prefix');

describe('longestCommonPrefix()', () => {

    it('should return a string with the longest common prefix', () => {
        expect( longestCommonPrefix(["flower","flow","flight"]) ).toBe('fl');
        expect( longestCommonPrefix(["right","rice","rinse", "rigid"]) ).toBe('ri');
        expect( longestCommonPrefix(["trifecta","trip","tripping", "triple"]) ).toBe('tri');
    })

    it('should return an empty string if there is no common prefix', () => {
        expect( longestCommonPrefix(["dog","racecar","car"]) ).toBe("")
        expect( longestCommonPrefix(["cat","rat","pig"]) ).toBe("")
        expect( longestCommonPrefix(["hello","darkness","my", "old", "friend"]) ).toBe("")
    })
})