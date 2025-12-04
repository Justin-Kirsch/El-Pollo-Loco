class Chicken extends MoveableObject {
    health = 100;
    height = 80;
    width = 70;
    currentImage = 0;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'

    ];


    constructor(positionX) {
        super().loadImage('assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.positionX = positionX + Math.random() * 100;
        this.positionY = 350;
        this.animate();
        this.speed = 0.5 + Math.random() * 0.35;
    };

    // Starts all Animation for the chicken
    animate() {
        this.chickenAnimatesWhenGameStarts();
        this.chickenIsMovingLeft();
        this.chickenIsDying();
    };

    // Clears the Interval for the Chicken if it is dead
    chickenIsDying() {
        setInterval( () => {
            if (this.isDead()) {
                this.loadImage('assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
                clearInterval(this.chickenMoveLeftInterval);
                clearInterval(this.chickenWalkingAnimation);
            }
        }, 200)
    }

    // Moves the chicken to the left
    chickenIsMovingLeft() {
        setInterval( () => {
            if(!this.isDead() && !this.isHurt() && !gamePaused ) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    // Starts the walking animation for the chicken
    chickenAnimatesWhenGameStarts() {
        setInterval( () => {
            if(gameStarted && !gameEnded && !gamePaused && !this.isDead() && !this.isHurt()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }
} 