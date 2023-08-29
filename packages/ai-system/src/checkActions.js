// Local imports
import { generateMoveTo } from './generateMoveTo.js'





/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity that owns the actions.
 * @param {object} state Game state.
 */
export function checkActions(entity, state) {
	if (!entity.queue.length) {
		entity.queue.push(generateMoveTo(entity, state.viewport))
	}

	if (!entity.action) {
		entity.action = entity.queue.shift()
	}
}
