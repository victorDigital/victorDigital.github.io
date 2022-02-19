function makeArr2D(rows, cols) {
  let arr = new Array(cols);
  for(let i = 0 ; i < arr.length ; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let canvasHeight = 800;
let canvasWidth = 800;

let grid;
let newGrid;
let rows;
let cols;
let reso = 10;
let isPaused = false;

let clearButton;
let pauseButton;
let playSpeed;

function setup() {
  clearButton = createButton("Clear")
  pauseButton = createButton("Pause/Play")
  playSpeed = createSlider(1,60,10)
  clearButton.size(100)
  rows = canvasHeight / reso;
  cols = canvasWidth / reso;
  grid = makeArr2D(rows, cols);
  newGrid = makeArr2D(rows, cols);
  createCanvas(canvasWidth,canvasHeight);
  frameRate(25)
  noStroke();
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      grid[i][j] = floor(random(2))
      if(i == 0 || i == cols-1 || j == 0 || j == rows-1) {
        grid[i][j] = 0;
      }
    }
  }
}

function draw() {
  let newFrameRate = playSpeed.value();
  frameRate(newFrameRate);
  background(0);
  for(let i = 0; i < cols ; i++) {
    for(let j = 0; j < rows ; j++) {
      if(grid[i][j] == 1) {
        fill(255);
        let x = i * reso;
        let y = j * reso;
        rect(x,y,reso,reso);
      }
    }
  }
  if(!isPaused) {
    newFrame();
  }
  clearButton.mousePressed(clearCanvas);
  pauseButton.mousePressed(pauseResume);
}

function clearCanvas() {
  for(let i = 0; i < cols+1 ; i++) {
    for(let j = 0; j < rows+1 ; j++) {
      newGrid[i][j] = 0;
    }
  }
}

function pauseResume() {
  if(isPaused === false) { isPaused = true; } else { isPaused = false; }
}

function newFrame() {
  for(let i = 1; i < cols-1 ; i++) {
    for(let j = 1; j < rows-1 ; j++) {
      let amountOfNeighbours = 0;
      if(grid[i+1][j] == 1) {amountOfNeighbours++;}
      if(grid[i-1][j] == 1) {amountOfNeighbours++;}
      if(grid[i+1][j-1] == 1) {amountOfNeighbours++;}
      if(grid[i-1][j-1] == 1) {amountOfNeighbours++;}
      if(grid[i][j+1] == 1) {amountOfNeighbours++;}
      if(grid[i][j-1] == 1) {amountOfNeighbours++;}
      if(grid[i+1][j+1] == 1) {amountOfNeighbours++;}
      if(grid[i-1][j+1] == 1) {amountOfNeighbours++;}

      if(grid[i][j] == 1) {
        if(amountOfNeighbours <= 1) {newGrid[i][j] = 0}
        if(amountOfNeighbours >= 4) {newGrid[i][j] = 0}
      }
      if(grid[i][j] == 0) {
        if(amountOfNeighbours == 3) {newGrid[i][j] = 1}
      }
    }
  }
  for(let i = 1; i < cols-1 ; i++) {
    for(let j = 1; j < rows-1 ; j++) {
      grid[i][j] = newGrid[i][j]
    }
  }
}

function mousePressed() {
  let cellX = round(mouseX / reso);
  let cellY = round(mouseY / reso);
  newGrid[cellX][cellY] = 1;
  grid[cellX][cellY] = 1;
}

