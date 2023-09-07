// Local imports
import { SHIP_CLASS } from './SHIP_CLASS.js'
import { SPECIES } from './SPECIES.js'





// Types
/**
 * @typedef {object} ColliderData
 * @property {number} height The height of the box collider.
 * @property {number} width The width of the box collider.
 */
/**
 * @typedef {object} ShipData
 * @property {number} armor The default amount of armor the ship type has.
 * @property {ColliderData[]} colliders An array of box colliders for the ship.
 * @property {object} spriteSize The size of the rendered sprite.
 * @property {number} thrustSpeed The speed of forward thrust for the ship.
 * @property {number} turnSpeed The speed of at which the ship turns.
 */

/**
 * @type {{
 * 	[key: string]: {
 * 		[key: string]: ShipData,
 * 	},
 * }}
 */
export const SHIP_DATA = {
	[SPECIES.SOLARIAN]: {
		[SHIP_CLASS.BATTLECRUISER]: {
			armor: 1000,
			colliders: [
				{
					height: 176,
					width: 144,
				},
			],
			spriteSize: {
				height: 256,
				width: 256,
			},
			thrustSpeed: 5,
			turnSpeed: 1,
		},

		[SHIP_CLASS.FIGHTER]: {
			armor: 100,
			colliders: [
				{
					height: 44,
					width: 48,
				},
			],
			spriteSize: {
				height: 128,
				width: 128,
			},
			thrustSpeed: 10,
			turnSpeed: 3,
		},
	},
}
