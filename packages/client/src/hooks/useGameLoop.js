// Module imports
import {
	controlsSystem,
	useControlsSystem,
} from '@space-game/controls-system'
import { aiSystem } from '@space-game/ai-system'
import { cullSystem } from '@space-game/cull-system'
import { moveSystem } from '@space-game/move-system'
import { projectileSystem } from '@space-game/projectile-system'
import { sortSystem } from '@space-game/sort-system'
import { spawnSystem } from '@space-game/spawn-system'
import { store } from '@space-game/store'
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
		spawnSystem(store)
		projectileSystem(store)
		cullSystem(store)
		sortSystem(store)
	})

	useControlsSystem(store)
}
