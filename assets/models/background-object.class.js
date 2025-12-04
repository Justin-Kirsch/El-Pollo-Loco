class BackgroundObject extends MoveableObject {
    width = 720;
    height = 480;

    
    constructor(imagePath, positionX) {
        super().loadImage(imagePath);
        this.positionX = positionX;
        this.positionY = 480 - this.height;
    };
}