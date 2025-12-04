class Cloud extends MoveableObject{
    positionY = 20;
    height = 250;
    width = 400;
    speed = 0.5;


    constructor(imagePath, positionX) {
        super().loadImage(imagePath);

        this.positionX = positionX + Math.random() * 250;
        this.animate();
    }


    animate() {
        this.cloudMoves();
    }

    
    cloudMoves() {
        setInterval(() => {
            if(gameStarted && !gameEnded && !gamePaused) {
                this.moveLeft();
            }
        }, 1000 / 60)
    }
}