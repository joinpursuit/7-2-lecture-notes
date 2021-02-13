// Solve for this problem using .createElement and .appendChild()
// Develop a feature that displays a list of the player's name and batting average 
// that have a batting average over .320
// ex: 
//     Sparky: .330
//     Corey: .400
//     Mike: .320

// Bonus: sort the players from highest to lowest batting average

const allPlayers = [
    { name: "Jason Heyward", batting_average: "340"},
    { name: "Nicholas Castellanos", batting_average: "200"},
    { name: "Kris Bryant", batting_average: "130"},
    { name: "Anthony Rizzo", batting_average: "360"},
    { name: "Javier Baez", batting_average: "230"},
    { name: "Kyle Schwarber", batting_average: "300"},
    { name: "Ian Happ", batting_average: "290"},
    { name: "Victor Caratini", batting_average: "370"},
    { name: "Corey Ladvosky", batting_average: "400"},
];

function getHitters(){
    allPlayers.forEach(player => {
        if(Number(player.batting_average) > 320){
            const li = document.createElement("li")
            li.textContent = `${player.name}: ${player.batting_average}`
            document.querySelector("#best_hitters").appendChild(li);
        }
    })
}