// Local imports
import { generateWander } from './generateWander.js'





/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity that owns the actions.
 * @param {object} state Game state.
 */
export function checkActions(entity, state) {
	const {
		action,
		queue,
	} = entity.ai

	if (!queue.length) {
		queue.push(generateWander(entity, state.viewport))
	}

	if (!action) {
		entity.ai.action = queue.shift()
	}
}
