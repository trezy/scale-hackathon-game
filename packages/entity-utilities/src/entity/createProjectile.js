// Module imports
import { getVectorFromRotation } from 'utilities'

// Local imports
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { projectileComponent } from '../component/projectileComponent.js'
import { rotationComponent } from '../component/rotationComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates a new projectile.
 *
 * @param {object} parentEntity The entity that owns the weapon that fired the projectile.
 * @param {object} weapon The weapon that fired the projectile.
 * @returns {object} The new entity.
 */
export function createProjectile(parentEntity, weapon) {
	const {
		position,
		rotation,
		ship: {
			species,
		},
	} = parentEntity

	const velocity = getVectorFromRotation(rotation)

	return createEntity(
		positionComponent(
			position.x + weapon.projectileOffset.x,
			position.y + weapon.projectileOffset.y,
		),
		projectileComponent(species, weapon.projectileType),
		rotationComponent(rotation),
		velocityComponent(
			velocity.x * weapon.projectileSpeed,
			velocity.y * weapon.projectileSpeed,
		),
	)
}
