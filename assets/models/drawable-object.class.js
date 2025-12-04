class DrawableObject {
    positionX;
    positionY;
    height;
    width;
    img;
    imageCache = {};
    currentImage = 0;

    //set the source of the image, path is required
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    // Draws image on the canvas
    draw(ctx) {
        ctx.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    // Sets the source of images in an array
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    // Needs to be deleted when almost done
    drawEntityFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof SmallChicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.positionX,this.positionY, this.width, this.height);
            ctx.stroke();
        }
    }

    // Needs to be deleted when almost done
    drawObjectFrame(ctx) {
        if(this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.positionX,this.positionY, this.width, this.height);
            ctx.stroke();
        }
    }
}

