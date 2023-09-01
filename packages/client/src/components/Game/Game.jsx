// Module imports
import {
	BaseTexture,
	SCALE_MODES,
} from '@pixi/core'
import PropTypes from 'prop-types'
import { store } from 'store'
import { useApp } from '@pixi/react'
import { useEffect } from 'react'
import { useStore } from 'statery'





// Local imports
import { GameBackground } from '../GameBackground/GameBackground.jsx'
import { GameEntities } from '../GameEntities/GameEntities.jsx'
import { initialize } from '../../game/initialize.js'
import { useGameLoop } from '../../hooks/useGameLoop.js'





/**
 * Renders the game.
 *
 * @component
 */
export function Game(props) {
	const { resizeToRef } = props
	const {
		isInitialized,
		isInitializing,
	} = useStore(store)

	const pixiApp = useApp()

	useGameLoop()

	useEffect(() => {
		if (!isInitialized && !isInitializing) {
			initialize()
		}
	}, [
		isInitialized,
		isInitializing,
	])

	useEffect(() => {
		pixiApp.resizeTo = resizeToRef.current
		pixiApp.resize()

		BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST

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

	if (!isInitialized) {
		return null
	}

	return (
		<>
			<GameBackground />
			<GameEntities />
		</>
	)
}

Game.propTypes = {
	resizeToRef: PropTypes.object.isRequired,
}
