// Module imports
import {
	Container,
	Graphics,
	TilingSprite,
} from '@pixi/react'
import { Assets } from '@pixi/assets'
import { store } from 'store'
import { useCallback } from 'react'
import { useStore } from 'statery'





// Constants
const TILE_POSITION = {
	x: 0,
	y: 0,
}





/**
 * Renders the game background.
 *
 * @component
 */
export function GameBackground() {
	const { viewport } = useStore(store)

	const background1 = Assets.get('background1')
	const background2 = Assets.get('background2')
	const background3 = Assets.get('background3')
	const stars1 = Assets.get('stars1')
	const stars2 = Assets.get('stars2')
	const stars3 = Assets.get('stars3')

	const draw = useCallback(graphics => {
		graphics.clear()

		graphics.beginFill(0x2e222f)
		graphics.drawRect(0, 0, viewport.width, viewport.height)
	}, [
		viewport.height,
		viewport.width,
	])

	return (
		<Container>
			<Graphics draw={draw} />

			<TilingSprite
				height={viewport.height}
				texture={background1}
				tilePosition={TILE_POSITION}
				width={viewport.width} />

			<TilingSprite
				height={viewport.height}
				texture={background2}
				tilePosition={TILE_POSITION}
				width={viewport.width} />

			<TilingSprite
				height={viewport.height}
				texture={background3}
				tilePosition={TILE_POSITION}
				width={viewport.width} />

			<TilingSprite
				height={viewport.height}
				texture={stars1}
				tilePosition={TILE_POSITION}
				width={viewport.width} />

			<TilingSprite
				height={viewport.height}
				texture={stars2}
				tilePosition={TILE_POSITION}
				width={viewport.width} />

			<TilingSprite
				height={viewport.height}
				texture={stars3}
				tilePosition={TILE_POSITION}
				width={viewport.width} />
		</Container>
	)
}
