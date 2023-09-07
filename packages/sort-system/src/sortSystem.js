// Module imports
import { store } from '@space-game/store'





// Local imports
import { quicksort } from './quicksort.js'





/**
 * Sorts entities by their y position.
 */
export function sortSystem() {
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
