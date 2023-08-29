// Module imports
import { Graphics } from '@pixi/react'
import { useCallback } from 'react'
import { useStore } from 'statery'





// Local imports
import { store } from '../../store/store.js'





/**
 * Renders the game background.
 *
 * @component
 */
export function GameBackground() {
	const { viewport } = useStore(store)

	const draw = useCallback(graphics => {
		graphics.clear()

		graphics.beginFill(0x00ff00)
		graphics.drawRect(0, 0, viewport.width, viewport.height)
	}, [viewport])

	return (
		<Graphics draw={draw} />
	)
}
