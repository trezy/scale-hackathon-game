// Local imports
import {
	SHIP_CLASS,
	SPECIES,
	WEAPON_DATA,
	WEAPON_TYPES,
	WEAPONS,
} from '@space-game/static-data'
import { createEntity } from './createEntity.js'
import { rotationComponent } from '../component/rotationComponent.js'
import { shipComponent } from '../component/shipComponent.js'
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
		position,
		world,
	} = config

	return createEntity(
		{ isPlayer: true },
		shipComponent({
			position,
			shipClass: SHIP_CLASS.FIGHTER,
			species: SPECIES.SOLARIAN,
			world,
		}),
		rotationComponent(0),
		velocityComponent(0, 0),
		weaponsComponent(
			{
				...WEAPON_DATA[WEAPONS.CANNON],
				projectile: {
					...WEAPON_DATA[WEAPONS.CANNON].projectile,
					offset: {
						x: -10,
						y: 20,
					},
				},
				type: WEAPON_TYPES.GUN,
			},
			{
				...WEAPON_DATA[WEAPONS.CANNON],
				initialDelay: 300,
				projectile: {
					...WEAPON_DATA[WEAPONS.CANNON].projectile,
					offset: {
						x: 10,
						y: 20,
					},
				},
				type: WEAPON_TYPES.GUN,
			},
		),
	)
}
