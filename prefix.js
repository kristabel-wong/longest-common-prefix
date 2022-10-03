const longestCommonPrefix = function(strs) {

    // write your solution here

    // 1. Find the shortest string
    // SIMPLE - loop
    // let shortestString = strs[0]
    // for (let i = 0; i < strs.length; i++) {
    //     if (strs[i].length < shortestString.length) {
    //         shortestString = strs[i]
    //     }
    // }

    // console.log('shortestString:', shortestString);
    
    // MAGICAL - Reduce() method
    // debugger;
    let shortestString = strs.reduce((currentWord, prevWord) => currentWord.length <= prevWord.length ? currentWord : prevWord )

    // console.log('shortest string, reduce()', shortestString);

    // 2. Once we have the shortest string, we can handle individual letters --> turn each word into an array
    let array = []
    strs.forEach(str => array.push(Array.from(str)));

    // console.log('array of words in another array', array);
    
    // 3. Compare every corresponding letter eg. add every first letter of every word into the output
    let output = []

    for (let i=0; i < shortestString.length; i++) {
        let row = []
        for (let j = 0; j < array.length; j++) {
            // console.log('array[j][i]', array[j][i]);
            row.push(array[j][i])
        }
        output.push(row)
    }
    // console.log('output', output);
    
    // 4. Get the common prefix, test if every row has the same letter
    let prefix = ""
    for (let i = 0; i < output.length; i++) {

        // every() tests if each element is the same as the first letter in every row
        if ( output[i].every( letter => letter === output[i][0])) {
            prefix += output[i][0]
        }
    }

    // console.log('prefix', prefix);
    return prefix;
    
};


// longestCommonPrefix(["trifecta","trip","tripping", "triple"])

module.exports = longestCommonPrefix
