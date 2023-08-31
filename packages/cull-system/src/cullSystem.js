/**
 * Culls unnecessary entities.
 *
 * @param {object} store Statery store with the game's state.
 */
export function cullSystem(store) {
	store.set(state => {
		const {
			entities,
			viewport,
		} = state

		return {
			entities: entities.filter(entity => {
				return entity.position.x > 0 - viewport.width
					&& entity.position.x < viewport.width * 2
					&& entity.position.y > 0 - viewport.height
					&& entity.position.y < viewport.height * 2
			}),
		}
	})
}
