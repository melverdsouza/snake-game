let canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;

let c = canvas.getContext('2d');

let foodx = Math.random() * canvas.width;
let foody = Math.random() * canvas.height;

c.fillStyle = 'black';
let food = c.fillRect(foodx, foody, 10, 10);
