// Module imports
import { makeStore } from 'statery'





// Local imports
import {
	createEnemy,
	createPlayer,
} from '@space-game/entity-utilities'
import { CONTROL_BINDINGS } from '@space-game/static-data'
import { generateInitialControlState } from './helpers/generateInitialControlState.js'





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

	/** @type {null | number[]} */
	entityRenderOrder: null,

	isLoadingAssets: false,

	isInitialized: false,

	isInitializing: false,

	/** @type {null | number} */
	lastTick: null,

	/** @type {null | import('@dimforge/rapier2d-compat').World} */
	physicsWorld: null,

	/** @type {null | import('@dimforge/rapier2d-compat').EventQueue} */
	physicsEvents: null,

	viewport: {
		height: 0,
		width: 0,
	},
})

if (typeof window !== 'undefined') {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window.store = store
}
