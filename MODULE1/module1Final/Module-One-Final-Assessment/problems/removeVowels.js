/**
* Removes all vowels from an input string. 
* For this problem, treat y as a consonant, not a vowel.
* Vowels are "a", "e", "i", "o", and "u" (upper and lowercase)
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*
* ex: removeVowels("HELLO")
* returns: "HLL"
*
* ex: removeVowels("Sunny")
* returns: "Snny"
*
*/

//bonus for FUN ONLY see if you can do it all in one line with implicit returns. 

function removeVowels(str) {
    let output = "";
    const vowels = "aeiou";
    for(const char of str) {
        if (!vowels.includes(char.toLowerCase())) {
          output += char;
        }
    }
    return output;
}

module.exports = removeVowels
