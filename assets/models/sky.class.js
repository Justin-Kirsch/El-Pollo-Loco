class Sky extends MoveableObject{
    height = 480;
    width = 720;
    positionX = 0;
    positionY = 0;

    
    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}