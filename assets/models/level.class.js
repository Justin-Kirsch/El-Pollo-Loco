class Level {
    chickens;
    smallChickens;
    endboss;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_positionX = 2700;

    
    constructor(chickens, smallChickens, endboss, clouds, backgroundObjects, bottles, coins) {
        this.chickens = chickens;
        this.smallChickens = smallChickens;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}