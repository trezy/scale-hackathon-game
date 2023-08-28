// Module imports
import {
	Graphics,
	useApp,
} from '@pixi/react'
import { useCallback } from 'react'





/**
 * Renders the game background.
 *
 * @component
 */
export function GameBackground() {
	const app = useApp()

	const draw = useCallback(graphics => {
		graphics.clear()

		graphics.beginFill(0x00ff00)
		graphics.drawRect(0, 0, app.screen.width, app.screen.height)
	}, [app])

	return (
		<Graphics draw={draw} />
	)
}
