// Module imports
import {
	addEntities,
	getPlayer,
	store,
} from '@space-game/store'
import {
	createEnemy,
	createPlayer,
} from '@space-game/entity-utilities'





/**
 * Spawns new entities when appropriate.
 */
export function spawnSystem() {
	const player = getPlayer(store.state)

	if (!player) {
		addEntities(createPlayer())
	}

	if (store.state.entities.length < 3) {
		addEntities(
			createEnemy(100, 100, 256, 256),
			createEnemy(150, 80, 256, 256),
		)
	}
}
