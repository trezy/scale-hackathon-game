// Local imports
import { createCollider } from '../physics/createCollider.js'
import { createStaticBody } from '../physics/createRigidBody.js'





/**
 * Manages the physics collider for an entity.
 *
 * @param {object} config All configuration.
 * @param {number} config.height The height of the entity's collider.
 * @param {object} config.position The position of the entity.
 * @param {number} config.position.x The position of the entity on the horizontal axis.
 * @param {number} config.position.y The position of the entity on the vertical axis.
 * @param {number} config.width The width of the entity's collider.
 * @returns {{ physics: object }} The new collider component.
 */
export function colliderComponent(config) {
	const {
		height,
		position,
		width,
	} = config

	const body = createStaticBody(
		position.x + (width / 2),
		position.y + (height / 2),
	)

	const collider = createCollider('rectangle', {
		height,
		width,
	}, body)

	return {
		physics: {
			body,
			collider,
		},
	}
}
