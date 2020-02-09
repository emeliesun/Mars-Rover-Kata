// Rover Object Goes Here
// ======================
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{x:0, y:0}]
};

// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      console.log("The direction is W");
      break;
    case "W":
      rover.direction = "S";
      console.log("The direction is S");
      break;
    case "S":
      rover.direction = "E";
      console.log("The direction is E");
      break;
    case "E":
      rover.direction = "N";
      console.log("The direction is N");
      break;
  }
  
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      console.log("The direction is E");
      break;
    case "E":
      rover.direction = "S";
      console.log("The direction is S");
      break;
    case "S":
      rover.direction = "W";
      console.log("The direction is W");
      break;
    case "W":
      rover.direction = "N";
      console.log("The direction is N");
      break;
  }
}


function moveForward(rover){
  switch(rover.direction){
    case "N":
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
  }
  console.log("moveForward was called")
  rover.travelLog.push({x:rover.x, y:rover.y})
}

function listCommand(list, rover){
  for(i=0; i<list.length; i++){
    switch(list[i]){
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      default:
        console.log("Command not recognized!");
        break;
    }
  }
  for(i=0; i<rover.travelLog.length; i++){
     console.log(`The position is ${rover.travelLog[i].x}, ${rover.travelLog[i].y}`); 
  }
}

listCommand(`rffrflff`, rover);
