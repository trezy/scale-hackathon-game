// Module imports
import { makeStore } from 'statery'





// Local imports
import { CONTROL_BINDINGS } from '../data/controlBindings.js'
import { createEnemy } from '../game/entity/createEnemy.js'
import { createPlayer } from '../game/entity/createPlayer.js'
import { generateInitialControlState } from '../helpers/generateInitialControlState.js'





export const store = makeStore({
	camera: {
		position: {
			x: 0,
			y: 0,
		},
	},

	controlBindings: CONTROL_BINDINGS,

	controlState: generateInitialControlState(),

	delta: 0,

	/** @type {object[]} */
	entities: [
		createEnemy(100, 100, 10, 10),
		createEnemy(150, 80, 10, 10),
		createPlayer(),
	],

	viewport: {
		height: 0,
		width: 0,
	},
})
