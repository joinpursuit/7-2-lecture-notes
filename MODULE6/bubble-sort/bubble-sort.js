// BUBBLE SORT

// lets say we had an array of cards we wanted to order from lowest to highest
const cards = [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// we want to swap our card comparing two elements that are next to each other
    // if they are in the correct order, it moves along to the next pair
    // if they are in the wrong order, they are swapped and then it moves along to the next pair

    const bubbleSort = (arr) => {

        // let unordered = true;
        do {
            unordered = false;
            // iterate over the array
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > arr[i+1]){
                    // let temp = arr[i];
                    // arr[i] = arr[i+1];
                    // arr[i+1] = temp;
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    unordered = true
                    // create a conditional to compare the current element to the next element
                }
                
            }
        } while(unordered)
        // same as our while loop without having to declare our unordered variable
            
        return arr
        // return our array with swapped items
    }

    console.log(bubbleSort(cards))


    // lets improve on this my creating a flag that will run our loop until it is in order
    
    // what do we think the time complexity of bubble sort will be?
















    // const bubbleSort = (arr) => {

    //     let unordered = true;

    //     while (unordered){
    //         unordered = false;
            
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] > arr[i + 1]) {
    //                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    //                 unordered = true;
    //             }
    //         }
    //     };
      
    //     return arr;
    // };

    // console.log(bubbleSort(cards))