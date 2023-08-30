// Local imports
import { ACTION_TYPES } from './ACTION_TYPES.js'
import { handleWander } from './handleWander.js'





/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to execute actions for.
 */
export function executeActions(entity) {
	const { action } = entity.ai

	if (!action) {
		return
	}

	switch (action.type) {
		case ACTION_TYPES.WANDER:
			handleWander(entity)
			break

		default:
	}
}
