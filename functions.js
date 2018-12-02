document.addEventListener("DOMContentLoaded", setup);

var player_1 = [];
var player_2 = [];

var wasClicked = [];

function setup(e) {
    console.log(e);
    var cells = document.getElementsByTagName("td");
    for(i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", clicked);
    }
}

function clicked() {
    console.log(event.target.id);
    
    if(!wasClicked.includes(event.target.id)){

            player_1.push(event.target.id);
            wasClicked.push(event.target.id);
            event.target.classList.add("blue");
            if(hasWin(player_1)){
                document.body.classList.add("black")
            }
            console.log(player_1, wasClicked);
            autoPilot(wasClicked);
        }
        
    
}

function autoPilot(x) {
    var tab = document.getElementsByClassName("square");
    var random = tab[Math.floor(Math.random() * 9)];
    /*
    */
        console.log(random.id);
        if(x.includes(random.id)){
            autoPilot(wasClicked);
        } 
        else{
            //getRando().classList.add("red");
            random.classList.add("red");
            player_2.push(random.id);
            wasClicked.push(random.id);
            console.log(player_2, wasClicked);
                        
            if(hasWin(player_2)){
                document.body.classList.add("black");
                console.log("Winner2");
            }
        } 
 }

function hasWin(x) {
    var winner = [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1","c2","c3"], ["a1", "b1", "c1"],
                  ["a2","b2","c2"], ["a3","b3","c3"], ["a1", "b2", "c3"], ["a3", "b2", "c1"]];
    for(i = 0; i < winner.length; i++){
        //console.log(winner[i]);
        if(x.includes(winner[i][0]) && x.includes(winner[i][1]) && x.includes(winner[i][2])){
            console.log("win!!!");
            return true;
        }
}  
        
}