const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions to fit the entire browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/**
 * We need to keep track of all the particles that were created and need to be updated
 */
let particles = new Array();

/**
 * Create a particle with X and Y starting positions
 * After creating the particle, we store its reference in the particles array for future updates
 */
function addParticle(){
    var particle = new Particle();
    particles.push( particle );
}

// Animation Loop
function animate(){

    // Clean the canvas before next rendering
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Will create new particles at each frame render
    addParticle();
    
    // iterate through the particles array to update each particle
    for (let i = 0; i < particles.length; i++) {
        let particle = particles[i];
        particle.update();

        /**
         * we will control the particle existance through its alpha property. 
         * When alpha is 0, we remove that reference from the particles array.
         * We will have only 100 particles at the same time on screen.
         */
        
        if (particle.alpha <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

animate();