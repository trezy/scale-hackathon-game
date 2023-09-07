// Local imports
import {
	PROJECTILE_TYPES,
	SHIP_CLASS,
	SPECIES,
	WEAPON_TYPES,
} from '@space-game/static-data'
import { createEntity } from './createEntity.js'
import { physicsComponent } from '../component/physicsComponent.js'
import { positionComponent } from '../component/positionComponent.js'
import { rotationComponent } from '../component/rotationComponent.js'
import { shipComponent } from '../component/shipComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'
import { weaponsComponent } from '../component/weaponsComponent.js'





/**
 * Creates the player-controlled entity.
 *
 * @param {object} config All configuration.
 * @param {number} config.height The height of the entity.
 * @param {object} config.position The enemy's position.
 * @param {number} config.position.x The enemy's position on the horizontal axis.
 * @param {number} config.position.y The enemy's position on the vertical axis.
 * @param {number} config.width The width of the entity.
 * @param {import('@dimforge/rapier2d-compat').World} config.world The physics world.
 * @returns {import('../types/Entity.js').Entity} The new entity.
 */
export function createPlayer(config) {
	const {
		height,
		position,
		width,
		world,
	} = config

	return createEntity(
		{ isPlayer: true },
		positionComponent(position.x, position.y),
		rotationComponent(0),
		shipComponent(SPECIES.SOLARIAN, SHIP_CLASS.FIGHTER),
		sizeComponent(width, height),
		velocityComponent(0, 0),
		weaponsComponent(
			{
				firingDelay: 850,
				projectileDamage: 1,
				projectileDirection: 0,
				projectileOffset: {
					x: -10,
					y: 20,
				},
				projectileSpeed: 10,
				projectileType: PROJECTILE_TYPES.BULLET,
				type: WEAPON_TYPES.GUN,
			},
			{
				firingDelay: 850,
				initialDelay: 300,
				projectileDamage: 1,
				projectileDirection: 0,
				projectileOffset: {
					x: 10,
					y: 20,
				},
				projectileSpeed: 10,
				projectileType: PROJECTILE_TYPES.BULLET,
				type: WEAPON_TYPES.GUN,
			},
		),
		physicsComponent({
			height,
			position,
			width,
			world,
		}),
	)
}
