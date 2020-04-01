const container = document.querySelector('.container');
const form = document.querySelector('.grid-form');
const btn = document.getElementById('clear');
const button = document.getElementById('rainbow');

function clear() {
	drawDefaultGrid();
}

btn.addEventListener('click', clear);

let defaultHover = function (grid) {
	grid.addEventListener('mouseover', () => {
		grid.style.background = 'red';
		grid.style.border = '1px solid rgba(0,0,0,0.5);';
	});
}

button.addEventListener('click', RandomHover);

function RandomHover() {
	let toggle = true;
	drawDefaultGrid(toggle);
}

function drawDefaultGrid(toggle) {

	const gridSize = 8;
	container.innerHTML = "";

	for( i = 0; i < gridSize*gridSize; i++ ) {

		const grid = document.createElement('div');
		grid.classList.add('grid');
		const gridSide = 608 / gridSize;
		grid.style.height = gridSide + 'px';
		grid.style.width = gridSide + 'px';
		container.appendChild(grid);
		if(toggle){
			getRandomColor(grid);
		}
		else{defaultHover(grid);}
		
	}
}

drawDefaultGrid();

form.addEventListener('submit', event => {
	event.preventDefault();
	const input = document.querySelector('.grid-size')
	console.log(input.value);
	createGrid(input.value);
})

function createGrid(gridSize) {

	container.innerHTML = "";

	for( i = 0; i < gridSize*gridSize; i++ ) {

        //Delete other container child nodes

		
		const grid = document.createElement('div');
		grid.classList.add('grid');
		const gridSide = 608 / gridSize;
		grid.style.height = gridSide + 'px';
		grid.style.width = gridSide + 'px';
		container.appendChild(grid);
		defaultHover(grid);	

	}
}

function getRandomColor(grid) {
	function Randomize() {
    	var letters = '0123456789ABCDEF';
    	var color = '#';
    	for (var i = 0; i < 6; i++) {
      		color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	}

    grid.addEventListener('mouseover', () => {
		grid.style.background = Randomize();
		grid.style.border = '1px solid rgba(0,0,0,0.5);';
	});
  }

