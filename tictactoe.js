// let tiles = new Array(9);
// tiles.fill("");

// Create an array of 9 empty values
// This will be our tic tac toe board representation
const table = document.querySelector('table')

let winningCases = [
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2]
]
let tiles = ["","","",
            "","","",
            "","",""]


table.addEventListener("click", function(e){
    console.log(e.target.id)
    console.log(e.target.innerHTML == "")
    if(e.target.innerHTML == ""){
        e.target.innerHTML = "X"
    }
})
console.log(tiles)