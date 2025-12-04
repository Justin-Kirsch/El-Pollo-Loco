class Character extends MoveableObject {
    height = 200;
    width = 100;
    positionY = 230;
    offsetTop = 120;
    offsetBottom = 40;
    offsetLeft = 15;
    offsetRight = 15;
    characterStartIdleAt = 3;
    characterStartLongIdleAt = 6;
    world;
    speed = 5;
    walking_sound = new Audio('./assets/audio/walking.mp3');
    immortalFor = 1.3;
    isImmortal = false;
    soundVolume = globalVolume / 2;
    walkingSoundVolume = globalVolume;
    walkingSoundPlayed = false;


    IMAGES_IDLE = [
        'assets/img/2_character_pepe/1_idle/idle/I-1.png',
        'assets/img/2_character_pepe/1_idle/idle/I-2.png',
        'assets/img/2_character_pepe/1_idle/idle/I-3.png',
        'assets/img/2_character_pepe/1_idle/idle/I-4.png',
        'assets/img/2_character_pepe/1_idle/idle/I-5.png',
        'assets/img/2_character_pepe/1_idle/idle/I-6.png',
        'assets/img/2_character_pepe/1_idle/idle/I-7.png',
        'assets/img/2_character_pepe/1_idle/idle/I-8.png',
        'assets/img/2_character_pepe/1_idle/idle/I-9.png',
        'assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];


    IMAGES_LONG_IDLE = [
        'assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        'assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];


    IMAGES_WALKING = [
        'assets/img/2_character_pepe/2_walk/W-21.png',
        'assets/img/2_character_pepe/2_walk/W-22.png',
        'assets/img/2_character_pepe/2_walk/W-23.png',
        'assets/img/2_character_pepe/2_walk/W-24.png',
        'assets/img/2_character_pepe/2_walk/W-25.png',
        'assets/img/2_character_pepe/2_walk/W-26.png'
    ];


    IMAGES_JUMPING = [
        'assets/img/2_character_pepe/3_jump/J-31.png',
        'assets/img/2_character_pepe/3_jump/J-32.png',
        'assets/img/2_character_pepe/3_jump/J-33.png',
        'assets/img/2_character_pepe/3_jump/J-34.png',
        'assets/img/2_character_pepe/3_jump/J-35.png',
        'assets/img/2_character_pepe/3_jump/J-36.png',
        'assets/img/2_character_pepe/3_jump/J-37.png',
        'assets/img/2_character_pepe/3_jump/J-38.png',
        'assets/img/2_character_pepe/3_jump/J-39.png'
    ];


    IMAGES_DYING = [
        'assets/img/2_character_pepe/5_dead/D-51.png',
        'assets/img/2_character_pepe/5_dead/D-52.png',
        'assets/img/2_character_pepe/5_dead/D-53.png',
        'assets/img/2_character_pepe/5_dead/D-54.png',
        'assets/img/2_character_pepe/5_dead/D-55.png',
        'assets/img/2_character_pepe/5_dead/D-56.png',
        'assets/img/2_character_pepe/5_dead/D-57.png'
    ];


    IMAGES_HURT = [
        'assets/img/2_character_pepe/4_hurt/H-41.png',
        'assets/img/2_character_pepe/4_hurt/H-42.png',
        'assets/img/2_character_pepe/4_hurt/H-43.png'
    ];
    

    constructor(positionX) {
        super().loadImage('assets/img/2_character_pepe/2_walk/W-21.png');
        this.positionX = positionX;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
        this.resetCharacter();
    }

    // Animates the character
    animate() {
        this.characterIsWalking();
        this.characterJumps();
        this.characterAnimationInterval();
    };

    // checks if the character is walking and if so, moves the character accordingly
    characterIsWalking() {
        setInterval(() => {
            if (this.characterIsWalkingLeft()) {
                this.characterMovesLeft();
            } else if (this.characterIsWalkingRight()) {
                this.characterMovesRight();
            }
            this.world.camera_positionX = -this.positionX + 100;
        }, 1000 / 60);
    };

    // Character moves left and play walking sound
    characterMovesLeft() {
        this.moveLeft();
        this.otherDirection = true;
        this.playSound(this.walkingSoundPlayed, this.walking_sound, this.walkingSoundVolume);
    };

    // Character moves right and play walking sound
    characterMovesRight() {
        this.moveRight();
        this.otherDirection = false;
        this.playSound(this.walkingSoundPlayed, this.walking_sound, this.walkingSoundVolume);
    };

    // Key/Button to move left has been pressed, character is not out of bounds and game is not paused
    characterIsWalkingLeft() {
        return this.world.keybindings.LEFT && this.positionX > 0 && !gamePaused
    };

    // Key/Button to move right has been pressed, character is not out of bounds and game is not paused
    characterIsWalkingRight() {
        return this.world.keybindings.RIGHT && this.positionX < this.world.level.level_end_positionX && !gamePaused
    };

    // Checks if the character is jumping and if so, lets the character jump
    characterJumps() {
        setInterval(() => {
            if(this.checkIfCharacterIsJumping()) {
                this.jump();
                this.playSound(this.jumpSoundPlayed, this.jumpSound, this.soundVolume)
                this.jumpSoundPlayed = false;
            };
        }, 1000 / 60);
    };

    // Key/Button to move jump has been pressed, character is not already in the air
    checkIfCharacterIsJumping() {
        return this.world.keybindings.UP && !this.isAirborne()
    }

    // Checks the if the character is dead/hurt/airborne/walking and plays the correct animation
    characterAnimationInterval() {
        setInterval( () => {
            if (this.isDead() && !gamePaused) {
                this.playAnimation(this.IMAGES_DYING);
            } else if (!this.isDead() && this.isHurt() && !this.isAirborne() && !gamePaused) {
                 this.playAnimation(this.IMAGES_HURT);
            } else if(this.isAirborne() && this.positionY < 230 && !gamePaused) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if(this.world.keybindings.RIGHT || this.world.keybindings.LEFT && !gamePaused) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000 / 15);
    }
    
    // Checks if the player has bottles in the inventory
    checkInventoryForBottles() {
        if(this.world.bottlesAmount > 0) {
            return true;
        }
    }
    
    // Checks if the Character is Idle or Long Idle and plays the correct animation
    playCharacterIdleAnimation() {
        setTimeout(() => {
            if(this.isLongIdle()) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            } else if(this.isIdle()) {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 400);
    }

    // Resets the Characters health and position
    resetCharacter() {
        this.health = 100;
        this.positionX = 120;
        this.positionY = 230;
    }
}