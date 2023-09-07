// Module imports
import { DEFAULT_CONTROL_BINDINGS } from './data/DEFAULT_CONTROL_BINDINGS.js'
import { makeStore } from 'statery'





// Local imports
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

	controlBindings: DEFAULT_CONTROL_BINDINGS,

	controlState: generateInitialControlState(),

	delta: 0,

	deltaMS: 0,

	/** @type {import('@space-game/entity-utilities').Entity[]} */
	entities: [],

	/** @type {number[]} */
	entityRenderOrder: [],

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
