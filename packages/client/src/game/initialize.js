// Module imports
import {
	EventQueue as RapierEventQueue,
	init as RapierInit,
	World as RapierWorld,
} from '@dimforge/rapier2d-compat'
import { store } from '@space-game/store'





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
	await RapierInit()
	store.set({
		physicsWorld: new RapierWorld({
			x: 0,
			y: 0,
		}),
		physicsEvents: new RapierEventQueue(true),
	})

	store.set(() => ({
		isInitializing: false,
		isInitialized: true,
	}))
}
