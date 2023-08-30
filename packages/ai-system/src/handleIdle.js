/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to move.
 * @param {object} state Game state.
 */
export function handleIdle(entity, state) {
	const { action } = entity.ai
	const { deltaMS } = state

	action.timeRemaining -= deltaMS

	if (action.timeRemaining <= 0) {
		entity.ai.action = null
	}
}
