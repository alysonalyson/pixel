// Select color input
// When size is submitted by the user, call makeGrid()
const submitBtn = document.getElementById('submitBtn');
const canvas = document.getElementById('pixelCanvas');
//submit function
submitBtn.addEventListener('click', function(e){
  e.preventDefault();
  makeGrid();
});
//function to fill in backgrond color on click
canvas.addEventListener('click', function(e){
  let newColor = document.getElementById('colorPicker').value;
  let square = e.target;
  e.preventDefault();
  square.style.backgroundColor = newColor;
});
//build canvas
function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  canvas.innerHTML='';
  for (let i = 1; i <= height; i++) {
    let row = document.createElement('tr');
    canvas.appendChild(row);
    for (let j = 1; j <= width; j++) {
      let column = document.createElement('td');
      row.appendChild(column);
    }
  }
}
