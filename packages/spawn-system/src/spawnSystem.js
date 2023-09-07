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
	const {
		entities,
		physicsWorld,
	} = store.state

	const player = getPlayer(store.state)

	if (!player) {
		addEntities(createPlayer({
			position: {
				x: 0,
				y: 0,
			},
			height: 128,
			width: 128,
			world: physicsWorld,
		}))
	}

	if (entities.length < 3) {
		addEntities(
			createEnemy({
				position: {
					x: 100,
					y: 100,
				},
				height: 256,
				width: 256,
				world: physicsWorld,
			}),
			createEnemy({
				position: {
					x: 150,
					y: 80,
				},
				height: 256,
				width: 256,
				world: physicsWorld,
			}),
		)
	}
}
