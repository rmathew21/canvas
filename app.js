const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.style.border = "1px solid red";
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true
let shouldDraw = false; // Track if we should draw

function draw(e) {
   if (!shouldDraw) return; //Only draw when actively moving
    console.log('Mouse move event:', e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath(); 
    ctx.moveTo(lastX, lastY); // start from
    ctx.lineTo(currentX, currentY); 
    ctx.stroke();
    [lastX, lastY] = [currentX, currentY];

    hue++;
    if(hue >= 360) hue = 0;
    
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    // if (direction) {
    //     ctx.lineWidth++;
    // } else {
    //     ctx.lineWidth--;
    // }
    ctx.lineWidth += direction ? 1 : -1;
    
    requestAnimationFrame(draw); // Schedule the next frame
}

let currentX = 0;
let currentY = 0;

function getEventCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

canvas.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;

    const { x, y } = getEventCoordinates(e);
    currentX = x;
    currentY = y;
    shouldDraw = true;
});

canvas.addEventListener('pointerdown', (e) => {
    const { x, y } = getEventCoordinates(e);
    isDrawing = true;
    [lastX, lastY] = [x, y];
    currentX = lastX;
    currentY = lastY;
    shouldDraw = true;
    draw(); // Start the drawing loop
});

canvas.addEventListener('pointerup', () => {
    isDrawing = false;
    shouldDraw = false; // Stop drawing
});

canvas.addEventListener('pointerout', () => {
    isDrawing = false;
    shouldDraw = false; // stop drawing
});

// ===================================
// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');

// Set canvas dimensions
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// Add a visible border for debugging
// canvas.style.border = "1px solid red";

// Drawing styles
// ctx.strokeStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';

// Event listeners
// canvas.addEventListener('mousemove', (e) => {
//     e.preventDefault(); // Prevent default behavior
//     console.log('Mouse move event:', e); // Log mousemove
// });

// canvas.addEventListener('mousedown', (e) => {
//     console.log('Mouse down on canvas');
//     canvas.focus(); // Ensure canvas is active
// });

// canvas.addEventListener('mouseup', () => {
//     console.log('Mouse up on canvas');
// });

// For debugging outside the canvas
// window.addEventListener('mousemove', (e) => {
//     console.log('Mouse move on window:', e);
// });

// Chrome friendly
// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.style.border = '1px solid red';

// ctx.strokeStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';

// function draw(e) {
//     console.log('Mouse move event:', e);
// } ***********

// canvas.addEventListener('pointermove', draw);

// canvas.addEventListener('pointerdown', (e) => {
//     canvas.setPointerCapture(e.pointerId);
//     console.log('Pointer down on canvas');
// });

// canvas.addEventListener('pointerup', (e) => {
//     canvas.releasePointerCapture(e.pointerId);
//     console.log('Pointer up on canvas')
// });