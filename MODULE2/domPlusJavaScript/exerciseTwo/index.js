// Solve this solution using querySelectorAll and querySelector 
// <!-- 
// Create a feature that grabs all of the li elements
// and sums up all the numbers, when a user clicks on a button.
// The total should appear as the span's text
// -->

function addAll(){
    let sum = 0;
    const listItems = document.querySelectorAll("li"); 
    console.log(listItems)
    for(let li of listItems){
        console.log(li.textContent)
        sum += Number(li.textContent)
    }
    document.querySelector("#total").textContent = sum;
}