const container = document.querySelector(".container");
let containerSize = 16;

createContainer(containerSize);

function createContainer(containerSize){
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.remove());
  for (let i = 0; i < containerSize; i++) {
    for (let j = 0; j < containerSize; j++) {
      let newGrid = document.createElement("div");
      newGrid.classList.add("grid");
      container.appendChild(newGrid);
    }
  }
}

small = document.getElementById("small").addEventListener("click", function(){
  containerSize = 16;
  createContainer(containerSize);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "39px";
    grid.style.height = "39px";
  });
});

medium = document.getElementById("medium").addEventListener("click", function(){
  containerSize = 32;
  createContainer(containerSize);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "19px";
    grid.style.height = "19px";
  });
});

big = document.getElementById("big").addEventListener("click", function(){
  createContainer(64);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "9px";
    grid.style.height = "9px";
  });
});