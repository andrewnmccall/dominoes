import {
	Application, Assets, Sprite, Graphics
} from '../node_modules/pixi.js/dist/pixi.mjs';


/**
 * @param {Array} array
 * @return {Array}
 */
function shuffle(array) {
	let currentIndex = array.length; let randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}

class Domino {
	/** @property {Number} */
	#x;
	#y;

	constructor(args = {}) {
		this.#x = args.x;
		this.#y = args.y;
	}

	get x() {
		return this.#x;
	}

	get y() {
		return this.#y;
	}
}

class Player {
	/** @property {Domino[]} */
	#dominoes = [];

	setDominoes(domnioes) {
		this.#dominoes = domnioes;
	}
}

class DominoesGame {
	/** @property {Player[]} */
	#players = [];
	/** @property {Domino[]} */
	#dominoes = [];
	constructor() {
		for (let x = 0; x <= 6; x++) {
			for (let y = x; y <= 6; y++) {
				this.#dominoes.push(new Domino({x, y}));
			}
		}
		this.#dominoes = shuffle(this.#dominoes);
		for (let x = 0; x < 4; x++) {
			this.#players.push(new Player());
			this.#players[x].setDominoes(this.#dominoes.slice(x*9, 9));
		}
	}

	/**
	 * @return {Domino[]}
	 */
	getDominoes() {
		return this.#dominoes;
	}
}

// const gamePanel = document.getElementById('game_panel');
// const game = new DominoesGame();
// game.getDominoes().forEach((dominoe) => {
// 	const dominoeEl = document.createElement('anm-dominoe');
// 	dominoeEl.innerText = `${dominoe.x}|${dominoe.y}`;
// 	gamePanel.appendChild(dominoeEl);
// });



// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
// const texture = await Assets.load('bunny.png');
const bunny = new Graphics();
bunny.beginFill(0xff0000);
bunny.drawRect(0, 0, 200, 100);

// This creates a texture from a 'bunny.png' image
// const bunny = new Sprite(texture);

// Setup the position of the bunny
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Rotate around the center
bunny.x = 0.5;
bunny.y = 0.5;

// Add the bunny to the scene we are building
app.stage.addChild(bunny);

// Listen for frame updates
app.ticker.add(() => {
	// each frame we spin the bunny around a bit
	bunny.rotation += 0.01;
});
