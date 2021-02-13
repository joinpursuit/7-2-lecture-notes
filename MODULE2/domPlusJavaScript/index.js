const changeName = () => {
    const name_ = document.querySelector("#name");
    name_.textContent = "Sparky";

    //.innerText causes reflow to the parent 
    // and children elements
    //.textContent does not
}