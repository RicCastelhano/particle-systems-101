const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particle = new Particle();

// Animation Loop
function animate(){
    particle.update();
    requestAnimationFrame(animate);
}

animate();