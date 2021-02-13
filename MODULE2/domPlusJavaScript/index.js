const changeName = () => {
    const name_ = document.querySelector(".name");
    name_.textContent = "Sparky";

    //.innerText causes reflow to the parent 
    // and children elements
    //.textContent does not
}

const combinedText = () => {
    let str = "";
    const texts = document.querySelectorAll(".text");
    for(let text of texts){
        console.log(text)
        str += text.textContent + ". ";
    } 
    document.querySelector(".text-concat").textContent = str;
}

const getRichPpl = () => {
    const billionairs = [
        { name: "Larry Ellison", netWorth: "79000000000"},
        { name: "Larry Page", netWorth: "82000000000"},
        { name: "Sergey Brin", netWorth: "79000000000"},
        { name: "Warren Buffett", netWorth: "87000000000"},
        { name: "Mark Zuckerberg", netWorth: "100000000000"},
        { name: "Zhong Shanshan", netWorth: "93000000000"},
        { name: "Elon Musk", netWorth: "188000000000"},
        { name: "Bill Gates", netWorth: "132000000000"},
        { name: "Jeff Bezos", netWorth: "184000000000"},
      ];

      //createElement comes from the document object
      //appendChild comes from the HTML element object
      billionairs.forEach(person => {
          if(Number(person.netWorth) > 90000000000){
              let li = document.createElement("li"); 
              li.textContent = person.name;
              document.querySelector("#rich").appendChild(li)
          }
      })
    
}

function deleteItems(){
    const parent = document.querySelector("ul");
    const listItems = document.querySelectorAll("li")
    for(let child of listItems){
        if(child.textContent.toLowerCase().includes("o")){
            // parent.removeChild(child)
            child.parentNode.removeChild(child)
        }
    }
}


function replaceItems(){
    // const parent = document.querySelector("ul")
    const oldNode = document.querySelector("#apple");
    const newNode = document.createElement("li");
    newNode.textContent = "Pineapples";
    // parent.replaceChild(newNode, oldNode);
    oldNode.parentNode.replaceChild(newNode, oldNode);
}

