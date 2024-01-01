const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particle = new Particle( {x: canvas.width / 2, y: canvas.height - 200 } );

// Animation Loop
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particle.update();
    requestAnimationFrame(animate);
}

animate();