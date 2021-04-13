
function adder(...arr) {
    let sum = 0; 
    arr.forEach(el => sum += el);
    return sum; 
}

// console.log(adder(1, 2))
// console.log(adder(1, 2, 3, 4, 5, 6, 7))

let arr = ["cat", "dog", "bird", "cat"]

let newArr = arr.filter(animal => {
    return animal === "cat"
})

console.log(newArr)