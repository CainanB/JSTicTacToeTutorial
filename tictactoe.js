
// Create an array of 9 empty values
// This will be our tic tac toe board representation
let table = document.querySelector('table')
let winner = document.querySelector('#winner')
let currentPlayer = "X"

// Array of all possible winning scenarios
let winningCases = [
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2]
]
// Array of empty strings to represent current state of our board
let tiles = ["","","",
            "","","",
            "","",""]


// Function to loop through our winning Cases and check if our tiles array has 
// the same matching index values as any of our winning cases
function checkIfWinner(){
    for(let currentCase of winningCases){
        if(tiles[currentCase[0]] == tiles[currentCase[1]] && 
           tiles[currentCase[0]] == tiles[currentCase[2]] && 
           tiles[currentCase[0]] != "" && tiles[currentCase[1]] != "" && tiles[currentCase[2]] != "" 
           ){
               winner.innerHTML = "the winner is " + currentPlayer
           }
    }
} 
// function to update our tiles array to correctly represent current board state
function updateTiles(id){
    let index = parseInt(id)
    tiles[index] = currentPlayer;
    console.log(tiles)
}

// click listener to check which button is clicked

table.addEventListener("click", function(e){
    let clickedTile = e.target
    
    if(clickedTile.innerHTML == "" && currentPlayer == "X"){
        clickedTile.innerHTML = "X"
        // the id of the button clicked is passed to the updateTiles function 
        //because this is the index we want to update with the currentPlayer Value "X" or "O"
        updateTiles(clickedTile.id) 
        checkIfWinner();
        currentPlayer = "O"
    }else if(clickedTile.innerHTML == "" && currentPlayer == "O"){
        clickedTile.innerHTML = "O"
        updateTiles(clickedTile.id)
        checkIfWinner();
        currentPlayer = "X"

    }
})
console.log(tiles)


// MORE FUNCTIONALITY TO ADD YOURSELF
// NOT ALLOW ANOTHER PLAY AFTER WINNER HAS BEEN DECLARED
// ADD A BUTTON TO RESET THE GAME TO EMPTY BOARD
// CREATE A BETTER UI WITH BOOTSTRAP OR CSS