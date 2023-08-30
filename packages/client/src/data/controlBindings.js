// Local imports
import { CONTROL_TYPES } from './controlTypes.js'
import { getPlayer } from '../store/reducers/getPlayer.js'
import { store } from '../store/store.js'





export const CONTROL_BINDINGS = {
	moveEast: {
		// eslint-disable-next-line jsdoc/require-jsdoc
		onActivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.x = Math.min(player.velocity.x + 1, 1)

				return { entities: previousState.entities }
			})
		},
		// eslint-disable-next-line jsdoc/require-jsdoc
		onDeactivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.x = Math.max(player.velocity.x - 1, -1)

				return { entities: previousState.entities }
			})
		},
		bindings: [
			{
				keys: ['KeyD'],
			},
			{
				keys: ['ArrowRight'],
			},
		],
		type: CONTROL_TYPES.KEYS,
	},

	moveNorth: {
		// eslint-disable-next-line jsdoc/require-jsdoc
		onActivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.y = Math.max(player.velocity.y - 1, -1)

				return { entities: previousState.entities }
			})
		},
		// eslint-disable-next-line jsdoc/require-jsdoc
		onDeactivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.y = Math.min(player.velocity.y + 1, 1)

				return { entities: previousState.entities }
			})
		},
		bindings: [
			{
				keys: ['KeyW'],
			},
			{
				keys: ['ArrowUp'],
			},
		],
		type: CONTROL_TYPES.KEYS,
	},

	moveSouth: {
		// eslint-disable-next-line jsdoc/require-jsdoc
		onActivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.y = Math.min(player.velocity.y + 1, 1)

				return { entities: previousState.entities }
			})
		},
		// eslint-disable-next-line jsdoc/require-jsdoc
		onDeactivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.y = Math.max(player.velocity.y - 1, -1)

				return { entities: previousState.entities }
			})
		},
		bindings: [
			{
				keys: ['KeyS'],
			},
			{
				keys: ['ArrowDown'],
			},
		],
		type: CONTROL_TYPES.KEYS,
	},

	moveWest: {
		// eslint-disable-next-line jsdoc/require-jsdoc
		onActivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.x = Math.max(player.velocity.x - 1, -1)

				return { entities: previousState.entities }
			})
		},
		// eslint-disable-next-line jsdoc/require-jsdoc
		onDeactivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.velocity.x = Math.min(player.velocity.x + 1, 1)

				return { entities: previousState.entities }
			})
		},
		bindings: [
			{
				keys: ['KeyA'],
			},
			{
				keys: ['ArrowLeft'],
			},
		],
		type: CONTROL_TYPES.KEYS,
	},

	fire: {
		// eslint-disable-next-line jsdoc/require-jsdoc
		onActivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.weapons.isFiring = true

				return { entities: previousState.entities }
			})
		},
		// eslint-disable-next-line jsdoc/require-jsdoc
		onDeactivate: () => {
			store.set(previousState => {
				const player = getPlayer(previousState)

				player.weapons.isFiring = false

				return { entities: previousState.entities }
			})
		},
		bindings: [
			{
				keys: ['Space'],
			},
		],
		type: CONTROL_TYPES.KEYS,
	},
}
