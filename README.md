# El Pollo Loco

El Pollo Loco is a small 2D browser game inspired by classic side-scrolling platformers. You play as **Pepe Peligroso**, a courageous hero from the Mexican village of San Miguelito, who takes on an unusual threat: **giant chickens**. Armed only with empty salsa bottles and your reflexes, you must fight your way through the fields and bring peace back to the village.

<img width="855" height="645" alt="{A70F06AF-6659-471D-947C-8111DAEC55E7}" src="https://github.com/user-attachments/assets/56ad80bf-4501-476b-b65a-5b26cb60eccf" />

## Features

- **Arcade-style side-scrolling gameplay** on an HTML5 canvas
- **Story-driven intro** explaining Pepe Peligroso's mission
- **Boss fight** against a giant chicken end boss
- **Collectibles** such as coins and bottles
- **HUD with status bars** for health, coins, bottles, and boss health
- **Pause and sound controls** directly in the HUD
- **Built-in help overlay** for
  - Storyline
  - Controls ("How to play")
  - About / credits
- **Mobile-friendly layout** with on-screen touch controls for movement, jump, and throw

## Storyline

In a small Mexican village called **San Miguelito**, an unusual threat has appeared: **giant chickens** are terrorizing the fields.

But **Pepe Peligroso**, brave and determined, refuses to run away. Armed with nothing but empty salsa bottles and a pinch of courage, he storms into the fields to face the chaos and restore peace to his home.

## How to Play

### Goals

- **Survive** the dangers of the level.
- **Defeat the chickens** and their **giant end boss**.
- **Collect coins and bottles** to increase your resources and effectiveness.

### Keyboard Controls (Desktop)

Depending on how you configure the game in `game.js` / `keybindings.class.js`, the typical controls are:

- **Left**: Move Pepe to the left
- **Right**: Move Pepe to the right
- **Up / Space**: Jump
- **Throw**: Throw a bottle (when available)

> Note: The exact keys are configured in the keybinding logic. You can also see a visual explanation of the controls in the in-game **info menu** under **"How to play"**.

### On-Screen Controls (Mobile / Touch)

On touch devices you can use the on-screen buttons displayed in the HUD:

- **Left arrow**: Walk left
- **Right arrow**: Walk right
- **Up arrow**: Jump
- **Throw icon**: Throw a bottle

The HUD also includes:

- **Play / Pause button**: Start or pause the game
- **Sound button**: Toggle sound on/off
- **Info button ("i")**: Open the game information (Storyline, How to play, About)

### In-Game Help

Click / tap the **info button** in the top HUD area to open the information overlay. There you will find:

- **Storyline**: Short story about Pepe Peligroso and the chickens
- **How to play**: Visual explanation of the controls with icons
- **About**: Credits for images and sounds

## Running the Game Locally

This project is a **pure front-end game** built with HTML, CSS, and JavaScript.

### Option 1: Open `index.html` directly

1. Clone or download this repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge, etc.).

> Some browsers restrict local file access for certain features. If something does not work correctly, use Option 2 and run a small local server.

### Option 2: Run a simple local web server (recommended)

From the project root (`El Pollo Loco`), you can for example:

- Use a VS Code extension like **Live Server**, or
- Use any simple HTTP server (e.g. `npx serve`, `http-server`, etc.).

Then open the shown URL (usually `http://localhost:...`) in your browser.

## Project Structure

The core structure looks like this:

- `index.html` – Main entry point and canvas / HUD layout
- `assets/css/` – Styles for layout, animations and HUD
- `assets/js/`
  - `game.js` – Game initialization and main game logic wiring
  - `hud.js` – HUD behavior, pause/sound/info controls and information overlay
- `assets/models/` – Game classes and logic, e.g.
  - `world.class.js` – World handling and canvas drawing
  - `character.class.js` – Player character (Pepe Peligroso)
  - `chicken.class.js`, `smallChicken.class.js`, `endboss.class.js` – Enemies and boss
  - `statusbar.class.js`, `healthbar.class.js`, `coinbar.class.js`, `bottlebar.class.js`, `endboss-healthbar.class.js` – UI bars
  - `moveable-object.class.js`, `drawable-object.class.js`, `throwable-object.class.js` – Base classes for game objects
  - `keybindings.class.js` – Keyboard / control mapping
  - `level.class.js` – Level configuration
- `assets/levels/level1.js` – Level definition
- `assets/img/` – Sprites, backgrounds, HUD icons, and UI graphics

## Technologies Used

- **HTML5 Canvas** for rendering the game world
- **JavaScript (ES6)** for game logic and object-oriented game architecture
- **CSS** for layout, animations, and responsive design

No external game engine is required; everything runs directly in the browser.

## Credits

- **Images / Sprites**: From [Developer Akademie](https://developerakademie.com) and [Flaticon](https://www.flaticon.com/)
- **Sounds**: From [freesound.org](https://freesound.org/)

(See the in-game **About** section for the same information.)

## License

Specify your preferred license here (for example MIT, Apache 2.0, etc.). If you are not sure yet, you can leave this section as a placeholder until you decide.
