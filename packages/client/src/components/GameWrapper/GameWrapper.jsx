// Module imports
// import { BlurFilter } from 'pixi.js'
import { Stage } from '@pixi/react'
// import { useMemo } from 'react'
// import { useStore } from 'statery'





// Local imports
import { Game } from '../Game/Game.jsx'





/**
 * Renders the game.
 *
 * @component
 */
export function GameWrapper() {
	return (
		<Stage>
			<Game />
		</Stage>
	)
}
