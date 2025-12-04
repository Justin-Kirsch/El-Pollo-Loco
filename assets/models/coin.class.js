class Coin extends DrawableObject {
    height = 50;
    width = 50;
    collectSound = new Audio('assets/audio/pickup.mp3');
    collectSoundPlayed = false;
    IMAGES_COIN = [
        'assets/img/8_coin/coin_1.png',
        'assets/img/8_coin/coin_2.png'
    ]


    constructor(positionX, positionY) {
        super();
        this.positionX = positionX;
        this.positionY = positionY;
        this.loadImage('assets/img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_COIN);
        this.animateCoin();
    }

    // Plays the animation for the coin
    animateCoin() {
        setInterval(() => {
            if(gameIsRunning()) {
                this.playAnimation(this.IMAGES_COIN);
            }
        }, 120);
    }

    // plays any animation for the coin given as "images"
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    // Plays the sound if the coin has been collected
    playCollectSound() {
        if (!this.collectSoundPlayed) {
            this.collectSound.volume = 0.15;
            this.collectSound.play();
            this.scollectSoundPlayed = true;
        }
    }
}