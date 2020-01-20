// start with three dots
// set timeout of 1 second which moves the dots from one position to next
// each dot of the snake should follow one after another
// and at each point the number of dots should increase by one
// the dots should not touch each other or the canvas border
// the snake should respond to arrow keys


let canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

let c = canvas.getContext('2d');

// // snake food
// let foodx = Math.random() * canvas.width;
// let foody = Math.random() * canvas.height;

// c.fillStyle = 'gray';
// let food = c.fillRect(foodx, foody, 10, 10);

// snake position
let snakex = 0;
let snakey = 0;

let x
let y
// moves the snake in a particular direction
window.onkeydown = function (event) {
    event.target.value = ''
    if(event.key === '6') {
        console.log(event.key)
        x = 10;
        y = 0;
        direction()
    }
    if(event.key === '2') {
        event.target.value = ''
        console.log(event.key)
        x = 0;
        y = 10;
        direction()
    }
    if(event.key === '4') {
        event.target.value = ''
        console.log(event.key)
        x = -10;
        y = 0;
        direction()
    }
    if(event.key === '8') {
        event.target.value = ''
        console.log(event.key)
        x = 0;
        y = -10;
        direction()
    }
}

c.beginPath();
c.fillStyle = 'black';
c.fillRect(snakex, snakey, 10, 10);

function drawSnake() {
    c.beginPath();
    c.fillStyle = 'black';
    c.fillRect(snakex, snakey, 10, 10);
}


function direction() {
    c.clearRect(0,0, canvas.width, canvas.height);
    
    drawSnake();

    snakex = snakex + x;
    snakey = snakey + y;

    setTimeout(direction, 1000)
}