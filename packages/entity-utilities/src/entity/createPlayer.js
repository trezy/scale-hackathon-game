// Local imports
import {
	PROJECTILE_TYPES,
	SHIP_CLASS,
	SPECIES,
	WEAPON_TYPES,
} from 'static-data'
import { colorComponent } from '../component/colorComponent.js'
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { shipComponent } from '../component/shipComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { velocityComponent } from '../component/velocityComponent.js'
import { weaponsComponent } from '../component/weaponsComponent.js'





/**
 * Creates the player-controlled entity.
 *
 * @returns {object} The new entity.
 */
export function createPlayer() {
	return createEntity(
		{ isPlayer: true },
		colorComponent(0x0000ff),
		positionComponent(0, 0),
		shipComponent(SPECIES.SOLARIAN, SHIP_CLASS.FIGHTER),
		sizeComponent(20, 20),
		velocityComponent(0, 0),
		weaponsComponent({
			firingDelay: 100,
			projectileDamage: 1,
			projectileDirection: 0,
			projectileSpeed: 10,
			projectileType: PROJECTILE_TYPES.BULLET,
			type: WEAPON_TYPES.GUN,
		}),
	)
}
