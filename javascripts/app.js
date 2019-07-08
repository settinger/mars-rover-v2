// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
};

var directions = ["N", "W", "S", "E"];

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  oldDir = directions.indexOf(rover.direction); // N -> 0, W -> 1, etc;
  newDir = (oldDir+1)%4;
  rover.direction = directions[newDir]; // 0 -> N, 1 -> W, etc.
  console.log(`Rover is facing ${rover.direction}`);
}

function turnRight(rover){
  console.log("turnRight was called!");
  oldDir = directions.indexOf(rover.direction); // N -> 0, W -> 1, etc;
  newDir = (oldDir+3)%4; // I'm using +3 instead of -1 to avoid negative numbers (modulus operator doesn't like negative numbers)
  rover.direction = directions[newDir]; // 0 -> N, 1 -> W, etc.
  console.log(`Rover is facing ${rover.direction}`);
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.y -= 1;
      break;
    case "W":
      rover.x -=1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "E":
      rover.x += 1;
      break;
    default:
      break;
  }
  console.log(`Rover position is (${rover.x}, ${rover.y})`)
  rover.travelLog += [rover.x, rover.y];
}

function readCommands(rover, instructionSet) {
  [...instructionSet].forEach(
    function(command) {
      executeCommand(command, rover);
    }
  );
}

function executeCommand(command, rover) {
  switch (command) {
    case "r":
      turnRight(rover);
      break;
    case "l":
      turnLeft(rover);
      break;
    case "f":
      moveForward(rover);
      break;
    default:
      break;
  }
}