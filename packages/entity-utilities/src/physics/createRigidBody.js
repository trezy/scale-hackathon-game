// Module imports
import { PIXELS_PER_METER } from '@space-game/static-data'
import { RigidBodyDesc } from '@dimforge/rapier2d-compat'





/**
 * Creates a new Rapier RigidBody object. Can be configured to be static or dynamic and rotations can be locked via the options parameter.
 *
 * @param {object} config All configuration.
 * @param {object} [config.allowRotation] The body's position.
 * @param {object} config.position The body's position.
 * @param {number} config.position.x The body's position on the horizontal axis.
 * @param {number} config.position.y The body's position on the vertical axis.
 * @param {boolean} [config.isStatic] Whether the body is static or dynamic.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object.
 */
function createRigidBody(config) {
	const {
		allowRotation,
		isStatic,
		position,
		world,
	} = config

	let bodyDescriptor = RigidBodyDesc.dynamic

	if (('isStatic' in config) && isStatic === true) {
		bodyDescriptor = RigidBodyDesc.fixed
	}

	const bodyDesc = bodyDescriptor()
		.setTranslation(
			position.x / PIXELS_PER_METER,
			position.y / PIXELS_PER_METER,
		)
		.setCcdEnabled(true)

	if (allowRotation !== true) {
		bodyDesc.lockRotations()
	}

	return world.createRigidBody(bodyDesc)
}

/**
 * Creates a new dynamic Rapier RigidBody object. Rotations can be locked via
 * the options parameter.
 *
 * @param {object} config All configuration.
 * @param {object} [config.allowRotation] The body's position.
 * @param {object} config.position The body's position.
 * @param {number} config.position.x The body's position on the horizontal axis.
 * @param {number} config.position.y The body's position on the vertical axis.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object
 */
export function createDynamicBody(config) {
	if ('isStatic' in config) {
		delete config.isStatic
	}

	return createRigidBody({
		isStatic: false,
		...config,
	})
}

/**
 * Creates a new static Rapier RigidBody object. Rotations can be locked via
 * the options parameter.
 *
 * @param {object} config All configuration.
 * @param {object} [config.allowRotation] The body's position.
 * @param {object} config.position The body's position.
 * @param {number} config.position.x The body's position on the horizontal axis.
 * @param {number} config.position.y The body's position on the vertical axis.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('@dimforge/rapier2d-compat').RigidBody} A new Rapier RigidBody object
 */
export function createStaticBody(config) {
	if ('isStatic' in config) {
		delete config.isStatic
	}

	return createRigidBody({
		isStatic: true,
		...config,
	})
}
