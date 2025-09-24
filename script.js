let change_button = document.getElementById("change_button");
let reset_button = document.getElementById("reset_button");
let grid_items = document.querySelectorAll(".grid-item");

change_button.addEventListener("click", () => {
  let block_id = document.getElementById("block_id").value;
  let colour_id = document.getElementById("colour_id").value;

  // reset all first
  grid_items.forEach(b => b.style.background = "transparent");

  // get the correct grid box
  let target = document.getElementById(block_id);
  if (target) {
    target.style.background = colour_id;
  }
});

reset_button.addEventListener("click", () => {
  grid_items.forEach(b => b.style.background = "transparent");
});
