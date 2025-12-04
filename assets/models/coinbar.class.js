class CoinBar extends StatusBar{
    IMAGES_COIN = [
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/0.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/20.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/40.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/60.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/80.png',
        'assets/img/7_statusbars/1_statusbar/1_statusbar_coin/100.png'
    ];

    
    constructor() {
        super();
        this.loadImages(this.IMAGES_COIN);
        this.positionX = 30;
        this.positionY = 60;
        this.height = 60;
        this.width = 200;
        this.setPercentage(this.IMAGES_COIN, 0);
    }

}