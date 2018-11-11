//stores all clicked id's
var wasClicked = [];
//stores each ind. player's id
var player_1 = []; 
var player_2 = [];
//checks if 'p' contains a winning array
function checkWin(p) {
    
    var combos = [
        ["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], 
        ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], 
        ["a1", "b2", "c3"], ["a3", "b2", "c1"]
    ];
      
    for(i = 0; i < combos.length; i++) {
        
        if(p.includes(combos[i][0]) && p.includes(combos[i][1]) && p.includes(combos[i][2]))
            return true;
    }
    
    return false;
}
//checks if 'event.target.id' is already contained in player array
function checkValid(array, p){
    if(!array.includes(p)){ console.log("true"); return true; } else { console.log("false"); return false; }
}

// invoked whenever a td element is clicked on; event.target refers to which td was clicked on
function clicked(event) {
    if(wasClicked.length%2==0){     
        //if(statement) returns true, change tile color, add 'id' to 
        if(checkValid(wasClicked, event.target.id)) { player_1.push(event.target.id); console.log(player_1); wasClicked.push(event.target.id); event.target.setAttribute("class", "red"); 
            if(checkWin(player_1) ) { console.log("Player 1 Wins!"); }                                                    
        }             
    }
    else {
    
        if(checkValid(wasClicked, event.target.id)) { player_2.push(event.target.id); console.log(player_2); wasClicked.push(event.target.id); event.target.setAttribute("class", "blue"); 
            if(checkWin(player_2) ) { console.log("Player 2 Wins!"); }                                                     
        }       
    }
    if(wasClicked.length==9){
        window.location.reload();
        console.log("It's a draw");
    }
}

// sets up 9 onclick event listeners, one for each td element
function setup() {
    var cells = document.getElementsByTagName("td");
    
    for(var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", clicked);
    }
}

// Wait for the html to be read entirely first, then run "setup"
document.addEventListener("DOMContentLoaded", setup);
