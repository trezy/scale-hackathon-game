// Local imports
import {
	WEAPON_TYPES,
	weaponsComponent,
} from '../component/weaponsComponent.js'
import { colorComponent } from '../component/colorComponent.js'
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { SHIP_CLASS } from '../../data/shipClass.js'
import { shipComponent } from '../component/shipComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
import { SPECIES } from '../../data/species.js'
import { velocityComponent } from '../component/velocityComponent.js'





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
			type: WEAPON_TYPES.GUN,
		}),
	)
}
