/**
 * @typedef {object} Entity
 * @property {string} id A unique identifier for the entity.
 * @property {object} [physics] Physics-related values.
 * @property {import('@dimforge/rapier2d-compat').RigidBody} physics.body The entity's Rapier RigidBody.
 * @property {import('@dimforge/rapier2d-compat').Collider} physics.collider The entity's Rapier Collider.
 * @property {object} [position] The entity's current position vector.
 * @property {number} position.x The entity's current position on the horizontal axis.
 * @property {number} position.y The entity's current position on the vertical axis.
 * @property {object} [rotation] The entity's current rotation.
 * @property {number} rotation.value The entity's current rotation (in radians).
 * @property {object} [speed] The entity's current speed multiplier.
 * @property {number} speed.value The entity's current speed multiplier.
 * @property {object} [velocity] The entity's current velocity vector.
 * @property {number} velocity.x The entity's current velocity on the horizontal axis.
 * @property {number} velocity.y The entity's current velocity on the vertical axis.
 * @property {object} [weapons] The entity's weapons.
 * @property {boolean} weapons.isFiring Whether the entity is currently firing its weapons.
 * @property {import('@space-game/static-data').WeaponData[]} weapons.activeWeapons An array of weapons belonging to the entity.
 */
