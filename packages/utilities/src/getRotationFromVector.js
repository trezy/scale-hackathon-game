/**
 * Calculates the rotation from a vector.
 *
 * @param {number} x The x value of the vector.
 * @param {number} y The y value of the vector.
 * @returns {number} The rotation of the entity (in radians).
 */
export function getRotationFromVector(x, y) {
	return Math.atan2(y, x) + (Math.PI / 2)
}
