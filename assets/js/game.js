let canvas;
let world;
let keybindings;
let gameStarted = false;
let gamePaused = false;
let gameEnded = false;
let wasPausedBeforeHelp = false;

let gameIntervals = [];
let endScreenContainer = document.getElementById('endScreenContainer');
let globalVolume = 0.1;
let soundIsMuted = false;

// Add orientation detection
document.addEventListener('DOMContentLoaded', function() {
    // Check orientation on page load
    checkOrientation();
    
    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
});

/**
 * Checks the device orientation and shows/hides the orientation message
 */
function checkOrientation() {
    // Get the orientation message container
    const orientationMessage = document.getElementById('orientationMessageContainer');
    
    // Check if the device is in portrait mode
    const isPortrait = window.innerHeight > window.innerWidth;
    
    // Show/hide orientation message based on orientation
    if (orientationMessage) {
        if (isPortrait) {
            orientationMessage.style.display = 'flex';
        } else {
            orientationMessage.style.display = 'none';
        }
    }
}

// Game initialization
function init() {
    gameEnded = false;
    canvas = document.getElementById('canvas');
    loadGame(canvas);
    keybindings = new Keybindings();                                                        // Creates new keybindings
    world = new World(canvas, keybindings);                                                 // Creates new world
    document.getElementById('playPauseButton').src = 'assets/img/control images/pause.png';
    endScreenContainer.style.display = 'none';
    gameStarted = true;
    updatePauseOverlay();
}

// Hides Startscreen and shows the game
function loadGame(canvas) {
    let startScreen = document.getElementById('startScreenContainer');

    startScreen.style.display = 'none';
    canvas.style.display = 'block';
    
    // Check orientation when game loads
    checkOrientation();
    updatePauseOverlay();
}

// Clears all Intervals and returns
function endGame() {
    clearAllIntervals();
    gameStarted = false;
    gameEnded = true;
    updatePauseOverlay();
    return endScreenContainer.style.display = 'flex';
}

// Clears all intervals that are running
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

// Restarts all game intervals
function restartGameIntervals() {
    world.level.chickens.forEach(chicken => {
        chicken.animate();
    });
    world.level.clouds.forEach(cloud => {
        cloud.animate();
    });
    world.level.endboss.forEach(endboss => {
        endboss.animate();
    });
    world.level.smallChickens.forEach(smallChicken => {
        smallChicken.animate();
    });
}

function gameIsRunning() {
    return gameStarted && !gameEnded && !gamePaused
}

function gameIsPaused() {
    return gameStarted && !gameEnded && gamePaused
}

function gameHasEnded() {
    return !gameStarted && gameEnded && !gamePaused
}

function updatePauseOverlay() {
    const overlay = document.getElementById('pauseOverlay');
    if (!overlay) return;
    if (gameIsPaused()) {
        overlay.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
    }
}