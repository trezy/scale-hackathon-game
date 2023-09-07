// Module imports
import { store } from '@space-game/store'





// Local imports
import { checkActions } from './checkActions.js'
import { executeActions } from './executeActions.js'





/**
 * Handles AI decision making.
 */
export function aiSystem() {
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
