class Keybindings {
    LEFT = false;
    RIGHT = false;
    UP = false;
    SPACE = false;
};


// Eventlistener for buttons pressed
//LEFT
document.getElementById('buttonLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.LEFT = true;
    }
});


document.getElementById('buttonLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.LEFT = false;
    }
});


//RIGHT
document.getElementById('buttonRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.RIGHT = true;

    }
});


document.getElementById('buttonRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.RIGHT = false;
    }
});


//UP
document.getElementById('buttonUp').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.UP = true;
    }
});


document.getElementById('buttonUp').addEventListener('touchend', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.UP = false;
    }

});


// D
document.getElementById('buttonThrow').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.SPACE = true;
    }

});


document.getElementById('buttonThrow').addEventListener('touchend', (e) => {
    e.preventDefault();
    if(!gamePaused) {
        keybindings.SPACE = false;
    }

});


window.addEventListener('keyup', (event) => {
    if (event.keyCode == '32' && gameStarted && !gamePaused && !gameEnded) {
        // KEY_D
        keybindings.SPACE = false;
    }
    else if (event.keyCode == '38' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.UP = false;
    }
    else if (event.keyCode == '37' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.LEFT = false;
    }
    else if (event.keyCode == '39' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.RIGHT = false;
    }
});


// Eventlistener for keypressed (LEFT ARROW; RIGHT ARROW; UP ARROW; SPACE ; D)
window.addEventListener('keydown', (event) => {
    if (event.keyCode == '32' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.SPACE = true;
    }
    else if (event.keyCode == '38' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.UP = true;
        world.character.jump();
    }
    else if (event.keyCode == '37' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.LEFT = true;
    }
    else if (event.keyCode == '39' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.RIGHT = true;
    }
});


window.addEventListener('keyup', (event) => {
    if (event.keyCode == '32' && gameStarted && !gamePaused && !gameEnded) {
        // KEY_D
        keybindings.SPACE = false;
    }
    else if (event.keyCode == '38' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.UP = false;
    }
    else if (event.keyCode == '37' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.LEFT = false;
    }
    else if (event.keyCode == '39' && gameStarted && !gamePaused && !gameEnded) {
        keybindings.RIGHT = false;
    }
});
