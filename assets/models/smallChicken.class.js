class SmallChicken extends MoveableObject {
    health = 100;
    height = 60;
    width = 60;
    currentImage = 0;
    IMAGES_WALKING = [
        'assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'

    ];
    

    constructor(positionX) {
        super().loadImage('assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.positionX = positionX + Math.random() * 100;
        this.positionY = 370;
        this.animate();
        this.speed = 0.8 + Math.random() * 0.4;
    };

    // Animates the small chicken and lets it move
    animate() {
        this.playSmallChickenWalkingAnimation();
        this.smallChickenIsMovingLeft();
        this.playSmallChickenDeathAnimation();
    };

    // Plays the walking animation of the small chicken
    playSmallChickenWalkingAnimation() {
        setInterval( () => {
            if(gameStarted && !gameEnded && !gamePaused && !this.isDead() && !this.isHurt()) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 10);
    }

    // Moves the small chicken to the left
    smallChickenIsMovingLeft() {
        setInterval( () => {
            if(gameStarted && !gameEnded && !gamePaused && !this.isDead() && !this.isHurt()) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    // Plays the Death image of the small chicken
    playSmallChickenDeathAnimation() {
        setInterval( () => {
            if (this.isDead() && !gamePaused) {
                this.loadImage('assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png');
            }
        }, 1000 / 30)
    }
} 