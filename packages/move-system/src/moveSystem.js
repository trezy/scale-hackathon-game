// Module imports
import { getRotationFromVector } from 'utilities'





/**
 * Moves entities based on their velocity.
 *
 * @param {object} store Statery store with the game's state.
 */
export function moveSystem(store) {
	store.set(previousState => {
		const {
			delta,
			entities,
		} = previousState

		return {
			entities: entities.map(entity => {
				if ('velocity' in entity) {
					entity.position.x += entity.velocity.x * delta
					entity.position.y += entity.velocity.y * delta

					if (('rotation' in entity) && ((entity.velocity.x !== 0) || (entity.velocity.y !== 0))) {
						entity.rotation = getRotationFromVector(entity.velocity.x, entity.velocity.y)
					}
				}

				return entity
			}),
		}
	}, true)
}
