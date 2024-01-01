const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Animation Loop
function animate(){

    requestAnimationFrame(animate);
}

animate();