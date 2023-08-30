/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to move.
 */
export function handleWander(entity) {
	const { action } = entity.ai

	const distanceToX = Math.abs(entity.position.x - action.destination.x)
	const distanceToY = Math.abs(entity.position.y - action.destination.y)

	if (distanceToX < 1) {
		entity.position.x = action.destination.x
		entity.velocity.x = 0
	} else if (entity.position.x < action.destination.x) {
		entity.velocity.x = 1
	} else if (entity.position.x > action.destination.x) {
		entity.velocity.x = -1
	} else {
		entity.velocity.x = 0
	}

	if (distanceToY < 1) {
		entity.position.y = action.destination.y
		entity.velocity.y = 0
	} else if (entity.position.y < action.destination.y) {
		entity.velocity.y = 1
	} else if (entity.position.y > action.destination.y) {
		entity.velocity.y = -1
	} else {
		entity.velocity.y = 0
	}

	if (distanceToX < 1 && distanceToY < 1) {
		entity.ai.action = null
	}
}
