// Local imports
import { quicksort } from './quicksort.js'





/**
 * Sorts entities by their y position.
 *
 * @param {object} store Statery store with the game's state.
 */
export function sortSystem(store) {
	store.set(state => {
		const { entities } = state

		const entityRenderOrder = Array(entities.length)
			.fill(null)
			.map((_, index) => index)

		quicksort(entityRenderOrder, entityIndex => {
			const entity = entities[entityIndex]
			return entity.position.y
		})

		return { entityRenderOrder }
	})
}
