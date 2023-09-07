// Module imports
import { getVectorFromRotation } from '@space-game/utilities'
import { PROJECTILE_DATA } from '@space-game/static-data'





// Local imports
import { createEntity } from './createEntity.js'
import { physicsComponent } from '../component/physicsComponent.js'
import { positionComponent } from '../component/positionComponent.js'
import { projectileComponent } from '../component/projectileComponent.js'
import { rotationComponent } from '../component/rotationComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'





/**
 * Creates a new projectile.
 *
 * @param {object} config All configuration.
 * @param {object} config.parentEntity The entity that owns the weapon that fired the projectile.
 * @param {object} config.weapon The weapon that fired the projectile.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('../types/Entity.js').Entity} The new entity.
 */
export function createProjectile(config) {
	const {
		parentEntity,
		weapon,
		world,
	} = config

	const {
		rotation,
		ship: {
			species,
		},
	} = parentEntity

	const projectileData = PROJECTILE_DATA[species][weapon.projectile.type]
	const position = {
		x: parentEntity.position.x + weapon.projectile.offset.x,
		y: parentEntity.position.y + weapon.projectile.offset.y,
	}
	const velocity = getVectorFromRotation(rotation)

	return createEntity(
		physicsComponent({
			height: projectileData.size.height,
			position,
			width: projectileData.size.width,
			world,
		}),
		positionComponent(position.x, position.y),
		projectileComponent(species, weapon.projectile.type),
		rotationComponent(rotation),
		velocityComponent(
			velocity.x * weapon.projectile.speed,
			velocity.y * weapon.projectile.speed,
		),
	)
}
