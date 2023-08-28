// Module imports
import {
	Container,
	Sprite,
	Stage,
	Text,
} from '@pixi/react'
import { BlurFilter } from 'pixi.js'
import { useMemo } from 'react'





/**
 * Renders the game.
 *
 * @component
 */
export function Game() {
	const blurFilter = useMemo(() => new BlurFilter(4), [])

	const textAnchor = useMemo(() => {
		return {
			x: 0.5,
			y: 0.5,
		}
	}, [])
	const textFilters = useMemo(() => {
		return [blurFilter]
	}, [blurFilter])

	const spriteAnchor = useMemo(() => {
		return {
			x: 0.5,
			y: 0.5,
		}
	}, [])

	return (
		<Stage>
			<Sprite
				anchor={spriteAnchor}
				image={'https://pixijs.io/pixi-react/img/bunny.png'}
				x={400}
				y={270} />

			<Container
				x={400}
				y={330}>
				<Text
					anchor={textAnchor}
					filters={textFilters}
					text={'Hello World'} />
			</Container>
		</Stage>
	)
}
