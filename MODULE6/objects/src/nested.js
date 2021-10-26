const { backpack } = require('./sample_data');

// ===============================================
// ========          PRACTICE         ============
// ===============================================
window.backpack = backpack;
// 1. access the values of the following the 
//    elements in backpack:
// a. color

// console.log(backpack['color']);

// b. contents

// console.log(backpack.contents)

// c. the contents of the wallet

// console.log(backpack.contents[3].wallet[2][2]) 

// d. the mint flavor
// console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor)
// e. the return value of pickUpItems
// const returnOfUnzip = backpack.unZipIt();
// console.log(returnOfUnzip.pickUpItems()); 
// console.log(returnOfUnzip['pickUpItems']());

let type = "login";
{/* <button onCLick={(event) =>  auth[props.type](event)}>
    
</button>
const auth = {
    login: (e) => {
        console.log('login', e);
    },
    signup: (e) => {
        console.log("hey we're signing up", e);
    },
} */}

// f. 38 cents

// console.log(returnOfUnzip['pickUpItems']()[2]);

