// Local imports
import {
	WEAPON_TYPES,
	weaponsComponent,
} from '../component/weaponsComponent.js'
import { colorComponent } from '../component/colorComponent.js'
import { createEntity } from './createEntity.js'
import { positionComponent } from '../component/positionComponent.js'
import { sizeComponent } from '../component/sizeComponent.js'
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
		sizeComponent(20, 20),
		velocityComponent(0, 0),
		weaponsComponent({
			damage: 1,
			delay: 100,
			direction: 0,
			type: WEAPON_TYPES.GUN,
		}),
	)
}
