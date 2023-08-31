// Local imports
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { projectileComponent } from '../component/projectileComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates a new projectile.
 *
 * @param {object} config Configuration for the new projectile.
 * @param {object} config.position The position of the projectile.
 * @param {number} config.position.x The position of the projectile on the horizontal axis.
 * @param {number} config.position.y The position of the projectile on the vertical axis.
 * @param {string} config.species The species of the projectile.
 * @param {string} config.type The type of the projectile.
 * @param {object} config.velocity The velocity of the projectile.
 * @param {number} config.velocity.x The velocity of the projectile on the horizontal axis.
 * @param {number} config.velocity.y The velocity of the projectile on the vertical axis.
 * @returns {object} The new entity.
 */
export function createProjectile(config) {
	const {
		position,
		species,
		type,
		velocity,
	} = config

	return createEntity(
		positionComponent(position.x, position.y),
		projectileComponent(species, type),
		velocityComponent(velocity.x, velocity.y),
	)
}
