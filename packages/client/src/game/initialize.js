// Module imports
import RAPIER from '@dimforge/rapier2d-compat'
import { store } from 'store'





// Local imports
import { loadGameAssets } from './loadGameAssets.js'





/**
 * Initialize game systems.
 */
export async function initialize() {
	store.set(() => ({ isInitializing: true }))

	// Images and spritesheets
	await loadGameAssets()

	// Physics
	await RAPIER.init()
	store.set({
		physicsWorld: new RAPIER.World({
			x: 0,
			y: 0,
		}),
		physicsEvents: new RAPIER.EventQueue(true),
	})

	store.set(() => ({
		isInitializing: false,
		isInitialized: true,
	}))
}
