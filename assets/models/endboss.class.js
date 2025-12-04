class Endboss extends MoveableObject {
    height = 260;
    width = 250;
    positionX = 2700;
    positionY = 175;
    currentImage = 0;
    immortalFor = 1;
    isAlerted = false;
    isInAttackMode = false;
    isAttacking = false;
    bossIsHurt = false;
    isDying = false;
    deathAnimationIndex = 0;
    attackAnimationIndex = 0;
    hurtAnimationIndex = 0;
    IMAGES_WALKING = [
        'assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        'assets/img/4_enemie_boss_chicken/1_walk/G4.png',
    ];


    IMAGES_ALERT = [
        'assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        'assets/img/4_enemie_boss_chicken/2_alert/G11.png',
    ];


    IMAGES_ATTACK = [
        'assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        'assets/img/4_enemie_boss_chicken/3_attack/G20.png',
    ];


    IMAGES_HURT = [
        'assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];


    IMAGES_DEAD = [
        'assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        'assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 2.5;
        this.animate();
    };

    // Animates the endboss
    animate() {
        this.endbossWalks();
        this.endbossFights();
    };

    // Checks repeatedly which animation needs to be running
    endbossFights() {
        setInterval(() => {
            this.playEndBossAnimations();
        }, 100);
    }

    // Checks which animation needs to be running
    playEndBossAnimations() {
        if(this.endbossIsAlerted()) {
            this.endBossAlertAnimation();
        } else if (this.endbossIsAttacking()) {
            this.playAttackAnimation();
        } else if (this.isWalking()) {
            this.endBossIsWalking();
        } else if (this.endbossIsHurt()){
            this.playHurtAnimation();
        } else if (this.endbossIsDying()) {
            this.playEndBossDyingAnimation();
        }
    };

    // The Endboss moves towards the player
    endbossWalks() {
        setInterval(() => {
            if (this.isWalking()) {
                this.endBossMoves();
            }
        }, 15);
    };

    // Checks which direction the endboss needs to face and moves into the direction
    endBossMoves() {
        this.endBossFollowsCharacter();
        if (this.isFacingRight()) {
            this.moveRight();
        } else if (this.isFacingLeft()){
            this.moveLeft();
        }
    };

    // Plays the Alert animation, when the character has reached the range of the chicken
    endBossAlertAnimation() {
        this.playAnimation(this.IMAGES_ALERT);
        setTimeout(() => {
                this.isInAttackMode = true;
        }, 500);
    };
    
    // Sets the direction the endboss needs to face in order to follow the character
    endBossFollowsCharacter() {
        if (this.endbossNeedsToTurnRight()) {
            this.otherDirection = true;
        } else if (this.endbossNeedsToTurnLeft()) {
            this.otherDirection = false;
        }
    };

    // Plays the walking animation
    endBossIsWalking() {
        this.playAnimation(this.IMAGES_WALKING);
    };

    // Plays the dying animation
    playEndBossDyingAnimation() {
        if (this.deathAnimationIndex <= (this.IMAGES_DEAD.length - 1)) {
            this.loadImage(this.IMAGES_DEAD[this.deathAnimationIndex]);
            gameEnded = true;
            this.deathAnimationIndex++;
        }
    };

    // Plays the attack animation
    playAttackAnimation() {
        if(this.attackAnimationIndex <= this.IMAGES_ATTACK.length -1) {
            this.loadImage(this.IMAGES_ATTACK[this.attackAnimationIndex]);
            this.attackAnimationIndex++;
        } else if (this.attackAnimationIndex >= this.IMAGES_ATTACK.length) {
            this.isAttacking = false;
            this.attackAnimationIndex = 0;
        }
    };

    // Plays the hurt animation
    playHurtAnimation() {
        if(this.hurtAnimationIndex <= this.IMAGES_HURT.length -1) {
            this.loadImage(this.IMAGES_HURT[this.hurtAnimationIndex]);
            this.hurtAnimationIndex++;
        } else if (this.hurtAnimationIndex >= this.IMAGES_HURT.length) {
            this.bossIsHurt = false;
            this.hurtAnimationIndex = 0;
        }
    };

    // Endboss is facing Right
    isFacingRight() {
        return this.otherDirection && this.isInAttackMode && !this.isDead() && !this.isAttacking
    }

    // Endboss is facing Left
    isFacingLeft() {
        return !this.otherDirection && this.isInAttackMode && !this.isDead() && !this.isAttacking
    }

    // Endboss is attacking
    endbossIsAttacking() {
        return gameIsRunning() && !this.isDead() && !this.isHurt() && this.isInAttackMode && this.isAttacking;
    };

    // Endboss needs to turn right to follow the character
    endbossNeedsToTurnRight() {
        return gameIsRunning() && this.positionX <= world.character.positionX && !this.isAttacking
    };

    // Endboss needs to turn left to follow the character
    endbossNeedsToTurnLeft() {
        return gameIsRunning() && this.positionX >= world.character.positionX && !this.isAttacking
    };

    // Endboss is walking
    isWalking() {
        return gameIsRunning() && this.isInAttackMode && !this.isAttacking && !this.isDead() && !this.bossIsHurt
    };

    // Endboss is hurt
    endbossIsHurt () {
        return gameIsRunning() && !this.isDead() && this.bossIsHurt
    };

    // Endboss is in alert mode
    endbossIsAlerted() {
        return gameIsRunning() && this.isAlerted && !this.isInAttackMode
    };

    // Endboss is Dead
    endbossIsDying() {
        return this.isDead() & !this.isDying
    };
}


