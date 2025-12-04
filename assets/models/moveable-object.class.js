class MoveableObject extends DrawableObject {
    speed;
    otherDirection = false;
    speedY = -45;
    acceleration = 5;
    health = 100;
    lastHit = 0;
    lastThrow = 0;
    lastUsedKeyTime;
    immortalFor = 0;
    gravityInterval;
    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight = 0;
    jumpSound = new Audio ('assets/audio/jump.mp3');
    jumpSoundPlayed = false;
    dyingSound = new Audio('assets/audio/chicken.mp3')
    dyingSoundPlayed = false;
    dyingSoundVolume = globalVolume;

    // Applies gravity for the moveable object
    applyGravity() {
        setInterval(() => {
            this.gravity();
        }, 1000 / 25);
    };

    // Creates gravity for the moveable object
    gravity() {
        if(this.isAirborne() && !gamePaused || this.speedY > 0 && !gamePaused) {
            this.positionY -= this.speedY;
            this.speedY -= this.acceleration;
        }
    }

    // Checks if the moveable object is in the air
    isAirborne() {
        if (this instanceof ThrowableObject) { // Throwable Objects should always fall
            return true;
        } else {
        return this.positionY < 230;
        }
    }

    // Plays Animation if given an array of image sources
    playAnimation(images) {
        if(!gamePaused) {
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    };

    // Moves the Entity to the right
    moveRight() {
        if(gameStarted && !gameEnded) {
            this.positionX += this.speed;
        }
    };

    // Moves the Entity to the left
    moveLeft() {
        if(gameStarted && !gameEnded) {
            this.positionX -= this.speed;
        }
    };

    // Lets the Entity jump
    jump() {
        if(this.positionY == 230) {
            return this.speedY = 40;
        }
    };

    // Plays the Sound if it has not been played yet
    playSound(soundPlayed, sound, vol) {
        // Überprüfe, ob das Audio bereits abgespielt wurde
        if (!soundPlayed && !soundIsMuted) {
            // Wenn nicht, spiele das Audio ab
            sound.volume = Number(vol);
            sound.play();
            // Setze den Status auf abgespielt
            soundPlayed = true;
        }
    }

    // Checks if the moveableObject is colliding with an Entity
    isColliding(moveableObject) {
        if(this.offsetTop > 0) {
            return this.positionX + (this.width - this.offsetRight) > moveableObject.positionX &&
            this.positionY + this.height > moveableObject.positionY &&
            this.positionX + this.offsetLeft< moveableObject.positionX + moveableObject.width &&
            this.positionY + this.offsetTop < moveableObject.positionY + moveableObject.height;
        } else {
            return this.positionX + (this.width - this.offsetLeft) > moveableObject.positionX &&
            this.positionY + this.height > moveableObject.positionY &&
            this.positionX + this.offsetLeft < moveableObject.positionX + moveableObject.width &&
            this.positionY < moveableObject.positionY + moveableObject.height;
        }
    };

    // Character jumps on a moveable object and check for collision on the bottom end of the character
    charBottomCollidesWithChicken(moveableObject) {
       return this.positionX + this.width > moveableObject.positionX &&
                this.positionY + this.height - this.offsetBottom> moveableObject.positionY &&
                this.positionX < moveableObject.positionX + moveableObject.width;
    };
 
    // Damage an Entity
    hit(){
        if(!this.isHurt() && 
        !this.isFallingDown() && 
        !this.isDead() &&
        !this.isImmortal) {
            this.health -= 20;

            if(this.health < 0) {
                this.health = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
        this.isOnGround();
    };

    // MoveableObject is hit and returns the time passed since the last hit
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }

    // MoveableObject is Falling down
    isFallingDown() {
        return this.speedY < 0;
    }

    // MoveableObject is on ground level
    isOnGround () {
        if (this.positionY === 230) {
            this.speedY = 0;
        }
    }

    // MoveableObject health is 0
    isDead() {
        return this.health == 0;
    };

    // Creates a throwing cooldown
    throwBottleCooldown(throwDelay) {
        const currentTime = new Date().getTime();
        const timePassed = (currentTime - this.lastThrow) / 1000; // Differenz in Sekunden
        return timePassed < throwDelay;
    }

    // Checks last pressed key
    checkLastPressedKey() {
        return this.world.keybindings.UP ||
                this.world.keybindings.SPACE ||
                this.world.keybindings.LEFT ||
                this.world.keybindings.RIGHT
    }

    // Checks the time since the last key has been pressed
    lastKeyPressTimer() {
        if (this.checkLastPressedKey()) {
          this.lastUsedKeyTime = new Date().getTime() / 1000;
        }
    }

    // Checks if the character has not moved for a long time
    checkCharacterIdleStatus(idleTime) {
        const currentTimeInSeconds = new Date().getTime() / 1000;
        const currentIdleTime = currentTimeInSeconds - this.lastUsedKeyTime;
        return currentIdleTime >= idleTime;
    }

    // Character has not been moved for a short time
    characterIsIdle() {
        return gameStarted &&
                !gameEnded &&
                !this.isAirborne() &&
                !this.isDead() &&
                this.playerIsAFK() &&
                this.lastUsedKeyTime >= this.characterStartIdleAt &&
                this.lastUsedKeyTime < this.characterStartLongIdleAt
    }

        // Character has not been moved for a long time
    characterIsLongIdle() {
        return gameStarted &&
                !gameEnded &&
                !this.isAirborne() &&
                !this.isDead() &&
                this.playerIsAFK() &&
                this.lastUsedKeyTime > this.characterStartLongIdleAt
    }

    // Returns that no control key/button has been pressed
    playerIsAFK() {
        return !this.world.keybindings.RIGHT && 
                !this.world.keybindings.LEFT &&
                !this.world.keybindings.UP &&
                !this.world.keybindings.SPACE
    }

    // Returns the Idle state of the Character
    isIdle() {
        return this.checkCharacterIdleStatus(this.characterStartIdleAt) && gameStarted && !gameEnded && !gamePaused;
    }

    // Returns the Long Idle state of the character
    isLongIdle() {
        return this.checkCharacterIdleStatus(this.characterStartLongIdleAt) && gameStarted && !gameEnded && !gamePaused;
    }
}