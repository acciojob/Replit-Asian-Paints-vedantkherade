//your JS code here. If required.
let block = document.getElementById("block_id");
let colour = document.getElementById("colour_id");
let change_button = document.getElementById("change_button");
let Reset = document.getElementById("Reset");
let grid_item =  document.querySelectorAll(".grid-item")

change_button.addEventListener("click", () => {
	let block_id = document.getElementById("block_id").value;
	let color_id = document.getElementById("colour_id").value;

	 grid_item.forEach(b => b.style.background = "transparent");

  // find the grid box by id and color it
  let target = document.getElementById(block_id);
  if (target) {
    target.style.background = color_id;
  }
})

Reset.addEventListener("click", () => {
  grid_item.forEach(b => b.style.background = "transparent");
});