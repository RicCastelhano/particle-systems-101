class Particle{
    /**
     * Each particle will have random velocity
     * vx between -1 and 1 (left or right directions)
     * vy between -1 and -6 (some particles are slower, others are faster)
     */
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height - 200;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * -5 - 1;
        this.alpha = 1;
    }

    /**
     * Draw a white circle, with variable alpha property (transparency)
     */
    draw(){
        ctx.fillStyle = ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fill();
    }

    /**
     * Update x and y position using velocities
     * At each update, the particle becomes a little more transparent
     * After updating properties, it is time to draw the particle again
     */
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.01;
        this.draw();
    }
}