// Module imports
import { useMemo } from 'react'
import { useStore } from 'statery'





// Local imports
import { Entity } from '../Entity/Entity.jsx'
import { GameBackground } from '../GameBackground/GameBackground.jsx'
import { store } from '../../store/store.js'
import { useGameLoop } from '../../hooks/useGameLoop.js'





/**
 * Renders the game.
 *
 * @component
 */
export function Game() {
	const { entities } = useStore(store)

	useGameLoop()

	const entitiesComponents = useMemo(() => {
		return entities.map(entity => {
			return (
				<Entity
					key={entity.id}
					entity={entity} />
			)
		})
	}, [entities])

	return (
		<>
			<GameBackground />
			{entitiesComponents}
		</>
	)
}
