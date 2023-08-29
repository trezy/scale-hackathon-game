// Module imports
import {
	useEffect,
	useMemo,
} from 'react'
import PropTypes from 'prop-types'
import { useApp } from '@pixi/react'
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
export function Game(props) {
	const { resizeToRef } = props

	const pixiApp = useApp()
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

	useEffect(() => {
		pixiApp.resizeTo = resizeToRef.current
		pixiApp.resize()

		store.set(() => ({
			viewport: {
				height: pixiApp.screen.height,
				width: pixiApp.screen.width,
			},
		}))
	}, [
		pixiApp,
		resizeToRef,
	])

	return (
		<>
			<GameBackground />
			{entitiesComponents}
		</>
	)
}

Game.propTypes = {
	resizeToRef: PropTypes.object.isRequired,
}
