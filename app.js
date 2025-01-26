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

function draw(e) {
   if (!isDrawing) return; 
    // e.preventDefault(); 
    console.log('Mouse move event:', e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    ctx.beginPath(); 
    ctx.moveTo(lastX, lastY); // start from
    ctx.lineTo(e.offsetX, e.offsetY); // go to
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth<=1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
    
}

canvas.addEventListener('pointermove', draw);
// canvas.addEventListener('pointermove', draw, {
//     passive: false
// });
canvas.addEventListener('pointerdown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // console.log('pointer down on canvas') 
});

// canvas.addEventListener('pointerdown', (e) => {
//     isDrawing = true;
//     canvas.setPointerCapture(e.pointerId);
//     console.log('move down on canvas')
// });

canvas.addEventListener('pointerup', () => {
    isDrawing = false
    // console.log('pointer up on canvas')
});

// canvas.addEventListener('pointerup', (e) => {
//     isDrawing = false;
//     canvas.releasePointerCapture(e.pointerId)
//     console.log('move up on canvas');
// })

canvas.addEventListener('pointerout', () => {
    isDrawing = false
    // console.log('pointer is out on canvas')
});



// canvas.addEventListener('mousedown', () => {
// console.log('Mouse down on canvas');
// canvas.focus();
// });

// canvas.addEventListener('mouseup', () => console.log('Mouse up on canvas'));

// For testing outside the canvas
// window.addEventListener('mousemove', (e) => {
//     console.log('Mouse move on window:', e);
// });






// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mousedown', () => {
//     console.log('mousedown');
// });
// canvas.addEventListener('mouseup', () => {
//     console.log('mouseup');
// });
// canvas.addEventListener('mouseout', () => {
//     console.log('mouseout');
// });



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