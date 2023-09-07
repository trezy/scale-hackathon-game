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
			createEnemy({
				position: {
					x: 100,
					y: 100,
				},
				height: 256,
				width: 256,
				world: store.state.physicsWorld,
			}),
			createEnemy({
				position: {
					x: 150,
					y: 80,
				},
				height: 256,
				width: 256,
				world: store.state.physicsWorld,
			}),
		)
	}
}
