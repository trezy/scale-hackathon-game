// Local imports
import { checkActions } from './checkActions.js'
import { executeActions } from './executeActions.js'





/**
 * Handles AI decision making.
 *
 * @param {object} store Statery store with the game's state.
 */
export function aiSystem(store) {
	store.set(state => {
		const { entities } = state

		return {
			entities: entities.map(entity => {
				if ('ai' in entity) {
					checkActions(entity, state)
					executeActions(entity, state)
				}

				return entity
			}),
		}
	})
}
