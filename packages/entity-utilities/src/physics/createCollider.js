// Module imports
import {
	ActiveEvents,
	Ball,
	ColliderDesc,
	Cuboid,
	Vector2,
} from '@dimforge/rapier2d-compat'
import { PIXELS_PER_METER } from '@space-game/static-data'





/**
 * Builds a rectangular collider descriptor which can be used to initialize a real collider in the physics world.
 *
 * @param {number} width Width of rectangle collider (pixels)
 * @param {number} height Height of rectangle collider (pixels)
 * @returns {import('@dimforge/rapier2d-compat').ColliderDesc} Collider describer object
 */
function buildRectangleCollider(width, height) {
	return new ColliderDesc(
		new Cuboid(
			width / 2 / PIXELS_PER_METER,
			height / 2 / PIXELS_PER_METER,
		),
	)
}

/**
 * Builds a circular collider descriptor which can be used to initialize a real collider in the physics world.
 *
 * @param {number} radius Radius of circular collider (pixels)
 * @returns {import('@dimforge/rapier2d-compat').ColliderDesc} Collider describer object
 */
function buildCircleCollider(radius) {
	return new ColliderDesc(
		new Ball(radius / PIXELS_PER_METER),
	)
}

/**
 * Builds a rectangular collider descriptor which can be used to initialize a real collider in the physics world.
 *
 * @param {object} config All configuration.
 * @param {number} config.height Collider height.
 * @param {import('@dimforge/rapier2d-compat').RigidBody} [config.parentRigidBody] RigidBody to attach this collider to.
 * @param {object} config.position The collider's position.
 * @param {number} config.position.x The collider's position on the horizontal axis.
 * @param {number} config.position.y The collider's position on the vertical axis.
 * @param {number} [config.radius] Collider radius.
 * @param {'circle' | 'rectangle'} config.shape Shape of the collider to build.
 * @param {number} config.width Collider width.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The Rapier World within which this collider will live.
 * @returns {null | import('@dimforge/rapier2d-compat').Collider} Rapier collider object
 */
export function createCollider(config) {
	const {
		height,
		parentRigidBody,
		position,
		radius,
		shape,
		width,
		world,
	} = config

	// TODO: Implement assigning "group" and "collision filters"
	// to the collider before creating it.
	// const opts = {
	// 	group: config.group,
	// 	filter: config.filter,
	// }

	let colliderDesc = null

	if (shape === 'circle') {
		colliderDesc = buildCircleCollider(radius)
	} else if (shape === 'rectangle') {
		colliderDesc = buildRectangleCollider(width, height)
	} else {
		console.error('Invalid shape type requested --', config)
		return null
	}

	if (!parentRigidBody) {
		colliderDesc.setSensor(true)
	}

	colliderDesc.setFriction(0)
	colliderDesc.setActiveEvents(ActiveEvents.COLLISION_EVENTS)

	const collider = world.createCollider(colliderDesc, parentRigidBody)

	if (('x' in position) && ('y' in position)) {
		collider.setTranslation(new Vector2(
			(position.x / PIXELS_PER_METER) + (width / PIXELS_PER_METER / 2),
			(position.y / PIXELS_PER_METER) + (height / PIXELS_PER_METER / 2),
		))
	}

	return collider
}
