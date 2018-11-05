var player_1 = new Array();
var player_2 = new Array();

var xandy = 0;

// invoked whenever a td element is clicked on; event.target refers to which td was clicked on
function clicked(event) {
    if(xandy%2==0){
        event.target.setAttribute("class", "red");
        xandy++;
        
        player_1 = HTMLElementObject.className;
    }
    else {
        event.target.setAttribute("class", "blue");
        xandy++;
    }
    
    if(xandy == 9) {
        location.reload();
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
