// Module imports
import { store } from '@space-game/store'





/**
 * Adds entities to the game state.
 *
 * @param {...object} entities Entities to be added to the game state.
 */
export function addEntities(...entities) {
	store.set(state => {
		return {
			entities: [
				...state.entities,
				...entities,
			],
		}
	})
}
