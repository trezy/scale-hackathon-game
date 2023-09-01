// Module imports
import { PIXELS_PER_METER } from '@space-game/static-data'
import { RigidBodyDesc } from '@dimforge/rapier2d-compat'
import { store } from '@space-game/store'





/**
 * Creates a new Rapier RigidBody object. Can be configured to be static or
 * dynamic and rotations can be locked via the options parameter.
 *
 * @param {number} x X position to place body at (pixels)
 * @param {number} y Y position to place body at (pixels)
 * @param {object} options Configuration options (static, lockRotations)
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object
 */
function createRigidBody(x, y, options = {}) {
	let bodyDescriptor = RigidBodyDesc.dynamic
	if (options.static) {
		bodyDescriptor = RigidBodyDesc.fixed
	}
	const bodyDesc = bodyDescriptor()
		.setTranslation(x / PIXELS_PER_METER, y / PIXELS_PER_METER)
		.setCcdEnabled(true)

	if (options.allowRotations !== true) {
		bodyDesc.lockRotations()
	}

	const { physicsWorld } = /** @type {{ physicsWorld: import('@dimforge/rapier2d-compat').World }} */ (store.state)

	return physicsWorld.createRigidBody(bodyDesc)
}

/**
 * Creates a new dynamic Rapier RigidBody object. Rotations can be locked via
 * the options parameter.
 *
 * @param {number} x X position to place body at (pixels)
 * @param {number} y Y position to place body at (pixels)
 * @param {object} options Configuration options (allowRotations)
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object
 */
export function createDynamicBody(x, y, options = {}) {
	delete options.static
	return createRigidBody(x, y, {
		static: false,
		...options,
	})
}

/**
 * Creates a new static Rapier RigidBody object. Rotations can be locked via
 * the options parameter.
 *
 * @param {number} x X position to place body at (pixels)
 * @param {number} y Y position to place body at (pixels)
 * @param {object} options Configuration options (allowRotations)
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object
 */
export function createStaticBody(x, y, options = {}) {
	delete options.static
	return createRigidBody(x, y, {
		static: true,
		...options,
	})
}
