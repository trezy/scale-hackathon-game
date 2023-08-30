// Module imports
import {
	BaseTexture,
	SCALE_MODES,
} from '@pixi/core'
import PropTypes from 'prop-types'
import { useApp } from '@pixi/react'
import { useEffect } from 'react'
import { useStore } from 'statery'





// Local imports
import { GameBackground } from '../GameBackground/GameBackground.jsx'
import { GameEntities } from '../GameEntities/GameEntities.jsx'
import { loadGameAssets } from '../../game/loadGameAssets.js'
import { store } from '../../store/store.js'
import { useGameLoop } from '../../hooks/useGameLoop.js'





/**
 * Renders the game.
 *
 * @component
 */
export function Game(props) {
	const { resizeToRef } = props
	const {
		areAssetsLoaded,
		isLoadingAssets,
	} = useStore(store)

	const pixiApp = useApp()

	useGameLoop()

	useEffect(() => {
		if (!areAssetsLoaded && !isLoadingAssets) {
			loadGameAssets()
		}
	}, [
		areAssetsLoaded,
		isLoadingAssets,
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

	if (isLoadingAssets || !areAssetsLoaded) {
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
