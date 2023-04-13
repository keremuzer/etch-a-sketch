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
      newGrid.addEventListener("mousedown", function(){
        newGrid.style.backgroundColor = "rgb(80, 80, 80)";
      });
      newGrid.addEventListener("mouseover", function(e){
        if (e.buttons === 1) {
          newGrid.style.backgroundColor = "rgb(80, 80, 80)";
        }
      });
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