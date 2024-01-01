class Particle{
    constructor( position ){
        this.x = position.x;
        this.y = position.y;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * -5 - 1;
    }

    draw(){
        ctx.fillStyle = `white`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fill();
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}