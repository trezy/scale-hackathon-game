/**
 * Calculates the rotation of an entity based on its current velocity.
 *
 * @param {object} entity The entity to determine rotation for.
 * @returns {number} The rotation of the entity.
 */
export function getEntityRotation(entity) {
	return Math.atan2(entity.velocity.y, entity.velocity.x) + (Math.PI / 2)
}
