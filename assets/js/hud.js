//Eventlistener for the play button in the top section of the hud
document.getElementById('playButton').addEventListener('click', (e) => {
    e.preventDefault();
    if(!gameStarted && !gamePaused && !gameEnded) {
        init();
        gamePaused = false;
        updatePauseOverlay();
    } else if(gameStarted && !gamePaused) {
        document.getElementById('playPauseButton').src = 'assets/img/control images/play-buttton.png';
        gamePaused = true;
        updatePauseOverlay();
    } else if (gameStarted && gamePaused) {
        document.getElementById('playPauseButton').src = 'assets/img/control images/pause.png';
        gamePaused = false;
        updatePauseOverlay();
    } 
});

// Eventlistener for the sound button, which de-/activates the sound
document.getElementById('soundButton').addEventListener('click', (e) => {
    e.preventDefault();
    if(!soundIsMuted) {
        soundIsMuted = true;
        document.getElementById('soundButtonImage').src = './assets/img/control images/mute.png';
    } else if (soundIsMuted) {
        soundIsMuted = false;
        document.getElementById('soundButtonImage').src = './assets/img/control images/speaker-filled-audio-tool.png';
    }
});

// Eventlistener for the help Button, which shows the Game Information (Storyline, Controls, About)
document.getElementById('helpButton').addEventListener('click', (e) => {
    wasPausedBeforeHelp = gamePaused;
    gamePaused = true;
    updatePauseOverlay();

    document.getElementById('informationPopUpContainer').style.display = 'flex';
    renderGameInformationContainer('storyline');
    removeAllHighlights();
    document.getElementById('storylineButton').classList.add('active');
});

// Eventlistener for the storyline button, which renders the storyline and highlights the storyline button
document.getElementById('storylineButton').addEventListener('click', e => {
    removeAllHighlights();                                                      //Removes all Highlights
    renderGameInformationContainer('storyline');                                //Renders the Storyline
    document.getElementById('storylineButton').classList.add('active');         //Highlights the storyline button
});

// Eventlistener for the controls button, which renders the controls and highlights the controls button
document.getElementById('controlButton').addEventListener('click', e => {
    removeAllHighlights();                                                      //Removes all Highlights
    renderGameInformationContainer('controls');                                 //Renders the controls
    document.getElementById('controlButton').classList.add('active');           //Highlights the controls button
});

// Eventlistener for the about button, which renders the about section and highlights the about button
document.getElementById('aboutButton').addEventListener('click', e => {
    removeAllHighlights();                                                      //Removes all Highlights
    renderGameInformationContainer('about');                                    //Renders the about section
    document.getElementById('aboutButton').classList.add('active');             //Highlights the about button
});

// Eventlistener for the Close button of the game information container
document.getElementById('closeOverlayButton').addEventListener('click', e => {
    gamePaused = wasPausedBeforeHelp;                                           // Restore game pause state from before opening the info popup
    document.getElementById('informationPopUpContainer').style.display = 'none';
    updatePauseOverlay();
});

// Renders the game information Container
function renderGameInformationContainer(section) {
    let container = document.getElementById('gameInformationContainer');
    container.innerHTML = '';
    if(section === 'storyline') {
        container.innerHTML = renderStoryline();
    } else if (section === 'controls') {
        container.innerHTML = renderControlsInformation();
    } else if (section === 'about') {
        container.innerHTML = renderAboutInformation();
    }
}

// Returns the html code for the storyline, which will be rendered in the game information container
function renderStoryline() {
    return /*html*/ `
            <div class="gameStorylineContainer gameInformation">
                <p class="gameInformationText">
                    In a small Mexican village called San Miguelito, an unusual threat was raging: giant chickens! 
                    But Pepe Peligroso, brave and determined, stood up to them. Armed with nothing but empty salsa bottles
                    and a pinch of courage, he stormed into the field. 
                </p>
            </div>`;
}

// Returns the html code for the controls, which will be rendered in the game information container
function renderControlsInformation() {
    return /*html*/ `
                    <div class="gameInformation controlsLayout">
                        <h3 class="controlsTitle">Controls</h3>
                        <div class="controlsGrid">
                            <div class="controlColumn">
                                <div class="controlItem">
                                    <img class="controlKeyImage" src="./assets/img/control images/left-arrow.png" alt="Left arrow icon">
                                    <div class="controlTextGroup">
                                        <span class="controlAction">Walk Left</span>
                                    </div>
                                </div>
                                <div class="controlItem">
                                    <img class="controlKeyImage" src="./assets/img/control images/right-arrow.png" alt="Right arrow icon">
                                    <div class="controlTextGroup">
                                        <span class="controlAction">Walk Right</span>
                                    </div>
                                </div>
                            </div>
                            <div class="controlColumn">
                                <div class="controlItem">
                                    <img class="controlKeyImage" src="./assets/img/control images/up-arrow.png" alt="Up arrow icon">
                                    <div class="controlTextGroup">
                                        <span class="controlAction">Jump</span>
                                    </div>
                                </div>
                                <div class="controlItem">
                                    <img class="controlSpaceKeyImage" src="./assets/img/control images/throwing.png" alt="Throw icon">
                                    <div class="controlTextGroup">
                                        <span class="controlAction spaceLabel">Throw</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
}

// Returns the html code for the about section, which will be rendered in the game information container
function renderAboutInformation() {
    return /*html*/ ` 
                    <div class="aboutSection gameInformation">
                        <span class="gameInformationText">Images from <a class="linkToSource gameInformationText" href="https://developerakademie.com">Developer Akademia</a> & <a class="linkToSource gameInformationText" href="https://www.flaticon.com/">Flaticon</a> <br></span>
                        <span class="gameInformationText">Sounds from <a class="linkToSource gameInformationText" href="https://freesound.org/">freesound</a></span>
                        <span></span>
                    </div>`;
}

// Removes all highlighted buttons
function removeAllHighlights() {
    document.getElementById('storylineButton').classList.remove('active');
    document.getElementById('controlButton').classList.remove('active');
    document.getElementById('aboutButton').classList.remove('active');
}