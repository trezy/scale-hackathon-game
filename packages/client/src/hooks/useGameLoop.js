// Module imports
import {
	controlsSystem,
	useControlsSystem,
} from 'controls-system'
import { aiSystem } from 'ai-system'
import { moveSystem } from 'move-system'
import { projectileSystem } from 'projectile-system'
import { sortSystem } from 'sort-system'
import { store } from 'store'
import { useTick } from '@pixi/react'





/**
 * Uses the Pixi.js ticker to run all systems in the game loop.
 */
export function useGameLoop() {
	useTick((delta, ticker) => {
		store.set(() => ({
			delta,
			deltaMS: ticker.deltaMS,
			lastTick: ticker.lastTime,
		}))

		controlsSystem(store)
		moveSystem(store)
		aiSystem(store)
		projectileSystem(store)
		sortSystem(store)
	})

	useControlsSystem(store)
}
