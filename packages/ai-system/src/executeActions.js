// Local imports
import { ACTION_TYPES } from './ACTION_TYPES.js'
import { handleIdle } from './handleIdle.js'
import { handleWander } from './handleWander.js'





/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to execute actions for.
 * @param {object} state Game state.
 */
export function executeActions(entity, state) {
	const { action } = entity.ai

	if (!action) {
		return
	}

	switch (action.type) {
		case ACTION_TYPES.IDLE:
			handleIdle(entity, state)
			break

		case ACTION_TYPES.WANDER:
			handleWander(entity)
			break

		default:
	}
}
