// Module imports
import {
	createEnemy,
	createPlayer,
} from '@space-game/entity-utilities'
import { addEntities } from '@space-game/store'





/**
 * Spawns new entities when appropriate.
 *
 * @param {object} store Statery store with the game's state.
 */
export function spawnSystem(store) {
	const { entities } = store.state

	if (entities.length < 3) {
		addEntities(
			createEnemy(100, 100, 20, 20),
			createEnemy(150, 80, 20, 20),
			createPlayer(),
		)
	}
}
