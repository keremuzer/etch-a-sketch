const container = document.querySelector(".container");
size = "small";

createContainer(16);

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
  size = "small";
  createContainer(16);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "39px";
    grid.style.height = "39px";
  });
});

medium = document.getElementById("medium").addEventListener("click", function(){
  size = "medium";
  createContainer(32);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "19px";
    grid.style.height = "19px";
  });
});

big = document.getElementById("big").addEventListener("click", function(){
  size = "big";
  createContainer(64);
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.style.width = "9px";
    grid.style.height = "9px";
  });
});

clear = document.getElementById("clear").addEventListener("click", function(){
  if (size == "small") {
    createContainer(16);
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
      grid.style.width = "39px";
      grid.style.height = "39px";
    });
  }
  else if (size == "medium") {
    createContainer(32);
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
      grid.style.width = "19px";
      grid.style.height = "19px";
    });
  }
  else if (size == "big") {
    createContainer(64);
    let grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
      grid.style.width = "9px";
      grid.style.height = "9px";
    });
  }
});