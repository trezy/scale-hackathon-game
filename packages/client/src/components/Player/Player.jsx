// Module imports
import { Graphics } from '@pixi/react'
import { useCallback } from 'react'





/**
 * Renders the game background.
 *
 * @component
 */
export function Player() {
	const draw = useCallback(graphics => {
		graphics.clear()

		graphics.beginFill(0x0000ff)
		graphics.drawRect(0, 0, 20, 20)
	}, [])

	return (
		<Graphics draw={draw} />
	)
}
