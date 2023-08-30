// Module imports
import { useMemo } from 'react'
import { useStore } from 'statery'





// Local imports
import { Entity } from '../Entity/Entity.jsx'
import { store } from '../../store/store.js'
import { useGameLoop } from '../../hooks/useGameLoop.js'





/**
 * Renders the game.
 *
 * @component
 */
export function GameEntities() {
	const {
		entities,
		entityRenderOrder,
	} = useStore(store)

	useGameLoop()

	return useMemo(() => {
		return entityRenderOrder.map(entityIndex => {
			const entity = entities[entityIndex]
			return (
				<Entity
					key={entity.id}
					entity={entity} />
			)
		})
	}, [
		entities,
		entityRenderOrder,
	])
}
