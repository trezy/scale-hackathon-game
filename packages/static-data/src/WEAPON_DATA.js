// Local imports
import { PROJECTILE_TYPES } from './PROJECTILE_TYPES.js'
import { WEAPON_TYPES } from './WEAPON_TYPES.js'
import { WEAPONS } from './WEAPONS.js'





// Types
/**
 * @typedef {object} WeaponData
 * @property {number} fireRate The rate of fire for the weapon.
 * @property {number} initialDelay The delay (in milliseconds) before the weapon will start firing.
 * @property {number} [lastFired] The timestamp when this weapon was last fired.
 * @property {object} projectile Data for the weapon's projectiles.
 * @property {number} projectile.damage The base damage of projectiles.
 * @property {number} projectile.direction The angle offset of projectiles.
 * @property {object} [projectile.offset] The offset from which the origin at which projectiles will be spawned.
 * @property {number} projectile.offset.x The projectile spawn offset on the horizontal axis.
 * @property {number} projectile.offset.y The projectile spawn offset on the vertical axis.
 * @property {number} projectile.speed The travel speed of projectiles.
 * @property {string} projectile.type The projectile's type.
 * @property {string} type The weapon type.
 */





/**
 * @type {{ [key: string]: WeaponData }}
 */
export const WEAPON_DATA = {
	[WEAPONS.CANNON]: {
		fireRate: 0.85,
		initialDelay: 0,
		projectile: {
			damage: 1,
			direction: 0,
			offset: {
				x: 0,
				y: 0,
			},
			speed: 10,
			type: PROJECTILE_TYPES.BULLET,
		},
		type: WEAPON_TYPES.GUN,
	},
}
