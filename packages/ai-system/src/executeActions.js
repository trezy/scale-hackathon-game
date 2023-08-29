// Local imports
import { ACTION_TYPES } from './ACTION_TYPES.js'
import { handleMoveTo } from './handleMoveTo.js'





/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to execute actions for.
 */
export function executeActions(entity) {
	if (!entity.action) {
		return
	}

	switch (entity.action.type) {
		case ACTION_TYPES.MOVE_TO:
			handleMoveTo(entity)
			break

		default:
	}
}
