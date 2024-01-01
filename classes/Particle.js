class Particle{
    constructor(){
        this.x = 100;
        this.y = 100;
    }

    draw(){
        ctx.fillStyle = `white`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fill();
    }

    update(){
        this.draw();
    }
}