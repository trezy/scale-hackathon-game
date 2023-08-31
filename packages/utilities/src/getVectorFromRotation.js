/**
 * Calculates the vector of a rotation.
 *
 * @param {number} theta The rotation value (in radians) for which to determine the vector.
 * @returns {{
 * 	x: number,
 * 	y: number,
 * }} The vector of the rotation.
 */
export function getVectorFromRotation(theta) {
	const adjustedTheta = theta - (Math.PI / 2)

	const thetaCosine = Math.cos(adjustedTheta)
	const thetaSine = Math.sin(adjustedTheta)

	const wholeCosineString = thetaCosine.toFixed()
	const wholeSineString = thetaSine.toFixed()

	const wholeCosine = parseInt(wholeCosineString, 10)
	const wholeSine = parseInt(wholeSineString, 10)

	return {
		x: Math.sign(wholeCosine),
		y: Math.sign(wholeSine),
	}
}
