class EndbossHealthBar extends StatusBar {
    IMAGES_HEALTH = [
        'assets/img/7_statusbars/2_statusbar_endboss/0.png',
        'assets/img/7_statusbars/2_statusbar_endboss/20.png',
        'assets/img/7_statusbars/2_statusbar_endboss/40.png',
        'assets/img/7_statusbars/2_statusbar_endboss/60.png',
        'assets/img/7_statusbars/2_statusbar_endboss/80.png',
        'assets/img/7_statusbars/2_statusbar_endboss/100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.positionX = 400;
        this.positionY = 50;
        this.height = 80;
        this.width = 300;
        this.setPercentage(this.IMAGES_HEALTH, 100);
    }
}