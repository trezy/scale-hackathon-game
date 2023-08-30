// Module imports
import { makeStore } from 'statery'





// Local imports
import { CONTROL_BINDINGS } from '../data/controlBindings.js'
import { createEnemy } from '../game/entity/createEnemy.js'
import { createPlayer } from '../game/entity/createPlayer.js'
import { generateInitialControlState } from '../helpers/generateInitialControlState.js'





export const store = makeStore({
	areAssetsLoaded: false,

	assetLoadingProgress: 0,

	camera: {
		position: {
			x: 0,
			y: 0,
		},
	},

	controlBindings: CONTROL_BINDINGS,

	controlState: generateInitialControlState(),

	delta: 0,

	deltaMS: 0,

	/** @type {object[]} */
	entities: [
		createEnemy(100, 100, 20, 20),
		createEnemy(150, 80, 20, 20),
		createPlayer(),
	],

	isLoadingAssets: false,

	isInitialising: false,

	viewport: {
		height: 0,
		width: 0,
	},
})
