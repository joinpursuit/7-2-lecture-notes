/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(val) {
  return typeof val === "number"
}


/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
// bang operator returns the opporsite boolean of
function isTruthy(val) {
  return !!val
  // if(val) {
  //   return true 
  // } else {
  //   return false; 
  // }
}


module.exports = {
  isNumber,
  isTruthy
}
