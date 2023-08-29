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
				if (entity.velocity) {
					entity.position.x += entity.velocity.x * delta
					entity.position.y += entity.velocity.y * delta
				}

				return entity
			}),
		}
	}, true)
}
