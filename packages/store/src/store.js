// Module imports
import { CONTROL_BINDINGS } from '@space-game/static-data'
import { makeStore } from 'statery'





// Local imports
import { generateInitialControlState } from './helpers/generateInitialControlState.js'





// Types
/**
 * @typedef {object} Entity
 * @property {object} [physics] Physics-related values.
 * @property {import('@dimforge/rapier2d-compat').RigidBody} physics.body The entity's Rapier RigidBody.
 * @property {import('@dimforge/rapier2d-compat').Collider} physics.collider The entity's Rapier Collider.
 * @property {object} [position] The entity's current position vector.
 * @property {number} position.x The entity's current position on the horizontal axis.
 * @property {number} position.y The entity's current position on the vertical axis.
 * @property {object} [velocity] The entity's current velocity vector.
 * @property {number} velocity.x The entity's current velocity on the horizontal axis.
 * @property {number} velocity.y The entity's current velocity on the vertical axis.
 */





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

	/** @type {Entity[]} */
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
