/**
 * Handles AI decision making.
 *
 * @param {object} entity The entity to move.
 */
export function handleMoveTo(entity) {
	const distanceToX = Math.abs(entity.position.x - entity.action.destination.x)
	const distanceToY = Math.abs(entity.position.y - entity.action.destination.y)

	if (distanceToX < 1) {
		entity.position.x = entity.action.destination.x
		entity.velocity.x = 0
	} else if (entity.position.x < entity.action.destination.x) {
		entity.velocity.x = 1
	} else if (entity.position.x > entity.action.destination.x) {
		entity.velocity.x = -1
	} else {
		entity.velocity.x = 0
	}

	if (distanceToY < 1) {
		entity.position.y = entity.action.destination.y
		entity.velocity.y = 0
	} else if (entity.position.y < entity.action.destination.y) {
		entity.velocity.y = 1
	} else if (entity.position.y > entity.action.destination.y) {
		entity.velocity.y = -1
	} else {
		entity.velocity.y = 0
	}

	if (distanceToX < 1 && distanceToY < 1) {
		entity.action = null
	}
}
