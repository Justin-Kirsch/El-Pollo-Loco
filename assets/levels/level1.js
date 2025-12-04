// Creates new Level with 5 normal chickens, 4 small chicken, 1 endboss, clouds, backgroundobjects, pickupable bottles and coins
function createLevel() {
    return new Level(
        [
            new Chicken(900),
            new Chicken(1200),
            new Chicken(1600),
            new Chicken(2000),
            new Chicken(2680),
        ],
        [
            new SmallChicken(600),
            new SmallChicken(1850),
            new SmallChicken(2350),
            new SmallChicken(2580),
        ],
        [
            new Endboss()
        ],
    
        [
            new Cloud('/assets/img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('/assets/img/5_background/layers/4_clouds/2.png', 500),
            new Cloud('/assets/img/5_background/layers/4_clouds/1.png', 1500),
            new Cloud('/assets/img/5_background/layers/4_clouds/2.png', 2000),
            new Cloud('/assets/img/5_background/layers/4_clouds/1.png', 2500),
            new Cloud('/assets/img/5_background/layers/4_clouds/2.png', 3000),
            new Cloud('/assets/img/5_background/layers/4_clouds/1.png', 3500),
            new Cloud('/assets/img/5_background/layers/4_clouds/2.png', 4000),
            new Cloud('/assets/img/5_background/layers/4_clouds/1.png', 4500),
            new Cloud('/assets/img/5_background/layers/4_clouds/2.png', 5000),
        ], 
        [
            new BackgroundObject('assets/img/5_background/layers/air.png', -720),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', -720),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', -720),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', -720),
            new BackgroundObject('assets/img/5_background/layers/air.png', -1),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', -1),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', -1),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', -1),
            new BackgroundObject('assets/img/5_background/layers/air.png', 718),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', 718),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', 718),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', 718),
            new BackgroundObject('assets/img/5_background/layers/air.png', 1437),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', 1437),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', 1437),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', 1437),
            new BackgroundObject('assets/img/5_background/layers/air.png', 2154),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/2.png', 2154),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/2.png', 2154),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/2.png', 2154),
            new BackgroundObject('assets/img/5_background/layers/air.png', 2871),
            new BackgroundObject('assets/img/5_background/layers/3_third_layer/1.png', 2871),
            new BackgroundObject('assets/img/5_background/layers/2_second_layer/1.png', 2871),
            new BackgroundObject('assets/img/5_background/layers/1_first_layer/1.png', 2871),
        ],
        [
            new Bottle(400, 350, 1),
            new Bottle(600, 350, 2),
            new Bottle(800, 350, 1),
            new Bottle(1000, 350, 2),
            new Bottle(1200, 350, 1),
            new Bottle(1400, 350, 2),
            new Bottle(1600, 350, 1),
            new Bottle(1800, 350, 2)
        ],
        [
            new Coin(400, 230),
            new Coin(440, 190),
            new Coin(480, 150),
    
            new Coin(820, 190),
            new Coin(860, 230),
            new Coin(900, 190),
    
            new Coin(1140, 190),
            new Coin(1180, 150),
            new Coin(1220, 190),
            new Coin(1260, 230),
        ])
}