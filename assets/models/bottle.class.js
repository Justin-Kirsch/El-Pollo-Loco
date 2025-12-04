class Bottle extends DrawableObject {
    height = 80;
    width = 70;

    
    constructor(positionX, positionY, imageNumber) {
        super();
        this.positionX = positionX;
        this.positionY = positionY;
        this.loadImage(`assets/img/6_salsa_bottle/${imageNumber}_salsa_bottle_on_ground.png`);
    }
}