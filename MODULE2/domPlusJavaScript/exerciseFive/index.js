// Create a solution using the replaceChild method 
// Develop a feature that replaces all of the odd numbers 
// multiplied by two using the replaceChild method

function changeOdds(){
    //querySelectorAll to grab all p tags
    const ps = document.querySelectorAll(".number");
    //loop through the p tags and find odd numbers (%)
    for(let p of ps){
        console.log(p)
        let number = Number(p.textContent);
        if(number % 2 === 1){
            let newP = document.createElement("p");
            newP.textContent = number * 2;
            p.parentNode.replaceChild(newP,p);
        }
    }
    //if true, get the textContent mutiple the number by 2
    //create a new element and give it the number 
    //using the replaceChild change the old Element with the new Element
}