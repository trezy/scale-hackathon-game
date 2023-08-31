// Module imports
import {
	controlsSystem,
	useControlsSystem,
} from 'controls-system'
import { aiSystem } from 'ai-system'
import { bulletSystem } from 'bullet-system'
import { moveSystem } from 'move-system'
import { sortSystem } from 'sort-system'
import { useTick } from '@pixi/react'





// Local imports
import { store } from '../store/store.js'





/**
 * Uses the Pixi.js ticker to run all systems in the game loop.
 */
export function useGameLoop() {
	useTick((delta, ticker) => {
		store.set(() => ({
			delta,
			deltaMS: ticker.deltaMS,
		}))

		controlsSystem(store)
		moveSystem(store)
		aiSystem(store)
		bulletSystem(store)
		sortSystem(store)
	})

	useControlsSystem(store)
}
