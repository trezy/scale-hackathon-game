// Module imports
import {
	ActiveEvents,
	Ball,
	ColliderDesc,
	Cuboid,
	Vector2,
} from '@dimforge/rapier2d-compat'
import { PIXELS_PER_METER } from '@space-game/static-data'
import { store } from '@space-game/store'





/**
 * Builds a rectangular collider descriptor which can be used
 * to initialize a real collider in the physics world.
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
 * Builds a circular collider descriptor which can be used
 * to initialize a real collider in the physics world.
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
 * Builds a rectangular collider descriptor which can be used
 * to initialize a real collider in the physics world.
 *
 * @param {string} shape Shape of the collider to build (circle | rectangle)
 * @param {object} config Configuration of the collider (width, height, radius, etc)
 * @param {import('@dimforge/rapier2d-compat').RigidBody} [parentRigidBody] RigidBody to attach this collider to; optional
 * @returns {null | import('@dimforge/rapier2d-compat').Collider} Rapier collider object
 */
export function createCollider(shape, config, parentRigidBody) {
	// TODO: Implement assigning "group" and "collision filters"
	// to the collider before creating it.
	// const opts = {
	// 	group: config.group,
	// 	filter: config.filter,
	// }

	let colliderDesc = null

	if (shape === 'circle') {
		colliderDesc = buildCircleCollider(config.radius)
	} else if (shape === 'rectangle') {
		colliderDesc = buildRectangleCollider(config.width, config.height)
	} else {
		console.error('Invalid shape type requested --', config)
		return null
	}

	if (!parentRigidBody) {
		colliderDesc.setSensor(true)
	}

	colliderDesc.setFriction(0)
	colliderDesc.setActiveEvents(ActiveEvents.COLLISION_EVENTS)

	const { physicsWorld } = /** @type {{ physicsWorld: import('@dimforge/rapier2d-compat').World }} */ (store.state)
	const collider = physicsWorld.createCollider(colliderDesc, parentRigidBody)

	if (config.x && config.y) {
		collider.setTranslation(new Vector2(
			(config.x / PIXELS_PER_METER) + (config.width / PIXELS_PER_METER / 2),
			(config.y / PIXELS_PER_METER) + (config.height / PIXELS_PER_METER / 2),
		))
	}

	return collider
}
