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

c.clearRect(0,0, canvas.width, canvas.height);
c.beginPath();
c.fillStyle = 'black';
c.fillRect(snakex, snakey, 10, 10);
c.stroke();

// moves the snake in a particular direction
window.onkeydown = function (event) {
    if(event.key === '6') {
        let x = 10;
        let y = 0;
        direction(x,y)
    }
    if(event.key === '2') {
        let x = 0;
        let y = 10;
        direction(x,y)
    }
    if(event.key === '4') {
        let x = -10;
        let y = 0;
        direction(x,y)
    }
    if(event.key === '8') {
        let x = 0;
        let y = -10;
        direction(x,y)
    }
}

function direction(x,y) {
    setInterval(function () {
        c.clearRect(0,0, canvas.width, canvas.height);
        c.beginPath();
        c.fillStyle = 'black';
        c.fillRect(snakex, snakey, 10, 10);
        c.stroke();
        snakex = snakex + x;
        snakey = snakey + y;
    }, 100)
}
