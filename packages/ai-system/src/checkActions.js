// Local imports
import { generateIdle } from './generateIdle.js'
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
		let newAction = null

		if (Math.random() > 0.75) {
			newAction = generateIdle()
		} else {
			newAction = generateWander(entity, state.viewport)
		}

		queue.push(newAction)
	}

	if (!action) {
		entity.ai.action = queue.shift()
	}
}
