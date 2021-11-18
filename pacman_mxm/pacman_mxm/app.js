var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,],
    [2,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,],
    [2,1,2,2,1,2,2,2,1,3,2,1,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,2,1,2,],
    [2,1,2,2,1,2,1,2,1,1,2,1,1,2,1,2,2,2,1,1,2,2,3,1,2,2,2,2,1,2,],
    [2,3,2,2,1,1,1,2,1,1,2,1,1,2,1,2,1,2,1,1,2,1,1,1,1,2,1,1,1,2,],
    [2,1,2,2,2,2,1,2,1,1,2,1,1,2,2,2,1,2,1,2,2,1,1,2,2,2,2,1,1,2,],
    [2,1,1,1,1,1,1,2,1,1,2,3,1,1,1,1,1,2,1,2,2,1,1,1,1,1,2,1,1,2,],
    [2,1,2,2,1,2,1,3,1,1,2,1,1,2,1,2,2,2,1,2,2,1,1,2,1,2,1,1,3,2,],
    [2,1,2,2,1,2,1,1,1,2,2,1,1,2,1,1,2,2,1,2,2,2,2,2,1,2,1,2,1,2,],
    [2,1,2,2,1,2,1,1,1,2,2,4,2,2,2,0,2,2,1,2,2,1,1,2,1,2,1,2,1,2,],
    [2,1,2,2,2,2,1,2,1,2,2,0,2,2,2,0,1,1,1,2,2,1,1,2,1,2,1,2,1,2,],
    [2,1,2,1,1,1,1,2,1,2,1,0,2,2,2,0,2,2,1,1,1,1,3,1,1,1,1,2,1,2,],
    [2,1,2,2,1,2,2,1,1,1,1,0,0,0,0,0,2,2,1,2,2,1,1,2,1,2,2,2,1,2,],
    [2,1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,1,1,2,1,1,1,2,1,2,],
    [2,1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1,2,],
    [2,1,2,2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,1,1,2,2,2,1,2,1,2,],
    [2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,2,1,2,],
    [2,1,2,1,1,3,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,],
];

var pacman = {
    x:1,
    // x:0,
    y:1,
    // y:0,
}

// var ghost = {
//     x:1,
//     y:1
// }

var score = 0;

function displayWorld(){
    var output = "";

    for(var i = 0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j = 0; j< world[i].length; j++){
            output = output + world[i][j];
            if(world[i][j] == 2){
                output += "<div class='brick'></div>";
            }                           
            else if(world[i][j] == 1){
                output += "<div class='coin'></div>";
            }            
            else if(world[i][j] == 0){
                output += "<div class='empty'></div>";
            } 
            else if(world[i][j] == 3){
                output += "<div class='cherry'></div>";
            }
            
            else if(world[i][j] == 4){
                output += "<div class='ghost'></div>";

            }
            
        }
        output += "\n</div>";       
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}


displayWorld();
displayPacman();
updateScoreboard();

document.onkeydown = function(e){
    if(e.key == "l") {
        pacmanFaceRight();
        if(world[pacman.y][pacman.x + 1] !== 2)
        pacman.x ++;
    }
    else if(e.key == "j") {
        pacmanFaceLeft();
        if(world[pacman.y][pacman.x - 1] !== 2)
        pacman.x --;
        
    }
    else if(e.key == "u") {
        pacmanFaceDown();
        if(world[pacman.y - 1][pacman.x] !== 2)
        pacman.y --;
    }
    else if(e.key == "n") {
        pacmanFaceUp();
        if(world[pacman.y + 1][pacman.x] !== 2)
        pacman.y ++;
    }
    console.log(world)
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        updateScoreboard();
    }
    if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        updateScoreboard();
    }
    
    displayPacman();
}

function updateScoreboard(){
    document.getElementById("score").innerText = score;
}

function pacmanFaceLeft(){
    document.getElementById("pacman").style.transform = "rotate(180deg)";
}

function pacmanFaceRight(){
    document.getElementById("pacman").style.transform = "rotate(0deg)";
}

function pacmanFaceUp(){
    document.getElementById("pacman").style.transform = "rotate(90deg)";
}

function pacmanFaceDown(){
    document.getElementById("pacman").style.transform = "rotate(270deg)";
}


