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

// snake food
let foodx = 50;
let foody = 50;
let totalPoint = 0

function snakeFoodPosition() {
    totalPoint += 1;
    // let points = document.createTextNode(``)
    // document.getElementsByClassName('score')[0].appendChild(points)
    // points = document.createTextNode(`Points: ${totalPoint}`)
    // document.getElementsByClassName('score')[0].appendChild(points)
    foodx = Math.random() * 790;
    foody = Math.random() * 590;
    snakeFood()
}

function snakeFood() {
    c.fillStyle = 'gray';
    let food = c.fillRect(foodx, foody, 10, 10);
};

snakeFood();

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

// initial position of the snake
c.beginPath();
c.fillStyle = 'black';
c.fillRect(snakex, snakey, 10, 10);

// this is to hilight the snake
function drawSnake() {
    c.beginPath();
    c.fillStyle = 'black';
    c.fillRect(snakex, snakey, 10, 10);
    snakeFood();
}

// moves the snake in a particular direction by calling the function after a set time period
function direction() {
    c.clearRect(0,0, canvas.width, canvas.height);
    drawSnake();
    if(snakex >= foodx-10 && snakex <= foodx+10 && snakey >= foody-10 && snakey <= foody+10  ) {
        snakeFoodPosition();
    }
    if(snakex > 790 || snakex < 0 || snakey > 590 || snakey < 0) {
        gameover()
    }
    snakex = snakex + x;
    snakey = snakey + y;
    setTimeout(direction, 1400)
}

// c.fillRect(40, 40, 10, 10);
// c.fillRect(50, 50, 10, 10);

function gameover() {
    console.log('gameover')
    c.clearRect(0,0, canvas.width, canvas.height);
    c.font = "30px Arial";
    c.fillStyle = 'red'
    c.fillText(`Game Over you scored ${totalPoint} points.`, 250, 300);
    setInterval(function reload() {
        location.reload()
    }, 3000)
}