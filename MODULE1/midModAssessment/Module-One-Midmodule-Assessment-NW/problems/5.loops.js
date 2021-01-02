/** Returns every even number from 0 to a given number
 * @param {number} num - The number to iterate up to
 * @returns {number[]} - An array of even numbers from 0 to {num}
 */
function evenNumbers(num) {
  let output = [];
  for (let i = 0; i <= num; i += 2) {
    // if (i % 2 === 0) {
    output.push(i);
    // }
  }
  return output;
}

// console.log(evenNumbers(8));

/** Returns all multiples of a given number up to 1000
 * Example if num was 3 the output would be [0, 3, 6, 9, 12, ..., 999]
 * @param {number} num - The number to find multiples of
 * @returns {number[]} - An array of all multiples of {num} up to 1000
 * 
 * i++ is syntactic sugar for i += 1 
 * which is syntact sugar for i = i + 1
 */
function multiplesToOneThousand(num) {
  let output = [];
  for (let i = 0; i < 1000; i += num) {
      output.push(i);
  }

  return output;
}

/** Returns the first n powers of 2 (starting at 0)
 * Sample input: 6
 * Sample output: [1,2,4,8,16,32]
 * This is because 2^0 === 1 , 2^1 === 2, 2^2 === 4, 2^3 === 8, etc...
 * @param {number} count - How many powers of two to find
 * @returns {number[]} - An array with the first {count} powers of two
 */
function powersOfTwo(count) {
  let output = [];
  let power = 0; 
  while(output.length < count) {
    output.push(2 ** power);
    power += 1;
  }
  return output; 
}

// console.log(powersOfTwo(6));

module.exports = {
  evenNumbers,
  multiplesToOneThousand,
  powersOfTwo,
};
