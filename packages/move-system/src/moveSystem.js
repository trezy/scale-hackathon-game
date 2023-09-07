// Module imports
// import { getRotationFromVector } from '@space-game/utilities'
import { PIXELS_PER_METER } from '@space-game/static-data'





/**
 * Moves entities based on their velocity.
 *
 * @param {object} store Statery store with the game's state.
 */
export function moveSystem(store) {
	store.set(previousState => {
		const { entities } = previousState

		return {
			entities: entities.map(entity => {
				if ('physics' in entity) {
					const {
						physics,
						position,
					} = entity

					// Pull the position from the collision body
					position.x = physics.body.translation().x * PIXELS_PER_METER
					position.y = physics.body.translation().y * PIXELS_PER_METER
				}

				return entity
			}),
		}
	}, true)
}
